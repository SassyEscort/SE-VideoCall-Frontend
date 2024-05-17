'use client';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LanguageDropdown from 'components/common/LanguageDropdown';
import SideBarGuestMenu from './SideBarGuestMenu';
import { useState } from 'react';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import HomeMainContainer from './homeContainer';
import { FormattedMessage } from 'react-intl';
import GuestSignup from 'views/auth/guestSignup';
import GuestForgetPasswordLink from 'views/auth/guestForgetPasswordLink';
import GuestNewPassword from 'views/auth/guestNewPassword';
import GuestLogin from 'views/auth/guestLogin';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';

const HeaderGuestComponent = () => {
  const url = new URL(window.location.href);
  const email = url.searchParams.get('email');

  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [openSidebar, setOpenSidebar] = useState(false);
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const [openChangePassword, setIsOpenChangePassword] = useState(email ? true : false);

  const toggleDrawer = (open: boolean) => {
    setOpenSidebar(open);
  };

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

  return (
    <HomeMainContainer>
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
              height={{ xs: '36px', md: '40px' }}
              width={{ xs: '110px', md: '129px' }}
            >
              <Image
                src="/images/header/headerlogo.png"
                width={146}
                height={56}
                alt="sassy_logo"
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                priority
              />
            </Box>
            {isMdUp && (
              <Box display="flex" alignItems="center" gap={1} sx={{ cursor: 'pointer' }}>
                <Image src="/images/header/searchLine.svg" width={20} height={20} alt="search" loading="lazy" />
                <Typography variant="buttonLargeMenu">
                  <FormattedMessage id="Search" />
                </Typography>
              </Box>
            )}
          </Box>

          <Box display="flex" gap={2}>
            <Box display="flex" alignItems="center" gap={{ xs: 2.5, sm: 4.5 }}>
              {isMdUp && (
                <Link prefetch={false} href="/model">
                  <Typography variant="buttonLargeMenu" color="text.secondary">
                    <FormattedMessage id="RegisterAsModel" />
                  </Typography>
                </Link>
              )}
              {!isMdUp && (
                <Box display="flex" alignItems="center" gap={1} component={Link} prefetch={false} href="/search">
                  <Image src="/images/header/searchLine.svg" width={20} height={20} alt="search" priority />
                </Box>
              )}
              <Box display="flex">
                <LanguageDropdown />
              </Box>
              {!isMdUp && (
                <IconButton onClick={() => toggleDrawer(true)}>
                  <Image height={24} width={24} priority alt="menufill" src="/images/header/menuFill.svg" />
                </IconButton>
              )}
              {isMdUp && (
                <Link prefetch={false} href="/">
                  <Box display="flex" alignItems="center" gap={1} onClick={handleLoginOpen}>
                    <Image src="/images/header/loginCircle.svg" width={20} height={20} alt="login" priority />
                    <Typography variant="buttonLargeMenu" color="text.secondary">
                      <FormattedMessage id="LogIn" />
                    </Typography>
                  </Box>
                </Link>
              )}
              {isMdUp && (
                <UIThemeShadowButton variant="contained" onClick={handleSignupOpen}>
                  <Typography variant="body">
                    <FormattedMessage id="JoinForFREE" />
                  </Typography>
                </UIThemeShadowButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <SideBarGuestMenu open={openSidebar} toggleDrawer={toggleDrawer} />
      <UIStyledDialog scroll="body" open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
        <GuestSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
        <GuestLogin onClose={handleLoginClose} onSignupOpen={handleSignupOpen} onFogotPasswordLinkOpen={handleResetPasswordLinkOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
        <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openChangePassword} onClose={handleChangePasswordClose} maxWidth="md" fullWidth>
        <GuestNewPassword email={String(email)} onClose={handleChangePasswordClose} onLoginOpen={handleLoginChangePasswordOpen} />
      </UIStyledDialog>
    </HomeMainContainer>
  );
};

export default HeaderGuestComponent;
