import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useCallback, useEffect, useState } from 'react';
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
import { TokenIdType } from 'views/protectedModelViews/verification';
import { CustomerCredit, ModelCreditRes } from 'services/customerCredit/customerCredit.service';
import { getUserDataClient } from 'utils/getSessionData';

const Credits = () => {
  const [favListing, setFavListing] = useState<ModelCreditRes[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };
    userToken();
  }, []);

  const getFavListing = useCallback(async () => {
    if (token.token) {
      const getModel = await CustomerCredit.getCustomerCredit(token.token);
      setFavListing(getModel.data);
    }
  }, [token.token]);

  useEffect(() => {
    getFavListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  console.log(favListing, 'favListing');

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
