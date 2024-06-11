'use client';
import Link from 'next/link';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { WorkerNavItemContainer } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/ProfileMenu.styled';
import DashboadrHeaderAuthComponent from './HeaderAuthComponent';

const DashboardNavItem = () => {
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
        <WorkerNavItemContainer disableGutters>
          <Box display="flex" gap={6}>
            <Box
              component={Link}
              prefetch={false}
              shallow={true}
              href="/"
              height={{ xs: '36px', md: '40px' }}
              width={{ xs: '110px', md: '129px' }}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
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
          </Box>
          <Box display="flex" gap={2}>
            <DashboadrHeaderAuthComponent />
          </Box>
        </WorkerNavItemContainer>
      </AppBar>
    </>
  );
};

export default DashboardNavItem;
