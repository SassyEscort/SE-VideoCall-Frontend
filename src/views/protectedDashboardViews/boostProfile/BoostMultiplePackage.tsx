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
  HighlyAvailableBoxBoost,
  HighlyAvailableButtonBoxBoost,
  ImagSubContainer,
  MainImagContainer
} from './BoostMultiplePackage.styled';
import { ProfilePlanResData } from 'services/commonApi/commonApi.services';
import { Box, Grid, useMediaQuery } from '@mui/material';
import { ImagMainContainer } from 'views/protectedViews/Credites/Credits.styled';
import Image from 'next/image';
import theme from 'themes/theme';
import StyleBoostButton from 'components/UIComponents/StyleBoostButton';

const BoostMultiplePackage = ({ allPlans, handleBoostOpen }: { allPlans: ProfilePlanResData[]; handleBoostOpen: () => void }) => {
  const isTablet = useMediaQuery(theme.breakpoints.only('sm'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BoostPackageMainBoxContainer onClick={handleBoostOpen}>
      <UINewTypography variant="h5">
        <FormattedMessage id="ChooseABoostPackageToSpotligh" />
      </UINewTypography>
      <ImagMainContainer>
        <HighlyAvailableButtonBoxBoost>
          <HighlyAvailableBoxBoost>
            <Image
              src="/images/boostProfile/fire-ani.gif"
              height={57}
              width={42}
              alt="fire_icon"
              style={{ zIndex: 10, left: isTablet ? '-15px' : isMdDown ? '-15px' : '-15px', position: 'absolute', bottom: '-90px' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '-90px',
                left: isTablet ? '0px' : isMdDown ? '-1px' : '-1px'
              }}
            >
              <StyleBoostButton>
                <UINewTypography variant="bodyUltraLarge" color="#000">
                  <FormattedMessage id="1BoostFREE" />
                </UINewTypography>
              </StyleBoostButton>
            </Box>
          </HighlyAvailableBoxBoost>
        </HighlyAvailableButtonBoxBoost>
        <FirstBoxContainer>
          <Grid container sx={{ gap: 2 }}>
            {allPlans?.map((plan, index) => (
              <ImagSubContainer key={index}>
                <MainImagContainer src="/images/credits/credits-img-1.png" />
                <BoxFirstTextContainer>
                  <CreditCardImage src="/images/icons/boost-timer-icon.svg" />
                  <UINewTypography sx={{ fontSize: '28px', fontWeight: 500, lineHeight: '33.6px', color: 'text.secondary' }}>
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
                <BoxSecondTextContainer></BoxSecondTextContainer>
              </ImagSubContainer>
            ))}
          </Grid>
        </FirstBoxContainer>
      </ImagMainContainer>
    </BoostPackageMainBoxContainer>
  );
};

export default BoostMultiplePackage;
