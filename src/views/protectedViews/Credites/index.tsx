import UINewTypography from 'components/UIComponents/UINewTypography';
import { useCallback, useEffect, useState } from 'react';
import { SecondSubContainerImgWorkerCard } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';
import {
  BoxFirstTextContainer,
  BoxSecondTextContainer,
  BuyCreditsText,
  CreditBuyText,
  CreditCardImage,
  CreditCardText,
  CreditsMainContainer,
  CreditsSubContainer,
  DollarCreditText,
  FirsTextMainContainer,
  FirsTextSubContainer,
  FirstBoxContainer,
  ImagMainContainer,
  ImagSubContainer,
  MainImagContainer,
  SecondBoxContainer,
  SecondTextSubContainer,
  TextMainContainer
} from './Credits.styled';
import MainLayoutNav from '../protectedLayout';
import { FormattedMessage } from 'react-intl';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { CustomerCredit, ModelCreditRes } from 'services/customerCredit/customerCredit.service';
import { getUserDataClient } from 'utils/getSessionData';
import Grid from '@mui/material/Grid';
import { useRouter, useSearchParams } from 'next/navigation';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import CreditsAdded from '../CreditsAdded/CreditsAdded';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';

const Credits = () => {
  const [open, setOpen] = useState(false);
  const [creditsListing, setCreditsListing] = useState<ModelCreditRes[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [balance, setBalance] = useState(0);
  const [addedCredits, setAddedCredits] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };
    userToken();
  }, []);

  const getCreditsListing = useCallback(async () => {
    if (token.token) {
      const getModel = await CustomerCredit.getCustomerCredit(token.token);
      setCreditsListing(getModel.data);
    }
  }, [token.token]);

  const getCustomerCredit = useCallback(async () => {
    if (token.token) {
      const getModel = await ModelDetailsService.getModelWithDraw(token.token);
      setBalance(getModel?.data?.credits);
    }
  }, [token.token]);
  const handleCreditClick = async (listCredit: ModelCreditRes) => {
    const res = await CustomerCredit.modelCreditAmount(token.token, listCredit.id);
    setAddedCredits(Number(listCredit.credits));
    if (res) {
      router.push(res?.data?.url);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const credit = searchParams.get('credit');
    getCustomerCredit();
    if (credit) {
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  useEffect(() => {
    getCreditsListing();
    getCustomerCredit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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
                <SecondBoxContainer>
                  <SecondSubContainerImgWorkerCard src="/images/workercards/coin-1.png" />
                  <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                    {balance}
                  </UINewTypography>
                </SecondBoxContainer>
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
              <Grid container sx={{ gap: 2, justifyContent: 'center' }}>
                {creditsListing.map((listCredit, index) => (
                  <ImagSubContainer key={index} onClick={() => handleCreditClick(listCredit)} sx={{ cursor: 'pointer' }}>
                    <MainImagContainer src={listCredit.link} />
                    <BoxFirstTextContainer>
                      <CreditCardImage src="/images/workercards/coin-1.png" />
                      <CreditCardText variant="subtitle" color="text.secondary">
                        {listCredit.credits}
                        <FormattedMessage id="Credits" />
                      </CreditCardText>
                    </BoxFirstTextContainer>
                    <BoxSecondTextContainer>
                      <CreditBuyText variant="bodySmall" color="secondary.700">
                        <FormattedMessage id="BuyNowAt" />
                      </CreditBuyText>
                      <DollarCreditText color="text.secondary">${listCredit.amount}</DollarCreditText>
                    </BoxSecondTextContainer>
                  </ImagSubContainer>
                ))}
              </Grid>
            </FirstBoxContainer>
          </ImagMainContainer>
        </CreditsSubContainer>
      </CreditsMainContainer>
      <UIStyledDialog open={open} maxWidth="md" fullWidth>
        <CreditsAdded addedCredits={addedCredits} newBalance={balance} onClose={handleClose} />
      </UIStyledDialog>
    </MainLayoutNav>
  );
};

export default Credits;
