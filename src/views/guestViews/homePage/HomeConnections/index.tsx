'use client';
import { useAuthContext } from '../../../../contexts/AuthContext';
import { gaEventTrigger } from 'utils/analytics';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Image from 'next/image';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { memo, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import {
  DullCircles,
  DullCircles2,
  DullCircles3,
  DullCircles4,
  DullCircles5,
  VectorLinesMobile,
  VectorLines,
  HomeMainBox,
  TextMainTitleTyporaphy,
  TextTitleTyporaphy,
  MainChildContainer,
  BoxMain,
  BoxImageBackground,
  BoxImageBackgroundChild,
  FirstTextTyporaphy,
  SeconBoxContainer,
  ImgBoxContainer,
  ThirdBoxContainer
} from './HomeConnections.styled';

const GuestLogin = dynamic(() => import('views/auth/guestLogin'), { ssr: false });
const GuestSignup = dynamic(() => import('views/auth/guestSignup'), { ssr: false });
const GuestForgetPasswordLink = dynamic(() => import('views/auth/guestForgetPasswordLink'), { ssr: false });
const UIStyledDialog = dynamic(() => import('components/UIComponents/UIStyledDialog'), { ssr: false });
const NewSignupStyledModalDialog = dynamic(() => import('components/UIComponents/NewSignupStyledModalDialog'), { ssr: false });
const GuestNewPassword = dynamic(() => import('views/auth/guestNewPassword'), { ssr: false });
const HomePageFreeSignup = dynamic(() => import('views/auth/homePageFreeSignup'), { ssr: false });

const HomeConnections = ({ isFreeCreditAvailable }: { isFreeCreditAvailable: number }) => {
  const { push } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const email = searchParams?.get('email') || '';
  const id = searchParams?.get('id') || '';
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const [openChangePassword, setIsOpenChangePassword] = useState(email && !id && pathName !== '/profile' ? true : false);
  const [freeSignupOpen, setFreeSignupOpen] = useState(false);

  const { isCustomer } = useAuthContext();

  const handleSignupOpen = () => {
    setIsOpen(true);
    setIsOpenLogin(false);
  };

  const handleSignupClose = () => {
    setIsOpen(false);
  };

  const handleLoginOpen = () => {
    setIsOpen(false);
    setFreeSignupOpen(false);
    setIsOpenLogin(true);
  };

  const handleLoginResetPasswordOpen = () => {
    setOpenForgetPassLink(false);
    setIsOpenLogin(true);
  };

  const handleLoginChangePasswordOpen = () => {
    setIsOpenChangePassword(false);
    setIsOpenLogin(true);
  };

  const handleLoginClose = () => {
    setIsOpenLogin(false);
  };

  const handleResetPasswordLinkOpen = () => {
    setIsOpenLogin(false);
    setOpenForgetPassLink(true);
  };

  const handleResetPasswordLinkClose = () => {
    setOpenForgetPassLink(false);
  };

  const handleChangePasswordClose = () => {
    push('/');
    setIsOpenChangePassword(false);
  };

  const handleFreeCreditSignupOpen = () => {
    gaEventTrigger('Signup_Button_clicked', { source: 'home_connection', category: 'Button' });
    setFreeSignupOpen(true);
    setIsOpenLogin(false);
  };

  const handleFreeCreditSignupClose = () => {
    setFreeSignupOpen(false);
  };

  return (
    <HomeMainContainer>
      {!isCustomer ? (
        <Box
          sx={{
            position: 'relative',
            mt: isSmDown ? '96px' : '112px'
          }}
        >
          <DullCircles />
          <DullCircles2 />
          <DullCircles3 />
          <DullCircles4 />
          <DullCircles5 />
          {isSmDown ? <VectorLinesMobile /> : <VectorLines />}
          <HomeMainBox>
            <TextMainTitleTyporaphy>
              <FormattedMessage id="SeamlessConnections" />
            </TextMainTitleTyporaphy>
            <TextTitleTyporaphy>
              <FormattedMessage id="DiscoverHowEasy" />
            </TextTitleTyporaphy>
          </HomeMainBox>

          <MainChildContainer
            sx={{
              mt: isSmDown ? 7 : 15.5,
              flexDirection: isSmDown ? 'column' : 'row',
              gap: isSmDown ? 5 : 2
            }}
          >
            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <Image
                    loading="lazy"
                    alt="home_search_img"
                    width={24}
                    height={24}
                    src="/images/home-search-img.png"
                    style={{ width: isSmDown ? 20 : 24, height: isSmDown ? 20 : 24 }}
                  />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <FirstTextTyporaphy variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'}>
                <FormattedMessage id="SignUpLogIn" />
              </FirstTextTyporaphy>
              <SeconBoxContainer sx={{ mt: isSmDown ? 1.75 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  <FormattedMessage id="CreateYourFreeAccount" />
                </UINewTypography>
              </SeconBoxContainer>
            </BoxMain>

            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <Image
                    loading="lazy"
                    alt="choose_your_model"
                    width={24}
                    height={24}
                    src="/images/home-choose-your-model-img.png"
                    style={{ width: isSmDown ? 20 : 24, height: isSmDown ? 20 : 24 }}
                  />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <FirstTextTyporaphy variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'}>
                <FormattedMessage id="ChooseYourModel" />
              </FirstTextTyporaphy>
              <SeconBoxContainer sx={{ mt: isSmDown ? 1.75 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  <FormattedMessage id="WhetherYouAreSeekingPassionate" />
                </UINewTypography>
              </SeconBoxContainer>
            </BoxMain>
            <ImgBoxContainer
              loading="lazy"
              src="/images/line.png"
              sx={{
                display: isSmDown || isMdDown ? 'none' : 'block'
              }}
              alt="line_image"
            />
            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <Image
                    loading="lazy"
                    alt="home_connect_instantly"
                    width={24}
                    height={24}
                    src="/images/home-connect-instantly-img.png"
                    style={{ width: isSmDown ? 20 : 24, height: isSmDown ? 20 : 24 }}
                  />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <FirstTextTyporaphy variant={isSmDown ? 'body' : 'h6'} color={'#E9E8EB'}>
                <FormattedMessage id="ConnectInstantly" />
              </FirstTextTyporaphy>

              <Box sx={{ width: '100%', maxWidth: '314px', mt: isSmDown ? 1.75 : 2 }}>
                <UINewTypography
                  variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                  sx={{
                    width: '100%'
                  }}
                >
                  <FormattedMessage id="StartAnEngagingConvo" />
                </UINewTypography>
              </Box>
            </BoxMain>
          </MainChildContainer>

          <ThirdBoxContainer sx={{ mt: isSmDown ? 6 : 12 }}>
            <UIThemeShadowButton
              variant="contained"
              sx={{ width: '100%', maxWidth: '195px' }}
              onClick={isFreeCreditAvailable ? handleFreeCreditSignupOpen : handleSignupOpen}
            >
              <UINewTypography variant="buttonLargeBold" sx={{ lineHeight: '150%' }}>
                <FormattedMessage id="SignUpNow" />
              </UINewTypography>
              <Box component="img" src="/images/icons/signup-img.png" sx={{ width: '16px', height: '16px' }} alt="signup" />
            </UIThemeShadowButton>
          </ThirdBoxContainer>
        </Box>
      ) : (
        ' '
      )}

      <NewSignupStyledModalDialog scroll="body" open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
        <GuestSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </NewSignupStyledModalDialog>
      <UIStyledDialog scroll="body" open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
        <GuestLogin
          isFreeCreditAvailable={isFreeCreditAvailable}
          onClose={handleLoginClose}
          onSignupOpen={handleSignupOpen}
          onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
          handleFreeCreditSignupOpen={handleFreeCreditSignupOpen}
          // handleLoginOpen={handleLoginOpen}
          // freeSignupOpen={freeSignupOpen}
          // handleFreeCreditSignupClose={handleFreeCreditSignupClose}
          image="/images/auth/auth-model1.webp"
        />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
        <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openChangePassword} onClose={handleChangePasswordClose} maxWidth="md" fullWidth>
        <GuestNewPassword email={String(email)} onClose={handleChangePasswordClose} onLoginOpen={handleLoginChangePasswordOpen} />
      </UIStyledDialog>
      <NewSignupStyledModalDialog scroll="body" open={freeSignupOpen} onClose={handleFreeCreditSignupClose} maxWidth="md" fullWidth>
        <HomePageFreeSignup onClose={handleFreeCreditSignupClose} onLoginOpen={handleLoginOpen} />
      </NewSignupStyledModalDialog>
    </HomeMainContainer>
  );
};

export default memo(HomeConnections);
