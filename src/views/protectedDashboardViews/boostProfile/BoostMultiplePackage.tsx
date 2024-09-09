'use client';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
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

const BoostMultiplePackage = () => {
  return (
    <BoostPackageMainBoxContainer>
      <UINewTypography variant="h5">
        <FormattedMessage id="ChooseABoostPackageToSpotligh" />
      </UINewTypography>

      <Box>
        <FirstBoxContainer>
          <ImagSubContainer>
            <MainImagContainer src="/images/credits/credits-img-1.png" />
            <BoxFirstTextContainer>
              <CreditCardImage src="/images/icons/boost-timer-icon.svg" />
              <UINewTypography sx={{ fontSize: '28px', fontWeight: 500, lineHeight: '33.6px', color: 'text.secondary' }}>
                2 hours
              </UINewTypography>
            </BoxFirstTextContainer>
            <BoxSecondTextContainer>
              <DollarCreditText color="text.secondary">Free</DollarCreditText>
            </BoxSecondTextContainer>
          </ImagSubContainer>

          <ImagSubContainer>
            <MainImagContainer src="/images/credits/credits-img-2.png" />
            <BoxFirstTextContainer>
              <CreditCardImage src="/images/icons/boost-timer-icon.svg" />
              <UINewTypography sx={{ fontSize: '28px', fontWeight: 500, lineHeight: '33.6px', color: 'text.secondary' }}>
                2 hours
              </UINewTypography>
            </BoxFirstTextContainer>
            <BoxSecondTextContainer>
              <CreditBuyText variant="bodySmall" color="secondary.700">
                <FormattedMessage id="BuyNowAt" />
              </CreditBuyText>
              <DollarCreditText color="text.secondary">$0.1</DollarCreditText>
            </BoxSecondTextContainer>
          </ImagSubContainer>

          <ImagSubContainer>
            <MainImagContainer src="/images/credits/credits-img-2.png" />
            <BoxFirstTextContainer>
              <CreditCardImage src="/images/icons/boost-timer-icon.svg" />
              <UINewTypography sx={{ fontSize: '28px', fontWeight: 500, lineHeight: '33.6px', color: 'text.secondary' }}>
                4 hours
              </UINewTypography>
            </BoxFirstTextContainer>
            <BoxSecondTextContainer>
              <CreditBuyText variant="bodySmall" color="secondary.700">
                <FormattedMessage id="BuyNowAt" />
              </CreditBuyText>
              <DollarCreditText color="text.secondary">$0.15</DollarCreditText>
            </BoxSecondTextContainer>
          </ImagSubContainer>
        </FirstBoxContainer>
      </Box>
    </BoostPackageMainBoxContainer>
  );
};

export default BoostMultiplePackage;
