import { memo, useCallback, useEffect, useState } from 'react';

import {
  CreditInfoBox,
  CreditListContainer,
  CreditListMainBox,
  CreditLoaderBox,
  CreditPopularChip,
  CreditPriceBox,
  CreditSideMainDrawer,
  CreditTypography,
  CreditsContent,
  CreditsHeader,
  CurrentBalanceBox,
  CurrentBalanceTypography,
  MainImageBox,
  TitleSerachBox
} from './CreditSideDrawer.styled';
import { Box, CircularProgress, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { CustomerCredit, ModelCreditRes } from 'services/customerCredit/customerCredit.service';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import { useRouter } from 'next/navigation';
import { gaEventTrigger } from 'utils/analytics';
import { CustomerDetails, CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import { FormattedMessage } from 'react-intl';

const CreditSideDrawer = ({ open, handleClose }: { open: boolean; handleClose: () => void }) => {
  const [creditsListing, setCreditsListing] = useState<ModelCreditRes[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>();

  const { user } = useCallFeatureContext();
  const customerData = JSON.parse(user || '{}');

  const router = useRouter();

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
      setIsLoading(true);
      const getModel = await CustomerCredit.getCustomerCredit(token.token);
      setCreditsListing(getModel.data);
      setIsLoading(false);
    }
  }, [token.token]);

  const getCustomerCredit = useCallback(async () => {
    if (token.token) {
      const getModel = await ModelDetailsService.getModelWithDraw(token.token);
      setBalance(getModel?.data?.credits);
    }
  }, [token.token]);

  const handleCreditClick = async (listCredit: ModelCreditRes) => {
    setIsLoading(true);
    const customerInfo = {
      email: customerData?.customer_email,
      name: customerData?.customer_name,
      username: customerData?.customer_user_name,
      model_username: '',
      plan_details: listCredit,
      source: 'Credit Page'
    };

    gaEventTrigger('Credits_Purchase_Initiated', {
      action: 'Credits_Purchase_Initiated',
      category: 'Button',
      label: 'Credits_Purchase_Initiated',
      value: JSON.stringify(customerInfo)
    });
    const res = await CustomerCredit.modelCreditAmount(token.token, listCredit.id, 0, false);
    if (res) {
      router.push(res?.data?.url);
    }
    setIsLoading(false);
  };

  const FetchCustomerDetails = async () => {
    setIsLoading(true);

    try {
      const customerData = await CustomerDetailsService.customerModelDetails(token.token);
      setCustomerDetails(customerData?.data);
    } catch (error) {}
    setIsLoading(false);
  };

  useEffect(() => {
    getCreditsListing();
    getCustomerCredit();
    FetchCustomerDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <CreditSideMainDrawer anchor="right" open={open} onClose={handleClose}>
      {isLoading ? (
        <CreditLoaderBox>
          <CircularProgress />
        </CreditLoaderBox>
      ) : (
        <>
          <CreditsHeader>
            <TitleSerachBox>
              <UINewTypography variant="h3" fontSize={30} color="text.secondary">
                <FormattedMessage id="Addcredits" />
              </UINewTypography>
            </TitleSerachBox>
            <IconButton onClick={handleClose}>
              <Close sx={{ color: 'text.secondary', height: 40, width: 40 }} />
            </IconButton>
          </CreditsHeader>
          <CreditsContent>
            <CurrentBalanceBox>
              <CurrentBalanceTypography>
                <FormattedMessage id="CurrentBalance" /> :
              </CurrentBalanceTypography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component={'img'} src="/images/credits/coinwthIcon.png" alt="coin.png" width={26} height={26} />
                <CurrentBalanceTypography>{balance?.toFixed(2)}</CurrentBalanceTypography>
              </Box>
            </CurrentBalanceBox>
            <MainImageBox />
            <CreditListMainBox>
              {/* FREE CRDITS  */}
              {customerDetails?.free_credits_claimed === 0 && (
                <CreditListContainer
                  sx={{
                    background: 'linear-gradient(90deg, #FECD3D 11.5%, #FFF1C6 52%, #FF69C1 90%)',
                    border: 'none'
                  }}
                  onClick={() => router.push('/profile')}
                >
                  <CreditInfoBox>
                    <Box component={'img'} src="/images/credits/coinwthIcon.png" alt="coin.png" width={18} height={18} />
                    <Box>
                      <UINewTypography variant="buttonLargeMenu" color={'primary.200'}>
                        20+10 <FormattedMessage id="Credits" />
                      </UINewTypography>
                    </Box>
                  </CreditInfoBox>
                  <CreditPriceBox>
                    <Box component={'img'} src="/images/home/gitftsecond.png" alt="coin.png" width={24} height={29} />
                    <CreditTypography color={'primary.200'}>
                      <FormattedMessage id="FREE" />
                    </CreditTypography>
                  </CreditPriceBox>
                </CreditListContainer>
              )}

              {/* NORMAL CRDITS  1*/}
              <CreditListContainer onClick={() => handleCreditClick(creditsListing[0])}>
                <CreditInfoBox>
                  <Box component={'img'} src="/images/credits/coinwthIcon.png" alt="coin.png" width={18} height={18} />
                  <Box>
                    <UINewTypography variant="buttonLargeMenu" color={'white.main'}>
                      {creditsListing[0]?.credits} <FormattedMessage id="Credits" />
                    </UINewTypography>
                  </Box>
                </CreditInfoBox>
                <CreditPriceBox>
                  <CreditTypography color={'white.main'}>${creditsListing[0]?.amount}</CreditTypography>
                </CreditPriceBox>
              </CreditListContainer>

              {/* NORMAL CRDITS  2*/}
              <CreditListContainer onClick={() => handleCreditClick(creditsListing[1])}>
                <CreditInfoBox>
                  <Box component={'img'} src="/images/credits/coinwthIcon.png" alt="coin.png" width={18} height={18} />
                  <Box>
                    <UINewTypography variant="buttonLargeMenu" color={'white.main'}>
                      {creditsListing[1]?.credits} <FormattedMessage id="Credits" />
                    </UINewTypography>
                  </Box>
                </CreditInfoBox>
                <CreditPriceBox>
                  <CreditTypography color={'white.main'}>${creditsListing[1]?.amount}</CreditTypography>
                </CreditPriceBox>
              </CreditListContainer>

              {/* MOST POPULAR CRDITS  1*/}
              <CreditListContainer
                sx={{
                  background: 'linear-gradient(90deg, #FF68C0 0%, #9F1666 100%)',
                  position: 'relative',
                  border: 'none'
                }}
                onClick={() => handleCreditClick(creditsListing[2])}
              >
                <CreditPopularChip>
                  <Box component={'img'} src="/images/credits/StarPink.svg" alt="coin.png" width={16} height={16} />
                  <UINewTypography variant="bodySmallBold" color={'primary.400'}>
                    <FormattedMessage id="MostPopular" />
                  </UINewTypography>
                </CreditPopularChip>
                <CreditInfoBox>
                  <Box component={'img'} src="/images/credits/coinwthIcon.png" alt="coin.png" width={18} height={18} />
                  <Box>
                    <UINewTypography variant="buttonLargeMenu" color={'white.main'}>
                      {creditsListing[2]?.credits} <FormattedMessage id="Credits" />
                    </UINewTypography>
                  </Box>
                </CreditInfoBox>
                <CreditPriceBox>
                  <CreditTypography color={'white.main'}>${creditsListing[2]?.amount}</CreditTypography>
                </CreditPriceBox>
              </CreditListContainer>

              {/* NORMAL CRDITS  4*/}

              {/* Best Value */}
              <CreditListContainer
                sx={{
                  background: 'linear-gradient(90deg, #B88A4A 0%, #E0AA3E 31.5%, #E0AA3E 61.5%, #F9F295 100%)',
                  position: 'relative',
                  border: 'none'
                }}
                onClick={() => handleCreditClick(creditsListing[3])}
              >
                <CreditPopularChip>
                  <Box component={'img'} src="/images/credits/dollar.svg" alt="coin.png" width={9} height={18} />
                  <UINewTypography variant="bodySmallBold" color={'primary.400'}>
                    <FormattedMessage id="BestValue" />
                  </UINewTypography>
                </CreditPopularChip>
                <CreditInfoBox>
                  <Box component={'img'} src="/images/credits/coinwthIcon.png" alt="coin.png" width={18} height={18} />
                  <Box>
                    <UINewTypography variant="buttonLargeMenu" color={'secondary.800'}>
                      {creditsListing[3]?.credits} <FormattedMessage id="Credits" />
                    </UINewTypography>
                  </Box>
                </CreditInfoBox>
                <CreditPriceBox>
                  <CreditTypography color={'secondary.800'}>$ {creditsListing[3]?.amount}</CreditTypography>
                </CreditPriceBox>
              </CreditListContainer>

              {/* NORMAL CRDITS  5*/}
              <CreditListContainer onClick={() => handleCreditClick(creditsListing[4])}>
                <CreditInfoBox>
                  <Box component={'img'} src="/images/credits/coinwthIcon.png" alt="coin.png" width={18} height={18} />
                  <Box>
                    <UINewTypography variant="buttonLargeMenu" color={'white.main'}>
                      {creditsListing[4]?.credits} <FormattedMessage id="Credits" />
                    </UINewTypography>
                  </Box>
                </CreditInfoBox>
                <CreditPriceBox>
                  <CreditTypography color={'white.main'}>${creditsListing[4]?.amount}</CreditTypography>
                </CreditPriceBox>
              </CreditListContainer>

              {/* NORMAL CRDITS  6*/}
              <CreditListContainer onClick={() => handleCreditClick(creditsListing[5])}>
                <CreditInfoBox>
                  <Box component={'img'} src="/images/credits/coinwthIcon.png" alt="coin.png" width={18} height={18} />
                  <Box>
                    <UINewTypography variant="buttonLargeMenu" color={'white.main'}>
                      {creditsListing[5]?.credits} <FormattedMessage id="Credits" />
                    </UINewTypography>
                  </Box>
                </CreditInfoBox>
                <CreditPriceBox>
                  <CreditTypography color={'white.main'}>${creditsListing[5]?.amount}</CreditTypography>
                </CreditPriceBox>
              </CreditListContainer>

              {/* LIST END */}
            </CreditListMainBox>
          </CreditsContent>
        </>
      )}
    </CreditSideMainDrawer>
  );
};

export default memo(CreditSideDrawer);
