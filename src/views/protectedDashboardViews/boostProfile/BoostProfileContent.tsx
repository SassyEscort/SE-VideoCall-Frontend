import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import {
  BoostBox,
  BoostMainBoxAgree,
  BoostProfileBox,
  BoostProfileMainContainer,
  BoostProfileMissCallBox,
  BoostProfileMissedCallTextContainer,
  BoostProfileModelBox,
  BoostProfileTextContainer,
  DividerMainBox,
  FireIcon,
  MainBoostButtonBox,
  SecondBoostButtonBox,
  SupBox,
  UINewTypographyCondition,
  UINewTypographyMissedCall,
  UINewTypographyMissedCallBox
} from './boostProfile.styled';
import Checkbox from '@mui/material/Checkbox';
import StyleBoostButton from 'components/UIComponents/StyleBoostButton';
import { useState } from 'react';
import { ProfilePlanResData } from 'services/commonApi/commonApi.services';

const BoostProfileContent = ({
  handleBoost,
  planDetails
}: {
  handleBoost: (planId: number) => Promise<void>;
  planDetails: ProfilePlanResData;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <DividerMainBox />
      <BoostBox>
        <BoostProfileMainContainer>
          <BoostProfileBox>
            <BoostProfileModelBox>
              <BoostProfileTextContainer>
                <UINewTypography variant="bodyRegular" color="text.secondary" textAlign="center">
                  <FormattedMessage id="IfYouMissCalls" />
                </UINewTypography>
              </BoostProfileTextContainer>
              <BoostProfileMissedCallTextContainer>
                <BoostProfileMissCallBox>
                  <UINewTypographyMissedCall>
                    1
                    <SupBox>
                      <FormattedMessage id="st" />
                    </SupBox>
                    <UINewTypographyMissedCallBox>
                      <FormattedMessage id="MissedCall" />
                    </UINewTypographyMissedCallBox>
                  </UINewTypographyMissedCall>
                  <UINewTypography variant="bodySmall" color="text.secondary" textAlign="center">
                    <FormattedMessage id="RemovedFrom" />{' '}
                    <UINewTypography variant="bodySmall" color="error.300">
                      <FormattedMessage id="5Mins" />
                    </UINewTypography>
                  </UINewTypography>
                </BoostProfileMissCallBox>
                <BoostProfileMissCallBox>
                  <UINewTypographyMissedCall>
                    2
                    <SupBox>
                      <FormattedMessage id="Nd" />
                    </SupBox>
                    <UINewTypographyMissedCallBox>
                      <FormattedMessage id="MissedCall" />
                    </UINewTypographyMissedCallBox>
                  </UINewTypographyMissedCall>
                  <UINewTypography variant="bodySmall" color="text.secondary" textAlign="center">
                    <FormattedMessage id="RemovedFrom" />{' '}
                    <UINewTypography variant="bodySmall" color="error.300">
                      <FormattedMessage id="10Mins" />
                    </UINewTypography>
                  </UINewTypography>
                </BoostProfileMissCallBox>
                <BoostProfileMissCallBox>
                  <UINewTypographyMissedCall>
                    3
                    <SupBox>
                      <FormattedMessage id="Rd" />
                    </SupBox>
                    <UINewTypographyMissedCallBox>
                      <FormattedMessage id="MissedCall" />
                    </UINewTypographyMissedCallBox>
                  </UINewTypographyMissedCall>
                  <UINewTypography variant="bodySmall" color="text.secondary" textAlign="center">
                    <FormattedMessage id="ProfileGets" />{' '}
                    <UINewTypography variant="bodySmall" color="error.300">
                      <FormattedMessage id="OfflineModel" />
                    </UINewTypography>
                  </UINewTypography>
                </BoostProfileMissCallBox>
              </BoostProfileMissedCallTextContainer>
            </BoostProfileModelBox>
            <Box>
              <BoostMainBoxAgree>
                <Checkbox sx={{ p: 0, pr: 1 }} checked={isChecked} onClick={handleCheck} />
                <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' }, whiteSpace: { xs: 'wrap' } }}>
                  <FormattedMessage id="IveRead" />
                </UINewTypography>
              </BoostMainBoxAgree>
              <MainBoostButtonBox>
                <SecondBoostButtonBox>
                  <FireIcon src="/images/boostProfile/fire.png" height={110} width={100} alt="fire_icon" />
                  <StyleBoostButton onClick={() => handleBoost(planDetails?.id)} disabled={!isChecked}>
                    <UINewTypographyCondition>
                      <FormattedMessage id="StartBoostFor" /> {planDetails.duration} <FormattedMessage id="Hours" />
                    </UINewTypographyCondition>
                  </StyleBoostButton>
                </SecondBoostButtonBox>
              </MainBoostButtonBox>
            </Box>
          </BoostProfileBox>
        </BoostProfileMainContainer>
      </BoostBox>
    </>
  );
};

export default BoostProfileContent;
