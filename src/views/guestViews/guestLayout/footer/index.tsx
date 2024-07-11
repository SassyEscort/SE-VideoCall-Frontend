'use client';

import Box from '@mui/material/Box';
import Link from 'next/link';
import { Banner, BannerImg, SubTitleText, TextContainer, TextContainerMain, TitleText } from './footer.styled';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import MainFooter from './MainFooter';
import { FormattedMessage } from 'react-intl';
import { FooterButton } from './MainFooter.styled';
import { getUserDataClient } from 'utils/getSessionData';
import { useEffect, useState } from 'react';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import GuestSignup from 'views/auth/guestSignup';
import GuestLogin from 'views/auth/guestLogin';
import GuestForgetPasswordLink from 'views/auth/guestForgetPasswordLink';
import GuestNewPassword from 'views/auth/guestNewPassword';

const Footer = () => {
  const url = new URL(window.location.href);
  const email = url.searchParams.get('email');
  const [isLogin, setIsLogin] = useState(false);
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const [openChangePassword, setIsOpenChangePassword] = useState(email && url.pathname !== '/profile' ? true : false);

  const handleSignupOpen = () => {
    setIsOpen(true);
    setIsOpenLogin(false);
  };

  const handleSignupClose = () => {
    setIsOpen(false);
  };

  const handleLoginOpen = () => {
    setIsOpen(false);
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
    setIsOpenChangePassword(false);
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setIsLogin(true);
      }
    };
    userToken();
  }, []);
  return (
    <Banner>
      <TextContainerMain>
        <TextContainer>
          <Box>
            <Box display="flex" flexDirection="column" gap={'16px'} width={'100%'} alignItems={'center'}>
              <TitleText>
                <FormattedMessage id="ReadyToExplore" />
              </TitleText>
              <SubTitleText>
                <FormattedMessage id="HaveTheBestExperience" />
              </SubTitleText>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                mt: { xs: '32px', sm: '40px' }
              }}
            >
              <Box sx={{ width: '100%', maxWidth: '195px' }}>
                {!isLogin ? (
                  <UIThemeShadowButton fullWidth variant="contained" onClick={handleSignupOpen}>
                    <FooterButton variant="buttonLargeBold">
                      <FormattedMessage id="SignUpNow" />
                    </FooterButton>
                    <Box component="img" src="/images/icons/signup-img.png" sx={{ width: '16px', height: '16px' }} />
                  </UIThemeShadowButton>
                ) : (
                  <Link prefetch={false} href="/">
                    <UIThemeShadowButton fullWidth variant="contained">
                      <FooterButton variant="buttonLargeBold">
                        <FormattedMessage id="ExploreModels" />
                      </FooterButton>
                    </UIThemeShadowButton>
                  </Link>
                )}
              </Box>
            </Box>
          </Box>
          <MainFooter />
        </TextContainer>
      </TextContainerMain>
      <BannerImg
        sx={{
          backgroundImage: `url(${'/images/Footer-min.webp'})`
        }}
      />
      <UIStyledDialog scroll="body" open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
        <GuestSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
        <GuestLogin
          onClose={handleLoginClose}
          onSignupOpen={handleSignupOpen}
          onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
          image="/images/auth/auth-model1.png"
        />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
        <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openChangePassword} onClose={handleChangePasswordClose} maxWidth="md" fullWidth>
        <GuestNewPassword email={String(email)} onClose={handleChangePasswordClose} onLoginOpen={handleLoginChangePasswordOpen} />
      </UIStyledDialog>
    </Banner>
  );
};

export default Footer;
