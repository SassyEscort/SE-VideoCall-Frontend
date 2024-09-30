'use client';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import HomeMainModelContainer from './homeModelContainer';
import SideBarModelMenu from './SideBarModelMenu';
import ModelSignup from '../modelSignup';
import ModelSignin from '../modelSignin';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import ModelForgetPasswordLink from '../modelForgetPasswordLink';
// import ModelNewPassword from '../ModelNewPassword';
import LanguageDropdown from 'components/common/LanguageDropdown';
import { FormattedMessage } from 'react-intl';
import { HeaderBoxContainer } from './ModelLayout.styled';
import { gaEventTrigger } from 'utils/analytics';

const HeaderModelComponent = () => {
  // const url = new URL(window.location.href);
  // const email = url.searchParams.get('email');
  // const emailCode = url.searchParams.get('code');
  // const id = url.searchParams.get('id');
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [openSidebar, setOpenSidebar] = useState(false);
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  // const [openChangePassword, setIsOpenChangePassword] = useState(email && emailCode && !id ? true : false);
  const isSmaller = useMediaQuery('(max-width:320px)');

  const handleSignupOpen = () => {
    setIsOpen(true);
    setIsOpenLogin(false);
    gaEventTrigger('Model_Signup_Button_clicked', { source: 'header', category: 'Button' });
  };
  const handleLoginOpen = () => {
    setIsOpen(false);
    setIsOpenLogin(true);
    gaEventTrigger('Model_Login_Button_clicked', { source: 'header', category: 'Button' });
  };

  const handleSignupClose = () => {
    setIsOpen(false);
  };

  const handleLoginClose = () => {
    setIsOpenLogin(false);
  };
  const handleResetPasswordLinkOpen = () => {
    setIsOpenLogin(false);
    setOpenForgetPassLink(true);
  };

  const handleLoginResetPasswordOpen = () => {
    setOpenForgetPassLink(false);
    setIsOpenLogin(true);
  };

  const handleResetPasswordLinkClose = () => {
    setOpenForgetPassLink(false);
  };

  // const handleChangePasswordClose = () => {
  //   setIsOpenChangePassword(false);
  // };
  // const handleLoginChangePasswordOpen = () => {
  //   setIsOpenChangePassword(false);
  //   setIsOpenLogin(true);
  // };
  const toggleDrawer = (open: boolean) => {
    setOpenSidebar(open);
  };

  return (
    <HomeMainModelContainer>
      <AppBar
        component="header"
        position="fixed"
        sx={{
          backgroundColor: 'secondary.dark',
          pr: '0 !important',
          boxShadow: 'none'
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            px: { xs: '15px', lg: '134px' },
            pt: { xs: '18px', sm: '12px' },
            pb: { xs: '18px', sm: '12px' },
            justifyContent: 'space-between'
          }}
        >
          <Box display="flex" gap="65px">
            <Box
              component={Link}
              prefetch={true}
              shallow={true}
              href="/"
              height={{ xs: '26px', md: '36px', sm: '36px' }}
              width={{ xs: '120px', md: '182px', sm: '182px' }}
              display={'flex'}
            >
              <Image
                src="/images/header/headerlogo.png"
                width={182}
                height={36}
                alt="header_logo"
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                priority
              />
            </Box>
            {/* {isMdUp && (
              <Box display="flex" alignItems="center" gap={1} sx={{ cursor: 'pointer' }}>
                <Image src="/images/header/searchLine.svg" width={20} height={20} alt="search" loading="lazy" />
                <Typography variant="buttonLargeMenu">
                  <FormattedMessage id="Search" />
                </Typography>
              </Box>
            )} */}
          </Box>

          <Box display="flex" gap={2}>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                gap: isSmaller
                  ? 1
                  : {
                      xs: 2.5,
                      sm: 4.5
                    }
              }}
            >
              {isMdUp && (
                <Link prefetch={false} href="/">
                  <Typography variant="buttonLargeMenu" color="text.secondary">
                    {/* <FormattedMessage id="LookingForAModel" /> */}
                  </Typography>
                </Link>
              )}
              <Box display="flex">
                <LanguageDropdown />
              </Box>
              {/* {!isMdUp && (
                <IconButton onClick={() => toggleDrawer(true)}>
                  <Image height={24} width={24} priority alt="menufill" src="/images/header/menuFill.svg" />
                </IconButton>
              )} */}
              {!isMdUp && (
                <HeaderBoxContainer onClick={handleLoginOpen}>
                  <Image src="/images/header/loginCircle.svg" width={20} height={20} alt="login" priority />
                  <Typography variant="buttonLargeMenu" color="text.secondary">
                    <FormattedMessage id="LogIn" />
                  </Typography>
                </HeaderBoxContainer>
              )}
              {isMdUp && (
                <HeaderBoxContainer onClick={handleLoginOpen}>
                  <Image src="/images/header/loginCircle.svg" width={20} height={20} alt="login" priority />
                  <Typography variant="buttonLargeMenu" color="text.secondary">
                    <FormattedMessage id="LogIn" />
                  </Typography>
                </HeaderBoxContainer>
              )}
              {/* {isMdUp && (
                <UIThemeShadowButton variant="contained" onClick={handleSignupOpen} sx={{ width: '195px' }}>
                  <Typography variant="body">
                    <FormattedMessage id="JoinForFREE" />
                  </Typography>
                </UIThemeShadowButton>
              )} */}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <SideBarModelMenu open={openSidebar} toggleDrawer={toggleDrawer} />
      <UIStyledDialog scroll="body" open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
        <ModelSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
        <ModelSignin onClose={handleLoginClose} onSignupOpen={handleSignupOpen} onFogotPasswordLinkOpen={handleResetPasswordLinkOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
        <ModelForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </UIStyledDialog>
      {/* <UIStyledDialog scroll="body" open={openChangePassword} onClose={handleChangePasswordClose} maxWidth="md" fullWidth>
        <ModelNewPassword email={String(email)} onClose={handleChangePasswordClose} onLoginOpen={handleLoginChangePasswordOpen} />
      </UIStyledDialog> */}
    </HomeMainModelContainer>
  );
};

export default HeaderModelComponent;
