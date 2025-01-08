import { memo, useCallback, useEffect, useState } from 'react';
import {
  ChristmasLeafImg,
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
  CreditsListingBox,
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
// import { useZegoCallFeatureContext } from '../../../contexts/ZegoCallContext';
import { usePathname, useRouter } from 'next/navigation';
import { gaEventTrigger } from 'utils/analytics';
import { FormattedMessage } from 'react-intl';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useCallFeatureContext } from 'contexts/CallFeatureContext';
import { useAuthContext } from 'contexts/AuthContext';

const CreditSideDrawer = ({ open, handleClose, balance }: { open: boolean; handleClose: () => void; balance?: number }) => {
  const { token } = useAuthContext();
  const [creditsListing, setCreditsListing] = useState<ModelCreditRes[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const { user } = useZegoCallFeatureContext();
  const { user } = useCallFeatureContext();
  const customerData = JSON.parse(user || '{}');

  const router = useRouter();
  const pathname = usePathname();
  const isDetailsPage = pathname.startsWith('/models');
  const userName = pathname?.split('/')?.[2] || '';

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

    let dataForGACredit = {
      amount: listCredit.amount,
      credits: listCredit.credits,
      'extra-credits-pack-click': 'no',
      'discount-pack-click': 'no'
    };
    if (listCredit.discount) dataForGACredit['extra-credits-pack-click'] = 'yes';
    if (listCredit.tag) dataForGACredit['extra-credits-pack-click'] = 'yes';

    gaEventTrigger('pack-credits-click', {
      action: 'pack-credits-click',
      category: 'Button',
      label: 'pack-credits-click',
      source: 'Credit Page',
      value: JSON.stringify({ dataForGACredit })
    });
    // gaEventTrigger('wallet-icon-click', {
    //   action: 'wallet-icon-click',
    //   category: 'Button',
    //   label: 'wallet-icon-click',
    //   value: JSON.stringify({ 'is-automated': 'no', 'credits-balance-available': listCredit.is_active })
    // });
    gaEventTrigger('Credits_Purchase_Initiated', {
      action: 'Credits_Purchase_Initiated',
      category: 'Button',
      label: 'Credits_Purchase_Initiated',
      value: JSON.stringify(customerInfo)
    });
    const res = await CustomerCredit.modelCreditAmount(token.token, listCredit.id, 0, false, isDetailsPage ? 'details' : 'home', userName);
    if (res) {
      gaEventTrigger('stripe-initiated', {
        action: 'stripe-initiated',
        category: 'Link',
        label: 'Stripe initiated'
      });
      router.push(res?.data?.url);
    }
  };

  useEffect(() => {
    if (open && token.token && customerData && creditsListing?.length === 0) {
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
                12
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
              {creditsListing &&
                creditsListing?.map((creditsListing, index) => (
                  <CreditListContainer
                    sx={{
                      background:
                        creditsListing?.tag === 'Most Popular'
                          ? 'linear-gradient(90deg, #FF68C0 0%, #9F1666 100%)'
                          : creditsListing?.tag === 'Christmas Offer'
                            ? 'linear-gradient(45deg, #FF0844, #FFB199)'
                            : '',
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
                    {creditsListing?.tag === 'Christmas Offer' && (
                      <>
                        <CreditPopularChip sx={{ maxHeight: '22px', gap: 0.75, backgroundColor: '#518E3F' }}>
                          <Box component={'img'} src="/images/icons/white-star-icon.svg" alt="StarPink" width={12} height={12} />

                          <UINewTypography variant="captionLargeSemiBold" color={'white.main'} sx={{ lineHeight: '22px' }}>
                            <FormattedMessage id="ChristmasOffer" />
                          </UINewTypography>
                        </CreditPopularChip>
                        <ChristmasLeafImg src="/images/christmas/leaf_angle.png" alt="StarPink" />
                      </>
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
                              {creditsListing?.label?.split('+')[0]}
                              <CreditsListingBox>
                                +{creditsListing?.label?.split('+')[1]}
                                <FormattedMessage id="Credits" />
                              </CreditsListingBox>
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
