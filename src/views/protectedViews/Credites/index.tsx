import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { SecondSubContainerImgWorkerCard } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';
import {
  BoxFirstTextContainer,
  BoxSecondTextContainer,
  BuyCreditsText,
  CancelCreditValue,
  CreditBestValue,
  CreditBuyText,
  CreditCardImage,
  CreditCardText,
  CreditMostPopular,
  CreditsMainContainer,
  CreditsSubContainer,
  DollarCreditText,
  FirsTextMainContainer,
  FirsTextSubContainer,
  FirstBoxContainer,
  ImagMainContainer,
  ImagSubContainer,
  MainImagContainer,
  SecondTextSubContainer,
  TextMainContainer,
  TopTextContainer
} from './Credits.styled';
import MainLayoutNav from '../protectedLayout';
import { FormattedMessage } from 'react-intl';

const Credits = () => {
  return (
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <CreditsMainContainer>
        <CreditsSubContainer>
          <TextMainContainer>
            <FirsTextMainContainer>
              <UINewTypography variant="h2" color="text.secondary">
                <FormattedMessage id="Credits" />
              </UINewTypography>
              <FirsTextSubContainer>
                <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                  <FormattedMessage id="Balance" />
                </UINewTypography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                  <SecondSubContainerImgWorkerCard src="/images/workercards/coin-1.png" />
                  <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                    40
                  </UINewTypography>
                </Box>
              </FirsTextSubContainer>
            </FirsTextMainContainer>
            <SecondTextSubContainer>
              <BuyCreditsText>
                <FormattedMessage id="BuyCredits" />
              </BuyCreditsText>
            </SecondTextSubContainer>
          </TextMainContainer>
          <ImagMainContainer>
            <FirstBoxContainer>
              <ImagSubContainer>
                <MainImagContainer src="/images/credits/credits-img-1.png" />
                <BoxFirstTextContainer>
                  <CreditCardImage src="/images/workercards/coin-1.png" />
                  <CreditCardText variant="subtitle" color="text.secondary">
                    90 <FormattedMessage id="Credits" />
                  </CreditCardText>
                </BoxFirstTextContainer>
                <BoxSecondTextContainer>
                  <CreditBuyText variant="bodySmall" color="secondary.700">
                    <FormattedMessage id="BuyNowAt" />
                  </CreditBuyText>
                  <DollarCreditText color="text.secondary">$1.99</DollarCreditText>
                </BoxSecondTextContainer>
              </ImagSubContainer>

              <ImagSubContainer>
                <MainImagContainer src="/images/credits/credits-img-2.png" />
                <BoxFirstTextContainer>
                  <CreditCardImage src="/images/workercards/coin-1.png" />
                  <CreditCardText variant="subtitle" color="text.secondary">
                    90 <FormattedMessage id="Credits" />
                  </CreditCardText>
                </BoxFirstTextContainer>
                <BoxSecondTextContainer>
                  <CreditBuyText variant="bodySmall" color="secondary.700">
                    <FormattedMessage id="BuyNowAt" />
                  </CreditBuyText>
                  <DollarCreditText color="text.secondary">$1.99</DollarCreditText>
                </BoxSecondTextContainer>
              </ImagSubContainer>

              <ImagSubContainer>
                <MainImagContainer src="/images/credits/credits-img-3.png" />
                <BoxFirstTextContainer>
                  <CreditCardImage src="/images/workercards/coin-1.png" />
                  <CreditCardText variant="subtitle" color="text.secondary">
                    90 <FormattedMessage id="Credits" />
                  </CreditCardText>
                </BoxFirstTextContainer>
                <BoxSecondTextContainer>
                  <CreditBuyText variant="bodySmall" color="secondary.700">
                    <FormattedMessage id="BuyNowAt" />
                  </CreditBuyText>
                  <DollarCreditText color="text.secondary">$9.99</DollarCreditText>
                  <CancelCreditValue color="text.primary">$19.99</CancelCreditValue>
                </BoxSecondTextContainer>
                <TopTextContainer>
                  <CreditBestValue color="text.secondary">
                    <FormattedMessage id="BestValue" />
                  </CreditBestValue>
                </TopTextContainer>
              </ImagSubContainer>
            </FirstBoxContainer>

            <FirstBoxContainer>
              <ImagSubContainer>
                <MainImagContainer src="/images/credits/credits-img-4.png" />
                <BoxFirstTextContainer>
                  <CreditCardImage src="/images/workercards/coin-1.png" />
                  <CreditCardText variant="subtitle" color="text.secondary">
                    90 <FormattedMessage id="Credits" />
                  </CreditCardText>
                </BoxFirstTextContainer>
                <BoxSecondTextContainer>
                  <CreditBuyText variant="bodySmall" color="secondary.700">
                    <FormattedMessage id="BuyNowAt" />
                  </CreditBuyText>
                  <DollarCreditText color="text.secondary">$1.99</DollarCreditText>
                </BoxSecondTextContainer>
                <TopTextContainer>
                  <CreditMostPopular color="text.secondary">
                    <FormattedMessage id="MostPopular" />
                  </CreditMostPopular>
                </TopTextContainer>
              </ImagSubContainer>

              <ImagSubContainer>
                <MainImagContainer src="/images/credits/credits-img-5.png" />
                <BoxFirstTextContainer>
                  <CreditCardImage src="/images/workercards/coin-1.png" />
                  <CreditCardText variant="subtitle" color="text.secondary">
                    90 <FormattedMessage id="Credits" />
                  </CreditCardText>
                </BoxFirstTextContainer>
                <BoxSecondTextContainer>
                  <CreditBuyText variant="bodySmall" color="secondary.700">
                    <FormattedMessage id="BuyNowAt" />
                  </CreditBuyText>
                  <DollarCreditText color="text.secondary">$1.99</DollarCreditText>
                </BoxSecondTextContainer>
              </ImagSubContainer>

              <ImagSubContainer>
                <MainImagContainer src="/images/credits/credits-img-6.png" />
                <BoxFirstTextContainer>
                  <CreditCardImage src="/images/workercards/coin-1.png" />
                  <CreditCardText variant="subtitle" color="text.secondary">
                    90 <FormattedMessage id="Credits" />
                  </CreditCardText>
                </BoxFirstTextContainer>
                <BoxSecondTextContainer>
                  <CreditBuyText variant="bodySmall" color="secondary.700">
                    <FormattedMessage id="BuyNowAt" />
                  </CreditBuyText>
                  <DollarCreditText color="text.secondary">$1.99</DollarCreditText>
                </BoxSecondTextContainer>
              </ImagSubContainer>
            </FirstBoxContainer>
          </ImagMainContainer>
        </CreditsSubContainer>
      </CreditsMainContainer>
    </MainLayoutNav>
  );
};

export default Credits;
