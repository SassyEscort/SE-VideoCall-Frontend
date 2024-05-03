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
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import SideBarGuestMenu from './SideBarGuestMenu';
import { useState } from 'react';

const HeaderGuestComponent = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpenSidebar(open);
  };

  return (
    <>
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
            pt: { xs: '18px', sm: '15px' },
            pb: { xs: '18px', sm: '17px' },
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
                <Typography variant="buttonLargeMenu">Search</Typography>
              </Box>
            )}
          </Box>

          <Box display="flex" gap={2}>
            <Box display="flex" alignItems="center" gap={{ xs: 2.5, sm: 4.5 }}>
              {isMdUp && (
                <Link prefetch={false} href="/">
                  <Typography variant="buttonLargeMenu" color="text.secondary">
                    Register as a Model
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
                  <Box display="flex" alignItems="center" gap={1}>
                    <Image src="/images/header/loginCircle.svg" width={20} height={20} alt="login" priority />
                    <Typography variant="buttonLargeMenu" color="text.secondary">
                      Log in
                    </Typography>
                  </Box>
                </Link>
              )}
              {isMdUp && (
                <UIThemeButton variant="contained">
                  <Typography variant="body">Join for FREE</Typography>
                </UIThemeButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <SideBarGuestMenu open={openSidebar} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default HeaderGuestComponent;
