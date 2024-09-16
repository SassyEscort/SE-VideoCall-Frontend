'use client';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import HomeMainModelContainer from 'views/modelViews/modelLayout/homeModelContainer';
import {
  SideBarMainContainer,
  SideBarFirstBox,
  SideBarSecondBox,
  SideBarThirdBox,
  SideBarCircleBox,
  SideBarCircleTextBox,
  SwitchText,
  // StartView,
  TextViewStartBottom,
  SwitchBox,
  MainBoxAvailability,
  MainBoxSwitch,
  StartView
} from './ModelAvilability.styled';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { TokenIdType } from 'views/protectedModelViews/verification';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { toast } from 'react-toastify';
import { PayoutService } from 'services/payout/payout.service';
import { ErrorMessage } from 'constants/common.constants';

const Availability = ({
  modelDetails,
  token,
  handleModelApiChange
}: {
  modelDetails: ModelDetailsResponse;
  token: TokenIdType;
  handleModelApiChange: () => void;
}) => {
  const firstChar = modelDetails?.name ? modelDetails.name.charAt(0).toUpperCase() : '';

  const handleAvailability = async () => {
    try {
      if (token.token) {
        const data = await PayoutService.markOnline(token.token);
        if (data.code === 200) {
          handleModelApiChange();
        } else {
          toast.error(ErrorMessage);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };
  return (
    <HomeMainModelContainer>
      <SideBarMainContainer>
        <SideBarFirstBox>
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <SideBarSecondBox>
              <MainBoxAvailability>
                <SideBarThirdBox>
                  <SideBarCircleBox></SideBarCircleBox>
                  <SideBarCircleTextBox>{firstChar}</SideBarCircleTextBox>
                </SideBarThirdBox>

                <MainBoxSwitch>
                  <UINewTypography variant="newTitle" color="text.primary" sx={{ paddingBottom: '6px' }}>
                    {modelDetails?.name}
                  </UINewTypography>

                  <SwitchText>
                    <StartView>
                      {[...Array(5)].map((_, index) => {
                        return (
                          <StarRateRoundedIcon
                            key={index}
                            htmlColor={
                              index < (modelDetails?.model_ratings?.model_rating_info?.[0]?.average_rating || 0) ? '#FFB800' : '#FFFFFF17'
                            }
                            sx={{ width: '24px', height: '24px' }}
                          />
                        );
                      })}
                    </StartView>
                    <TextViewStartBottom>
                      <SwitchBox onClick={handleAvailability} checked={Boolean(modelDetails?.is_online)} />

                      <UINewTypography variant="SubtitleSmallMedium" color="secondary.700" sx={{ textWrap: 'nowrap' }}>
                        {Boolean(modelDetails?.is_online) ? <FormattedMessage id="Availability" /> : <FormattedMessage id="NotAvailable" />}
                      </UINewTypography>
                    </TextViewStartBottom>
                  </SwitchText>
                </MainBoxSwitch>
              </MainBoxAvailability>
            </SideBarSecondBox>
          </Box>
        </SideBarFirstBox>
      </SideBarMainContainer>
    </HomeMainModelContainer>
  );
};

export default Availability;
