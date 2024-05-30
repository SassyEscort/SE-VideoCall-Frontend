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
  ImagMainContainer,
  ImagSubContainer,
  MainImagContainer,
  SecondTextSubContainer,
  TextMainContainer,
  TopTextContainer
} from './Credits.styled';
import MainLayoutNav from '../protectedLayout';

const Credits = () => {
  return (
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <CreditsMainContainer>
        <CreditsSubContainer>
          <TextMainContainer>
            <FirsTextMainContainer>
              <UINewTypography variant="h2" color="text.secondary">
                Credit
              </UINewTypography>
              <FirsTextSubContainer>
                <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                  Balance:
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
              <BuyCreditsText>Buy Credits and have non stop video calls with your favourite models.</BuyCreditsText>
            </SecondTextSubContainer>
          </TextMainContainer>
          <ImagMainContainer>
            <ImagSubContainer>
              <MainImagContainer src="/images/credits/credits-img-1.png" />
              <BoxFirstTextContainer>
                <CreditCardImage src="/images/workercards/coin-1.png" />
                <CreditCardText variant="subtitle" color="text.secondary">
                  90 credits
                </CreditCardText>
              </BoxFirstTextContainer>
              <BoxSecondTextContainer>
                <CreditBuyText variant="bodySmall" color="secondary.700">
                  Buy Now at
                </CreditBuyText>
                <DollarCreditText color="text.secondary">$1.99</DollarCreditText>
              </BoxSecondTextContainer>
            </ImagSubContainer>

            <ImagSubContainer>
              <MainImagContainer src="/images/credits/credits-img-2.png" />
              <BoxFirstTextContainer>
                <CreditCardImage src="/images/workercards/coin-1.png" />
                <CreditCardText variant="subtitle" color="text.secondary">
                  90 credits
                </CreditCardText>
              </BoxFirstTextContainer>
              <BoxSecondTextContainer>
                <CreditBuyText variant="bodySmall" color="secondary.700">
                  Buy Now at
                </CreditBuyText>
                <DollarCreditText color="text.secondary">$1.99</DollarCreditText>
              </BoxSecondTextContainer>
            </ImagSubContainer>

            <ImagSubContainer>
              <MainImagContainer src="/images/credits/credits-img-3.png" />
              <BoxFirstTextContainer>
                <CreditCardImage src="/images/workercards/coin-1.png" />
                <CreditCardText variant="subtitle" color="text.secondary">
                  90 credits
                </CreditCardText>
              </BoxFirstTextContainer>
              <BoxSecondTextContainer>
                <CreditBuyText variant="bodySmall" color="secondary.700">
                  Buy Now at
                </CreditBuyText>
                <DollarCreditText color="text.secondary">$9.99</DollarCreditText>
                <CancelCreditValue color="text.primary">$19.99</CancelCreditValue>
              </BoxSecondTextContainer>
              <TopTextContainer>
                <CreditBestValue color="text.secondary">Best Value</CreditBestValue>
              </TopTextContainer>
            </ImagSubContainer>

            <ImagSubContainer>
              <MainImagContainer src="/images/credits/credits-img-4.png" />
              <BoxFirstTextContainer>
                <CreditCardImage src="/images/workercards/coin-1.png" />
                <CreditCardText variant="subtitle" color="text.secondary">
                  90 credits
                </CreditCardText>
              </BoxFirstTextContainer>
              <BoxSecondTextContainer>
                <CreditBuyText variant="bodySmall" color="secondary.700">
                  Buy Now at
                </CreditBuyText>
                <DollarCreditText color="text.secondary">$1.99</DollarCreditText>
              </BoxSecondTextContainer>
              <TopTextContainer>
                <CreditMostPopular color="text.secondary">Most Popular</CreditMostPopular>
              </TopTextContainer>
            </ImagSubContainer>

            <ImagSubContainer>
              <MainImagContainer src="/images/credits/credits-img-5.png" />
              <BoxFirstTextContainer>
                <CreditCardImage src="/images/workercards/coin-1.png" />
                <CreditCardText variant="subtitle" color="text.secondary">
                  90 credits
                </CreditCardText>
              </BoxFirstTextContainer>
              <BoxSecondTextContainer>
                <CreditBuyText variant="bodySmall" color="secondary.700">
                  Buy Now at
                </CreditBuyText>
                <DollarCreditText color="text.secondary">$1.99</DollarCreditText>
              </BoxSecondTextContainer>
            </ImagSubContainer>

            <ImagSubContainer>
              <MainImagContainer src="/images/credits/credits-img-6.png" />
              <BoxFirstTextContainer>
                <CreditCardImage src="/images/workercards/coin-1.png" />
                <CreditCardText variant="subtitle" color="text.secondary">
                  90 credits
                </CreditCardText>
              </BoxFirstTextContainer>
              <BoxSecondTextContainer>
                <CreditBuyText variant="bodySmall" color="secondary.700">
                  Buy Now at
                </CreditBuyText>
                <DollarCreditText color="text.secondary">$1.99</DollarCreditText>
              </BoxSecondTextContainer>
            </ImagSubContainer>
          </ImagMainContainer>
        </CreditsSubContainer>
      </CreditsMainContainer>
    </MainLayoutNav>
  );
};

export default Credits;
