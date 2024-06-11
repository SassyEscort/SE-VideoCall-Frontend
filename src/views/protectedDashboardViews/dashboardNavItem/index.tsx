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
              prefetch={true}
              shallow={true}
              href="/"
              height={{ xs: '27px', md: '36px' }}
              width={{ xs: '136px', md: '182px' }}
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
