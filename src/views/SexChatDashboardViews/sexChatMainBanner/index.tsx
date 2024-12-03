'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import { FormattedMessage } from 'react-intl';
import { FooterButton } from 'views/guestViews/guestLayout/footer/MainFooter.styled';
import {
  SexChatBanner,
  SexChatTextContainerMain,
  SexChatTextContainer,
  SexChatSubTitleText,
  SexChatTitleText,
  SexChatBannerImg,
  SexChatBannerInnerBox,
  SexChatBannerInnerBoxContainer,
  SexChatBannerUIThemeShadowButton
} from './sexChatDashboard.styled';
import dynamic from 'next/dynamic';
import { gaEventTrigger } from 'utils/analytics';
import { useAuthContext } from 'contexts/AuthContext';
const GuestLogin = dynamic(() => import('views/auth/guestLogin'));
const GuestSignup = dynamic(() => import('views/auth/guestSignup'));
const GuestForgetPasswordLink = dynamic(() => import('views/auth/guestForgetPasswordLink'));
const UIStyledDialog = dynamic(() => import('components/UIComponents/UIStyledDialog'));
const NewSignupStyledModalDialog = dynamic(() => import('components/UIComponents/NewSignupStyledModalDialog'));
const HomePageFreeSignup = dynamic(() => import('views/auth/homePageFreeSignup'));

const SexChatDashboardBanner = () => {
  const { isFreeCreditAvailable } = useAuthContext();

  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const [freeSignupOpen, setFreeSignupOpen] = useState(false);

  const handleSignupClose = () => {
    setIsOpen(false);
  };

  const handleLoginOpen = () => {
    setIsOpen(false);
    setFreeSignupOpen(false);
    setIsOpenLogin(true);
  };

  const handleLoginClose = () => {
    setIsOpenLogin(false);
  };

  const handleSignupOpen = () => {
    setIsOpen(true);
    setIsOpenLogin(false);
  };

  const handleResetPasswordLinkOpen = () => {
    setIsOpenLogin(false);
    setOpenForgetPassLink(true);
  };

  const handleFreeCreditSignupOpen = () => {
    setFreeSignupOpen(true);
    setIsOpenLogin(false);
    gaEventTrigger('CamToCam_Signup_Button_clicked', { source: 'bottom_banner', category: 'Button' });
  };

  const handleFreeCreditSignupClose = () => {
    setFreeSignupOpen(false);
  };

  const handleResetPasswordLinkClose = () => {
    setOpenForgetPassLink(false);
  };

  const handleLoginResetPasswordOpen = () => {
    setOpenForgetPassLink(false);
    setIsOpenLogin(true);
  };

  return (
    <>
      <SexChatBanner>
        <SexChatTextContainerMain>
          <SexChatTextContainer>
            <SexChatBannerInnerBoxContainer sx={{ gap: 6 }} component="div">
              <SexChatBannerInnerBoxContainer sx={{ gap: 2 }} component="div">
                <SexChatSubTitleText variant="h4">
                  <FormattedMessage id="WELCOMETOFLIRTBATE" />
                </SexChatSubTitleText>
                <SexChatTitleText variant="h1">
                  <FormattedMessage id="FreeSexVideoChatCalls" />
                </SexChatTitleText>
                <SexChatSubTitleText>
                  <FormattedMessage id="JoinThousandsOfUsers" />
                </SexChatSubTitleText>
              </SexChatBannerInnerBoxContainer>
              <SexChatBannerInnerBox>
                <Box
                  sx={{ width: '100%', maxWidth: '236px' }}
                  onClick={isFreeCreditAvailable ? handleFreeCreditSignupOpen : handleSignupOpen}
                >
                  <SexChatBannerUIThemeShadowButton fullWidth variant="contained">
                    <FooterButton variant="buttonLargeBold" color="common.white">
                      <FormattedMessage id="StartFreeVideoChat" />
                    </FooterButton>
                  </SexChatBannerUIThemeShadowButton>
                </Box>
              </SexChatBannerInnerBox>
            </SexChatBannerInnerBoxContainer>
          </SexChatTextContainer>
        </SexChatTextContainerMain>
        <SexChatBannerImg />
      </SexChatBanner>

      {/* Singin Login Popup */}
      <NewSignupStyledModalDialog scroll="body" open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
        <GuestSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </NewSignupStyledModalDialog>
      <UIStyledDialog scroll="body" open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
        <GuestLogin
          onClose={handleLoginClose}
          onSignupOpen={handleSignupOpen}
          onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
          isFreeCreditAvailable={isFreeCreditAvailable}
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

      <NewSignupStyledModalDialog scroll="body" open={freeSignupOpen} onClose={handleFreeCreditSignupClose} maxWidth="md" fullWidth>
        <HomePageFreeSignup onClose={handleFreeCreditSignupClose} onLoginOpen={handleLoginOpen} />
      </NewSignupStyledModalDialog>
    </>
  );
};

export default SexChatDashboardBanner;
