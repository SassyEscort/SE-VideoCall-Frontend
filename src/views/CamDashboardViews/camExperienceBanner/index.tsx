'use client';

import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import { useState } from 'react';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  Cam2CamMainContainer,
  Cam2CamInnerContainer,
  HeadingTypography,
  SubtitleTypography,
  ButtonBox,
  CamExperienceBannerInnerBox
} from './camExperienceBanner.styled';
import { FormattedMessage } from 'react-intl';
import dynamic from 'next/dynamic';
import { gaEventTrigger } from 'utils/analytics';
import { useAuthContext } from 'contexts/AuthContext';
const GuestLogin = dynamic(() => import('views/auth/guestLogin'), { ssr: false });
const GuestSignup = dynamic(() => import('views/auth/guestSignup'), { ssr: false });
const GuestForgetPasswordLink = dynamic(() => import('views/auth/guestForgetPasswordLink'), { ssr: false });
const UIStyledDialog = dynamic(() => import('components/UIComponents/UIStyledDialog'), { ssr: false });
const NewSignupStyledModalDialog = dynamic(() => import('components/UIComponents/NewSignupStyledModalDialog'), { ssr: false });
const HomePageFreeSignup = dynamic(() => import('views/auth/homePageFreeSignup'), { ssr: false });

const CamExperienceBanner = ({ isCustomer }: { isCustomer: boolean }) => {
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
      <Cam2CamMainContainer>
        <HomeMainContainer>
          <Cam2CamInnerContainer>
            <CamExperienceBannerInnerBox>
              <HeadingTypography>
                <FormattedMessage id="StartYourFlirtBateCam2CamExperienceNow" />
              </HeadingTypography>
              <SubtitleTypography>
                <FormattedMessage id="ThousandsOfModelsAreReady" />
              </SubtitleTypography>
            </CamExperienceBannerInnerBox>
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
          </Cam2CamInnerContainer>
        </HomeMainContainer>
      </Cam2CamMainContainer>

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

export default CamExperienceBanner;
