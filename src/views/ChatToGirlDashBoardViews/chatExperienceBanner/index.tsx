'use client';

import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import React, { useState } from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  VideoChatMainContainer,
  BackGroundContainer,
  VideoChatInnerContainer,
  HeadingTypography,
  SubtitleTypography,
  ButtonBox,
  VideoChatBannerInnerBox
} from './chatExperienceBanner.styled';
import { FormattedMessage } from 'react-intl';
import { useAuthContext } from '../../../../context/AuthContext';
import dynamic from 'next/dynamic';
import { gaEventTrigger } from 'utils/analytics';
const GuestLogin = dynamic(() => import('views/auth/guestLogin'), {
  ssr: false
});
const GuestSignup = dynamic(() => import('views/auth/guestSignup'), {
  ssr: false
});
const GuestForgetPasswordLink = dynamic(() => import('views/auth/guestForgetPasswordLink'), {
  ssr: false
});
const UIStyledDialog = dynamic(() => import('components/UIComponents/UIStyledDialog'), {
  ssr: false
});
const NewSignupStyledModalDialog = dynamic(() => import('components/UIComponents/NewSignupStyledModalDialog'), {
  ssr: false
});
const HomePageFreeSignup = dynamic(() => import('views/auth/homePageFreeSignup'), {
  ssr: false
});

const VideoChatExperienceBanner = ({ token }: { token: string }) => {
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
    gaEventTrigger('CamToCam_Signup_Button_clicked', { source: 'banner', category: 'Button' });
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
      <VideoChatMainContainer>
        <BackGroundContainer>
          <HomeMainContainer>
            <VideoChatInnerContainer>
              <VideoChatBannerInnerBox>
                <HeadingTypography>Start Your FlirtBate Video Sex Chat Experience Now!</HeadingTypography>
                <SubtitleTypography>
                  Thousands of models are ready for live Video Sex Chat sessions—start browsing and select the one that excites you. Whether
                  you’re new to Video Sex Chat or a seasoned expert, FlirtBate is the place for real connections and unforgettable moments.
                </SubtitleTypography>
              </VideoChatBannerInnerBox>
              {token ? (
                <></>
              ) : (
                <ButtonBox>
                  <UIThemeShadowButton
                    variant="contained"
                    sx={{ width: '236px' }}
                    onClick={isFreeCreditAvailable ? handleFreeCreditSignupOpen : handleSignupOpen}
                  >
                    <UINewTypography variant="body" color="common.white">
                      <FormattedMessage id="StartFreeVideoChat" />
                    </UINewTypography>
                  </UIThemeShadowButton>
                </ButtonBox>
              )}
            </VideoChatInnerContainer>
          </HomeMainContainer>
        </BackGroundContainer>
      </VideoChatMainContainer>

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
          handleLoginOpen={handleLoginOpen}
          freeSignupOpen={freeSignupOpen}
          handleFreeCreditSignupClose={handleFreeCreditSignupClose}
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

export default VideoChatExperienceBanner;
