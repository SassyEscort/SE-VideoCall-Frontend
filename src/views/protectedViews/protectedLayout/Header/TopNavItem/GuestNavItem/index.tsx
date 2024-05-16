import Link from 'next/link';
import { useState } from 'react';
import SideBarGuestMenu from '../SideBarGuestMenu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import HeaderGuestComponent from './HeaderGuestComponent';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';

const GuestNavItem = () => {
  const isSmUp = useMediaQuery(theme.breakpoints.down('sm'));

  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpenSidebar(open);
  };

  return (
    <>
      <AppBar
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
            {isSmUp && (
              <Box display="flex" alignItems="center" gap={1} sx={{ cursor: 'pointer' }}>
                <Image src="/images\headerv2/searchLine.svg" width={20} height={20} alt="search" loading="lazy" />
                <Typography variant="buttonLargeMenu">Search</Typography>
              </Box>
            )}
          </Box>

          <Box display="flex" gap={2}>
            <HeaderGuestComponent toggleDrawer={toggleDrawer} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: { xs: 72, sm: 68 } }}></Box>
      <SideBarGuestMenu open={openSidebar} toggleDrawer={toggleDrawer} />
      {/* {consentData.acccpt && <MoreFilters open={openFilterModal} handleClose={handleCloseFilterModal} />} */}
    </>
  );
};

export default GuestNavItem;
