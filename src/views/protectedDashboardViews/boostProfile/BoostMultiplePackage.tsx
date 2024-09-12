'use client';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import {
  BoostFireImagContainer,
  BoostPackageMainBoxContainer,
  BoxFirstTextContainer,
  BoxSecondTextContainer,
  CreditBuyText,
  CreditCardImage,
  DollarCreditText,
  FirstBoxContainer,
  FreeBoostTextBoxContainer,
  HighlyAvailableBoxBoost,
  HighlyAvailableButtonBoxBoost,
  ImagSubContainer,
  MainImagContainer,
  PackageContainer
} from './BoostMultiplePackage.styled';
import { ProfilePlanResData } from 'services/commonApi/commonApi.services';
import { Box, Grid } from '@mui/material';
import { BoostMainBox, PackageTypography, UINewTypographyPackage } from './boostProfile.styled';
import StyledBoostChip from 'components/UIComponents/UIStyledBoostChip';

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
        <BoostMainBox>
          <UINewTypographyPackage>
            <FormattedMessage id="ChooseABoostPackageToSpotligh" />
          </UINewTypographyPackage>
        </BoostMainBox>
        <Box>
          <Grid container spacing={2.5}>
            {allPlans?.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <PackageContainer onClick={() => handleBoostOpen(plan)}>
                  {Boolean(plan.is_free) && (
                    <HighlyAvailableButtonBoxBoost>
                      <HighlyAvailableBoxBoost>
                        <BoostFireImagContainer src="/images/boostProfile/fire.png" height={70} width={60} alt="fire_icon" />
                        <FreeBoostTextBoxContainer>
                          <StyledBoostChip>
                            <UINewTypography variant="bodyUltraLarge" color="#000" sx={{ textWrap: 'nowrap' }}>
                              <FormattedMessage id="1BoostFREE" />
                            </UINewTypography>
                          </StyledBoostChip>
                        </FreeBoostTextBoxContainer>
                      </HighlyAvailableBoxBoost>
                    </HighlyAvailableButtonBoxBoost>
                  )}
                  <FirstBoxContainer>
                    <ImagSubContainer>
                      <MainImagContainer src={plan.link ?? '/images/boostFeature/boostPackOne.png'} />
                      <BoxFirstTextContainer>
                        <CreditCardImage src="/images/icons/boost-timer-icon.svg" />
                        <PackageTypography>
                          {plan.duration} <FormattedMessage id="Hours" />
                        </PackageTypography>
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
                </PackageContainer>
              </Grid>
            ))}
          </Grid>
        </Box>
      </BoostPackageMainBoxContainer>
    </>
  );
};

export default BoostMultiplePackage;
