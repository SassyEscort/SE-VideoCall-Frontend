'use client';
import Link from 'next/link';
import { useState } from 'react';
import HeaderAuthComponent from './HeaderAuthComponent';
import SideBarMenu from '../SideBarMenu';
// import MoreFilters from '@/components/SearchPage/MoreFilters';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const WorkerNavItem = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  // const [openFilterModal, setOpenFilterModal] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpenSidebar(open);
  };

  // const handleOpenFilterModal = () => {
  //   setOpenFilterModal(true);
  // };

  // const handleCloseFilterModal = () => {
  //   setOpenFilterModal(false);
  // };

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
          <Box display="flex" gap={6}>
            <Box
              component={Link}
              prefetch={false}
              shallow={true}
              href="/"
              height={{ xs: '36px', md: '40px' }}
              width={{ xs: '110px', md: '129px' }}
            >
              <Image
                src="/images/header/headerlogo.png"
                alt="sassy_logo"
                width={146}
                height={56}
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                loading="lazy"
              />
            </Box>
            <Box display="flex" alignItems="center" gap={1} sx={{ cursor: 'pointer' }}>
              <Image src="/images/header/searchLine.svg" width={20} height={20} alt="search" loading="lazy" />
              <Typography variant="buttonLargeMenu">Search</Typography>
            </Box>
          </Box>
          <Box display="flex" gap={2}>
            <HeaderAuthComponent toggleDrawer={toggleDrawer} />
          </Box>
        </Toolbar>
      </AppBar>
      <SideBarMenu open={openSidebar} toggleDrawer={toggleDrawer} />
      <Box sx={{ height: { xs: 72, sm: 68 } }}></Box>
      {/* <MoreFilters open={openFilterModal} handleClose={handleCloseFilterModal} /> */}
    </>
  );
};

export default WorkerNavItem;
