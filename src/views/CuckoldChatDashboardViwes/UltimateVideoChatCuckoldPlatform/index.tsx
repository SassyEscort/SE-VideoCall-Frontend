'use client';

import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import React, { useState } from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import dynamic from 'next/dynamic';
import { gaEventTrigger } from 'utils/analytics';
import { useAuthContext } from 'contexts/AuthContext';
import {
  ButtonBox,
  HeadingTypography,
  HeadingTypographySecond,
  MeetRealPeopleBannerInnerBox,
  MeetRealPeopleInnerContainer,
  SubtitleTypography,
  UltimateVideoChatMainContainer
} from './UltimateVideoChatCuckoldPlatform.styled';
const GuestLogin = dynamic(() => import('views/auth/guestLogin'));
const GuestSignup = dynamic(() => import('views/auth/guestSignup'));
const GuestForgetPasswordLink = dynamic(() => import('views/auth/guestForgetPasswordLink'));
const UIStyledDialog = dynamic(() => import('components/UIComponents/UIStyledDialog'));
const NewSignupStyledModalDialog = dynamic(() => import('components/UIComponents/NewSignupStyledModalDialog'));
const HomePageFreeSignup = dynamic(() => import('views/auth/homePageFreeSignup'));

const UltimateVideoChatCuckoldPlatform = ({ isCustomer }: { isCustomer: boolean }) => {
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
      <UltimateVideoChatMainContainer>
        <HomeMainContainer>
          <MeetRealPeopleInnerContainer>
            <MeetRealPeopleBannerInnerBox>
              <HeadingTypography variant="h2">
                <FormattedMessage id="GetStartedWithCuckold" />
              </HeadingTypography>
              <SubtitleTypography variant="h6">
                <FormattedMessage id="ReadyToExploreYourCuckold" />
              </SubtitleTypography>
              <HeadingTypographySecond variant="h2">
                <FormattedMessage id="FlirtBateYourPersonalGateway" />
              </HeadingTypographySecond>
              <SubtitleTypography variant="h6">
                <FormattedMessage id="ExploreInteractAndEnjoy" />
              </SubtitleTypography>
            </MeetRealPeopleBannerInnerBox>
            {isCustomer ? (
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
          </MeetRealPeopleInnerContainer>
        </HomeMainContainer>
      </UltimateVideoChatMainContainer>

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

export default UltimateVideoChatCuckoldPlatform;
