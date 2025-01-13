'use client';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import AppBar from '@mui/material/AppBar';
import { memo, useCallback, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { gaEventTrigger } from 'utils/analytics';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { CommonServices } from 'services/commonApi/commonApi.services';

import { MultipleOptionString } from 'views/protectedModelViews/verification/stepOne/VerificationStepOne';
import dynamic from 'next/dynamic';
import { getCookie } from 'cookies-next';
import UIStyledDialogg from 'components/UIComponents/UIStyledDialog/UIStyleDialogsss';
import { useAuthContext } from 'contexts/AuthContext';
import FreeCreditsSignUp from 'views/guestViews/homePage/freeCreditsSignUp';
import MoreFilters from 'views/guestViews/searchPage/moreFilters';
import ABLogin1User from '../../abLogin1User';
import ABLogin2User from '../../abLogin2User';
import ABRegister2User from '../../abRegister2User';
import UIStyleABTest2User from '../../abRegister2User/UIStyleABTest2User';
import ABTestSignUpUser from '../../commonComponent';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AppBarBox, GuestABLoginButton } from '../GuestLayout.styled';

const UIStyledDialog = dynamic(() => import('components/UIComponents/UIStyledDialog'));
const GuestLogin = dynamic(() => import('views/auth/guestLogin'));
const GuestSignup = dynamic(() => import('views/auth/guestSignup'));
const GuestForgetPasswordLink = dynamic(() => import('views/auth/guestForgetPasswordLink'));
const HomePageFreeSignup = dynamic(() => import('views/auth/homePageFreeSignup'));
const NewSignupStyledModalDialog = dynamic(() => import('components/UIComponents/NewSignupStyledModalDialog'));

const HeaderGuestComponent = () => {
  const { isFreeCreditAvailable, handleGAEventsTrigger } = useAuthContext();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [, setAnchorElLogout] = useState<null | HTMLElement>(null);
  const [freeSignupOpen, setFreeSignupOpen] = useState(false);
  const [openFreeCredit, setOpenFreeCredit] = useState(false);
  const [languages, setLanguages] = useState<MultipleOptionString[]>([]);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const [abTestScenerio, setABTestScenerio] = useState({
    experiment: {
      id: 1,
      name: 'UI Testing'
    },
    variation: {
      id: 1,
      name: 'A'
    }
  });

  useEffect(() => {
    let group: any = getCookie('ab-group');
    if (typeof group === 'string') group = JSON.parse(group);
    if (abTestScenerio.experiment?.name !== group?.experiment?.name || abTestScenerio.variation?.name !== group?.variation?.name) {
      setABTestScenerio(group);
    }
  }, [getCookie('ab-group')]);

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

  const handleFreeCreditSignupOpen = () => {
    setFreeSignupOpen(true);
    setOpenFreeCredit(false);
    setAnchorElLogout(null);
    setIsOpenLogin(false);
    gaEventTrigger('Signup_Button_clicked', { source: 'header', category: 'Button' });
  };

  const handleFreeCreditSignupClose = () => {
    setFreeSignupOpen(false);
    setOpenFreeCredit(false);
  };

  const handleLoginResetPasswordOpen = () => {
    setOpenForgetPassLink(false);
    setIsOpenLogin(true);
  };

  const handleLoginClose = () => {
    setIsOpenLogin(false);
    setOpenFreeCredit(false);
  };

  const handleResetPasswordLinkOpen = () => {
    setIsOpenLogin(false);
    setOpenForgetPassLink(true);
  };

  const handleResetPasswordLinkClose = () => {
    setOpenForgetPassLink(false);
  };

  const handleCloseFilterModal = () => {
    handleGAEventsTrigger('search-bar-click', '', false);
    setOpenFilterModal(false);
  };

  const handleFreeCreditClose = () => {
    setOpenFreeCredit(false);
  };

  const handleLanguageApiChange = useCallback(() => {
    const languagesData = async () => {
      const data = await CommonServices.getLanguages();
      setLanguages(data.data);
    };
    languagesData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsUserInteracted(true);
      handleLanguageApiChange();
      window.removeEventListener('scroll', handleScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenFreeCredit(true);
    }, 5000);

    if (openFreeCredit) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppBar
        component="header"
        position="fixed"
        sx={{
          background: 'linear-gradient(180deg, #07030E 0%, #07030E 100%)',
          pr: '0 !important',
          boxShadow: 'none',
          top: 0
        }}
      >
        <AppBarBox>
          <Box
            component={Link}
            prefetch={true}
            shallow={true}
            href="/"
            height="100%"
            width={{ xs: '120px', md: '182px', sm: '182px' }}
            display={'flex'}
            onClick={() => handleGAEventsTrigger('flirtbate-icon-click', 'top-bar')}
          >
            <Image
              src="/images/header/new-logo.png"
              width={182}
              height={36}
              alt="sassy_logo"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
              priority
            />
          </Box>
          {isMdUp && (
            <>
              <GuestABLoginButton
                variant="outlined"
                sx={{ color: 'text.secondary' }}
                endIcon={<ChevronRightIcon width={20} height={20} />}
                onClick={() => {
                  gaEventTrigger('Login_Button_clicked', { source: 'header', category: 'Button' });
                  handleLoginOpen();
                }}
              >
                <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                  <FormattedMessage id="SignIn" />
                </UINewTypography>
              </GuestABLoginButton>
            </>
          )}
        </AppBarBox>
      </AppBar>

      {abTestScenerio.experiment?.name === 'UI Testing' && abTestScenerio.variation?.name === 'B' ? (
        <>
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
              image="/images/auth/auth-model1.webp"
            />
          </UIStyledDialog>

          <NewSignupStyledModalDialog scroll="body" open={freeSignupOpen} onClose={handleFreeCreditSignupClose} maxWidth="md" fullWidth>
            <HomePageFreeSignup onClose={handleFreeCreditSignupClose} onLoginOpen={handleLoginOpen} />
          </NewSignupStyledModalDialog>
        </>
      ) : (
        <>
          <UIStyledDialogg scroll="body" open={openLogin} onClose={handleLoginClose} fullWidth>
            <ABLogin1User
              onClose={handleLoginClose}
              onSignupOpen={handleSignupOpen}
              onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
            />
          </UIStyledDialogg>

          <UIStyledDialogg scroll="body" open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
            <ABTestSignUpUser onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
          </UIStyledDialogg>

          <UIStyleABTest2User scroll="body" open={freeSignupOpen} onClose={handleFreeCreditSignupClose} maxWidth="md" fullWidth>
            <ABRegister2User onClose={handleFreeCreditSignupClose} onLoginOpen={handleLoginOpen} />
          </UIStyleABTest2User>

          <UIStyleABTest2User scroll="body" open={openLogin} onClose={handleLoginClose} fullWidth>
            <ABLogin2User
              onClose={handleLoginClose}
              onSignupOpen={handleSignupOpen}
              onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
            />
          </UIStyleABTest2User>
        </>
      )}

      <UIStyledDialog scroll="body" open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
        <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </UIStyledDialog>

      <MoreFilters open={openFilterModal} handleClose={handleCloseFilterModal} languages={languages} />

      {isSmUp && isUserInteracted && (
        <FreeCreditsSignUp
          open={openFreeCredit && Boolean(isFreeCreditAvailable)}
          onClose={handleFreeCreditClose}
          onSignupOpen={handleFreeCreditSignupOpen}
        />
      )}
    </>
  );
};

export default memo(HeaderGuestComponent);
