'use client';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useCallback, useEffect, useState } from 'react';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import HomeMainContainer from './homeContainer';
import { FormattedMessage } from 'react-intl';
import GuestSignup from 'views/auth/guestSignup';
import GuestForgetPasswordLink from 'views/auth/guestForgetPasswordLink';
import GuestNewPassword from 'views/auth/guestNewPassword';
import GuestLogin from 'views/auth/guestLogin';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import UINewTypography from 'components/UIComponents/UINewTypography';
import LanguageDropdown from 'components/common/LanguageDropdown';
import ProfileMenu from 'components/UIComponents/UIStyleHeader';
import MoreFilters from '../searchPage/moreFilters';
import { CommonServices } from 'services/commonApi/commonApi.services';
import { MultipleOptionString } from 'views/protectedModelViews/verification/stepOne/VerificationStepOne';
import { MenuContainer, SearchBarBox } from './GuestLayout.styled';
import MenuItem from '@mui/material/MenuItem';
import { Divider, ListItemIcon, ListItemText } from '@mui/material';

const HeaderGuestComponent = () => {
  const url = new URL(window.location.href);
  const email = url.searchParams.get('email');
  const isSmaller = useMediaQuery('(max-width:320px)');
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const [openChangePassword, setIsOpenChangePassword] = useState(email && url.pathname !== '/profile' ? true : false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [languages, setLanguages] = useState<MultipleOptionString[]>([]);
  const [anchorElLogout, setAnchorElLogout] = useState<null | HTMLElement>(null);

  const handleClickLogout = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLogout(event.currentTarget);
  };

  const handleCloseLogout = () => {
    setAnchorElLogout(null);
  };

  const handleDropDownOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenDropDown(true);
  };

  const handleDropDownClose = () => {
    setOpenDropDown(false);
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

  const handleOpenFilterModal = () => {
    setOpenFilterModal(true);
  };

  const handleCloseFilterModal = () => {
    setOpenFilterModal(false);
  };

  const handleLanguageApiChange = useCallback(() => {
    const languagesData = async () => {
      const data = await CommonServices.getLanguagesWithoutToken();
      setLanguages(data.data);
    };
    languagesData();
  }, []);

  useEffect(() => {
    handleLanguageApiChange();
  }, [handleLanguageApiChange]);

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
              height={{ xs: '26px', md: '36px', sm: '36px' }}
              width={{ xs: '120px', md: '182px', sm: '182px' }}
              display={'flex'}
            >
              <Image
                src="/images/header/headerlogo.png"
                width={182}
                height={36}
                alt="sassy_logo"
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                priority
              />
            </Box>
            {isMdUp && (
              <SearchBarBox onClick={handleOpenFilterModal}>
                <Image src="/images/header/searchLine.svg" width={20} height={20} alt="search" loading="lazy" />
                <UINewTypography variant="buttonLargeMenu">
                  <FormattedMessage id="Search" />
                </UINewTypography>
              </SearchBarBox>
            )}
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
                <Link prefetch={false} href="/model">
                  <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                    <FormattedMessage id="RegisterAsModel" />
                  </UINewTypography>
                </Link>
              )}
              {!isMdUp && (
                <Box display="flex" alignItems="center" gap={1} component={Link} prefetch={false} href="/search">
                  <Image src="/images/header/searchLine.svg" width={20} height={20} alt="search" priority />
                </Box>
              )}
              <Box display="flex" sx={{ cursor: 'pointer' }}>
                <LanguageDropdown />
              </Box>
              {!isMdUp && (
                <>
                  <IconButton onClick={handleClickLogout}>
                    <Image height={24} width={24} priority alt="menufill" src="/images/header/menuFill.svg" />
                  </IconButton>

                  <MenuContainer
                    id="basic-menu"
                    anchorEl={anchorElLogout}
                    open={Boolean(anchorElLogout)}
                    onClose={handleCloseLogout}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button'
                    }}
                    sx={{
                      backdropFilter: isSmDown ? 'blur(12px)' : ''
                    }}
                  >
                    <MenuItem onClick={handleLoginOpen}>
                      <ListItemIcon>
                        <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                          <Box component="img" src="/images/header/loginCircle.svg" sx={{ width: '20px', height: '20px' }} />
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText>
                        <UINewTypography variant="bodyLight" color="text.secondary">
                          <FormattedMessage id="LogIn" />
                        </UINewTypography>
                      </ListItemText>
                    </MenuItem>
                    <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                    <MenuItem>
                      <ListItemIcon>
                        <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                          <Box component="img" src="/images/header/register-model-img.png" sx={{ width: '24px', height: '24px' }} />
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText>
                        <Link href="/model">
                          <UINewTypography variant="bodyLight" color="text.secondary">
                            <FormattedMessage id="RegisterAsModel" />
                          </UINewTypography>
                        </Link>
                      </ListItemText>
                    </MenuItem>
                    <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                    <MenuItem>
                      <ListItemText>
                        <UIThemeShadowButton variant="contained" onClick={handleSignupOpen} sx={{ width: '195px' }}>
                          <UINewTypography variant="body" lineHeight={'150%'}>
                            <FormattedMessage id="SignUpNow" />
                          </UINewTypography>
                          <Box component="img" src="/images/icons/signup-img.png" sx={{ width: '16px', height: '16px' }} />
                        </UIThemeShadowButton>
                      </ListItemText>
                    </MenuItem>
                  </MenuContainer>
                </>
              )}
              {isMdUp && (
                <Link prefetch={false} href="/">
                  <Box display="flex" alignItems="center" gap={1} onClick={handleLoginOpen}>
                    <Image src="/images/header/loginCircle.svg" width={20} height={20} alt="login" priority />
                    <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                      <FormattedMessage id="LogIn" />
                    </UINewTypography>
                  </Box>
                </Link>
              )}
              {isMdUp && (
                <UIThemeShadowButton variant="contained" onClick={handleDropDownOpen} sx={{ width: '195px' }}>
                  <UINewTypography variant="body" lineHeight={'150%'}>
                    <FormattedMessage id="SignUpNow" />
                  </UINewTypography>
                  <Box component="img" src="/images/icons/signup-img.png" sx={{ width: '16px', height: '16px' }} />
                </UIThemeShadowButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <UIStyledDialog scroll="body" open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
        <GuestSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
        <GuestLogin
          onClose={handleLoginClose}
          onSignupOpen={handleSignupOpen}
          onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
          image="/images/auth/auth-model1.webp"
        />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
        <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openChangePassword} onClose={handleChangePasswordClose} maxWidth="md" fullWidth>
        <GuestNewPassword email={String(email)} onClose={handleChangePasswordClose} onLoginOpen={handleLoginChangePasswordOpen} />
      </UIStyledDialog>
      <ProfileMenu open={openDropDown} handleClose={handleDropDownClose} anchorEl={anchorEl} onSignupOpen={handleSignupOpen} />
      <MoreFilters open={openFilterModal} handleClose={handleCloseFilterModal} languages={languages} />
    </HomeMainContainer>
  );
};

export default HeaderGuestComponent;
