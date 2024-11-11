import { memo, useCallback, useEffect, useState } from 'react';
import {
  CloseButtonContainer,
  CreditAmountBox,
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
  CurrentAmountTypography,
  CurrentBalanceBox,
  CurrentBalanceTypography,
  FirstTimeChip,
  FirstTimeTypography,
  LimitedOfferBox,
  MainImageBox,
  TitleSerachBox
} from './CreditSideDrawer.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { CustomerCredit, ModelCreditRes } from 'services/customerCredit/customerCredit.service';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
// import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import { useZegoCallFeatureContext } from '../../../contexts/ZegoCallContext';
import { usePathname, useRouter } from 'next/navigation';
import { gaEventTrigger } from 'utils/analytics';
import { CustomerDetails } from 'services/customerDetails/customerDetails.services';
import { FormattedMessage } from 'react-intl';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const CreditSideDrawer = ({
  open,
  handleClose,
  balance,
  customerDetails
}: {
  open: boolean;
  handleClose: () => void;
  balance: number;
  customerDetails: CustomerDetails | undefined;
}) => {
  const [creditsListing, setCreditsListing] = useState<ModelCreditRes[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [isLoading, setIsLoading] = useState(false);

  // const { isFreeCreditAvailable } = useAuthContext();

  // const { user } = useCallFeatureContext();
  const { user } = useZegoCallFeatureContext();
  const customerData = JSON.parse(user || '{}');

  const router = useRouter();
  const pathname = usePathname();
  const isDetailsPage = pathname.startsWith('/details');
  const userName = pathname?.split('/')?.[2] || '';

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
    setIsLoading(true);
    if (token.token) {
      const getModel = await CustomerCredit.getCustomerCredit(token.token);
      setCreditsListing(getModel.data);
    }
    setIsLoading(false);
  }, [token.token]);

  const handleCreditClick = async (listCredit: ModelCreditRes) => {
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
    const res = await CustomerCredit.modelCreditAmount(token.token, listCredit.id, 0, false, isDetailsPage ? 'details' : 'home', userName);
    if (res) {
      router.push(res?.data?.url);
    }
  };

  useEffect(() => {
    if (open && token.token && customerDetails && creditsListing?.length === 0) {
      getCreditsListing();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, open]);

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
              <UINewTypography variant="h3" fontSize={24} color="text.secondary">
                <FormattedMessage id="Addcredits" />
              </UINewTypography>
            </TitleSerachBox>
            <IconButton onClick={handleClose}>
              <CloseButtonContainer />
            </IconButton>
          </CreditsHeader>
          <CreditsContent>
            <CurrentBalanceBox>
              <CurrentBalanceTypography>
                <FormattedMessage id="CurrentBalance" /> :
              </CurrentBalanceTypography>
              <CreditInfoBox>
                <Box component={'img'} src="/images/credits/coinwthIcon.png" alt="coin.png" width={26} height={26} />
                <CurrentAmountTypography>{balance?.toFixed(2)}</CurrentAmountTypography>
              </CreditInfoBox>
            </CurrentBalanceBox>
            <MainImageBox />
            <CreditListMainBox>
              {/* {customerDetails && !Boolean(customerDetails?.free_credits_claimed) && isFreeCreditAvailable === 1 && (
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
                      <UINewTypography variant="SubtitleSmallMedium" color={'primary.200'}>
                        <FormattedMessage id="ClaimFreeCredits" />
                      </UINewTypography>
                    </Box>
                  </CreditInfoBox>
                  <CreditPriceBox>
                    <Box component={'img'} src="/images/home/gitftsecond.png" alt="coin.png" width={24} height={29} />
                    /* <CreditTypography color={'primary.200'}>
                      <FormattedMessage id="FREE" />
                    </CreditTypography> /
                  </CreditPriceBox>
                </CreditListContainer>
              )} */}

              {creditsListing &&
                creditsListing?.map((creditsListing, index) => (
                  <CreditListContainer
                    sx={{
                      background: creditsListing?.tag === 'Most Popular' ? 'linear-gradient(90deg, #FF68C0 0%, #9F1666 100%)' : '',
                      position: 'relative',
                      border: creditsListing?.tag === 'Most Popular' ? 'none' : ''
                    }}
                    onClick={() => handleCreditClick(creditsListing)}
                    key={index}
                  >
                    {(creditsListing?.tag === 'Most Popular' || creditsListing?.tag === 'Best Value') && (
                      <CreditPopularChip>
                        {creditsListing?.tag === 'Most Popular' ? (
                          <Box component={'img'} src="/images/credits/StarPink.svg" alt="StarPink" width={12} height={12} />
                        ) : (
                          <Box component={'img'} src="/images/credits/dollar.svg" alt="dollar" width={8} height={18} />
                        )}
                        <UINewTypography variant="captionLargeSemiBold" color={'primary.400'}>
                          {creditsListing?.tag === 'Most Popular' ? (
                            <FormattedMessage id="MostPopular" />
                          ) : (
                            <FormattedMessage id="BestValue" />
                          )}
                        </UINewTypography>
                      </CreditPopularChip>
                    )}
                    {creditsListing?.tag === 'hot' && (
                      <CreditPopularChip sx={{ maxHeight: '22px', gap: 0 }}>
                        <Box component={'img'} src="/images/credits/hot-icon.svg" alt="StarPink" width={'18px'} height={'15px'} />
                        <UINewTypography variant="captionLargeSemiBold" color={'primary.400'} sx={{ lineHeight: '22px' }}>
                          <FormattedMessage id="Hot" />
                        </UINewTypography>
                      </CreditPopularChip>
                    )}

                    {creditsListing?.tag === 'Limited Offer' && (
                      <FirstTimeChip>
                        <Box sx={{ width: '100%', position: 'relative' }}>
                          <Box
                            component={'img'}
                            src="/images/credits/firstTime.png"
                            alt="coin.png"
                            sx={{ boxShadow: '0px 8px 32px 0px #FFBE6666' }}
                          />
                          <LimitedOfferBox>
                            <UINewTypography variant="ExtraSmallerText" color={'black.main'}>
                              <FormattedMessage id="LimitedOffer" />
                            </UINewTypography>
                          </LimitedOfferBox>
                        </Box>
                      </FirstTimeChip>
                    )}
                    {creditsListing?.tag === 'First Time Only' && (
                      <FirstTimeChip>
                        <Box position={'relative'} sx={{ width: '100%' }}>
                          <Box
                            component={'img'}
                            src="/images/credits/firstTime.png"
                            alt="coin.png"
                            sx={{ boxShadow: '0px 8px 32px 0px #FFBE6666' }}
                          />
                          <FirstTimeTypography variant="bodySmallBold" position={'absolute'}>
                            <FormattedMessage id="firstTimeOnly" />
                          </FirstTimeTypography>
                        </Box>
                      </FirstTimeChip>
                    )}
                    <CreditInfoBox>
                      <Box component={'img'} src="/images/credits/coinwthIcon.png" alt="coin.png" width={18} height={18} />
                      <Box>
                        <UINewTypography variant="SubtitleSmallMedium" color="white.main">
                          {creditsListing?.label ? (
                            <>
                              {creditsListing.label.split('+')[0]}
                              <span
                                style={{
                                  background: 'linear-gradient(89.96deg, #FDD296 36.76%, #FEA832 99.97%)',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                  fontWeight: 700
                                }}
                              >
                                +{creditsListing.label.split('+')[1]}
                                <FormattedMessage id="Credits" />
                              </span>
                            </>
                          ) : (
                            creditsListing?.credits
                          )}{' '}
                        </UINewTypography>
                      </Box>
                    </CreditInfoBox>
                    <CreditPriceBox>
                      <CreditAmountBox>
                        {creditsListing.discount > 0 && (
                          <UINewTypography color={'text.primary'} variant="buttonLargeMenu" sx={{ textDecorationLine: 'line-through' }}>
                            ${creditsListing?.discount}
                          </UINewTypography>
                        )}
                        <CreditTypography color={'white.main'}>${creditsListing?.amount}</CreditTypography>
                      </CreditAmountBox>
                    </CreditPriceBox>
                  </CreditListContainer>
                ))}
            </CreditListMainBox>
          </CreditsContent>
        </>
      )}
    </CreditSideMainDrawer>
  );
};

export default memo(CreditSideDrawer);
