'use client';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { Banner, BannerImg, SubTitleText, TextContainer, TextContainerMain, TitleText } from './footer.styled';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import MainFooter from './MainFooter';
import { FormattedMessage } from 'react-intl';
import { FooterButton } from './MainFooter.styled';
import { useEffect, useState } from 'react';
import StyleButtonShadowV2 from 'components/UIComponents/StyleLoadingButtonshadow';
import { gaEventTrigger } from 'utils/analytics';
import { useAuthContext } from '../../../../../context/AuthContext';
import NewSignupStyledModalDialog from 'components/UIComponents/NewSignupStyledModalDialog';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import GuestForgetPasswordLink from 'views/auth/guestForgetPasswordLink';
import GuestLogin from 'views/auth/guestLogin';
import GuestSignup from 'views/auth/guestSignup';
import Skeleton from '@mui/material/Skeleton';

const Footer = () => {
  const { isFreeCreditAvailable } = useAuthContext();
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const [loading, setLoading] = useState(false);
  const [freeSignupOpen, setFreeSignupOpen] = useState(false);
  const [isPageLoad, setIsPageLoad] = useState(false);

  const { isCustomer, isModel } = useAuthContext();

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
    setFreeSignupOpen(false);
  };

  const handleLoginResetPasswordOpen = () => {
    setOpenForgetPassLink(false);
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

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  };

  const handleFreeCreditSignupOpen = () => {
    gaEventTrigger('Signup_Button_clicked', { source: 'footer', category: 'Button' });
    setFreeSignupOpen(true);
    setIsOpenLogin(false);
  };

  const handleFreeCreditSignupClose = () => {
    setFreeSignupOpen(false);
    setIsOpenLogin(false);
  };

  useEffect(() => {
    setIsPageLoad(true);
  }, []);

  return (
    <>
      {!isPageLoad ? (
        <Skeleton
          variant="rectangular"
          sx={{
            width: { xs: '100%', sm: '453px', md: '453px' },
            height: { xs: '762px', sm: '762px', md: '762px' },
            minWidth: '100%',
            minHeight: '762px'
          }}
        />
      ) : (
        <Banner>
          <TextContainerMain>
            <TextContainer>
              <Box>
                <Box display="flex" flexDirection="column" gap="16px" width="100%" alignItems="center">
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
                    {isCustomer || isModel ? (
                      <Link prefetch={false} href="/">
                        <StyleButtonShadowV2 fullWidth variant="contained" onClick={handleClick} loading={loading}>
                          <FooterButton variant="buttonLargeBold">
                            <FormattedMessage id="ExploreModels" />
                          </FooterButton>
                        </StyleButtonShadowV2>
                      </Link>
                    ) : (
                      <UIThemeShadowButton
                        fullWidth
                        variant="contained"
                        onClick={isFreeCreditAvailable ? handleFreeCreditSignupOpen : handleSignupOpen}
                      >
                        <FooterButton variant="buttonLargeBold">
                          <FormattedMessage id="SignUpNow" />
                        </FooterButton>
                        <Box component="img" src="/images/icons/signup-img.png" sx={{ width: '16px', height: '16px' }} alt="signup" />
                      </UIThemeShadowButton>
                    )}
                  </Box>
                </Box>
              </Box>
              <MainFooter
                isFreeCreditAvailable={isFreeCreditAvailable}
                freeSignupOpen={freeSignupOpen}
                handleFreeCreditSignupOpen={handleFreeCreditSignupOpen}
                handleFreeCreditSignupClose={handleFreeCreditSignupClose}
                handleLoginOpen={handleLoginOpen}
                handleLoginClose={handleLoginClose}
                openLogin={openLogin}
              />
            </TextContainer>
          </TextContainerMain>
          <BannerImg
            sx={{
              backgroundImage: `url('/images/Footer-min.webp')`
            }}
          />
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
              handleLoginOpen={handleLoginOpen}
              freeSignupOpen={freeSignupOpen}
              handleFreeCreditSignupClose={handleFreeCreditSignupClose}
              image="/images/auth/auth-model1.webp"
            />
          </UIStyledDialog>
          <UIStyledDialog scroll="body" open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
            <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
          </UIStyledDialog>
        </Banner>
      )}
    </>
  );
};

export default Footer;
