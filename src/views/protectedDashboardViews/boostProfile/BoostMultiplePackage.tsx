'use client';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import {
  BoostPackageMainBoxContainer,
  BoxFirstTextContainer,
  BoxSecondTextContainer,
  CreditBuyText,
  CreditCardImage,
  DollarCreditText,
  FirstBoxContainer,
  ImagSubContainer,
  MainImagContainer
} from './BoostMultiplePackage.styled';
import { ProfilePlanResData } from 'services/commonApi/commonApi.services';
import { Box, Grid } from '@mui/material';
import { ImagMainContainer } from 'views/protectedViews/Credites/Credits.styled';

const BoostMultiplePackage = ({
  allPlans,
  handleBoostOpen
}: {
  allPlans: ProfilePlanResData[];
  handleBoostOpen: (planDetails: ProfilePlanResData) => void;
}) => {
  return (
    <>
      <BoostPackageMainBoxContainer>
        <UINewTypography variant="h5">
          <FormattedMessage id="ChooseABoostPackageToSpotligh" />
        </UINewTypography>

        <Box>
          <Grid container spacing={2}>
            {allPlans?.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <ImagMainContainer onClick={() => handleBoostOpen(plan)}>
                  <FirstBoxContainer>
                    <ImagSubContainer>
                      <MainImagContainer src="/images/credits/credits-img-1.png" />
                      <BoxFirstTextContainer>
                        <CreditCardImage src="/images/icons/boost-timer-icon.svg" />
                        <UINewTypography
                          sx={{
                            fontSize: '28px',
                            fontWeight: 500,
                            lineHeight: '33.6px',
                            color: 'text.secondary'
                          }}
                        >
                          {plan.duration} <FormattedMessage id="Hours" />
                        </UINewTypography>
                      </BoxFirstTextContainer>
                      <BoxSecondTextContainer>
                        {!plan.is_free && (
                          <CreditBuyText variant="bodySmall" color="secondary.700">
                            <FormattedMessage id="BuyNowAt" />
                          </CreditBuyText>
                        )}
                        <DollarCreditText color="text.secondary">
                          {plan.is_free ? <FormattedMessage id="Free" /> : `$${plan.cost}`}
                        </DollarCreditText>
                      </BoxSecondTextContainer>
                    </ImagSubContainer>
                  </FirstBoxContainer>
                </ImagMainContainer>
              </Grid>
            ))}
          </Grid>
        </Box>
      </BoostPackageMainBoxContainer>
    </>
  );
};

export default BoostMultiplePackage;
