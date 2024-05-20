'use client';
import Link from 'next/link';
import HeaderAuthComponent from './HeaderAuthComponent';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { WorkerNavItemContainer } from './ProfileMenu.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';

const WorkerNavItem = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

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
            {isMdUp && (
              <Box display="flex" alignItems="center" gap={1} sx={{ cursor: 'pointer' }}>
                <Image src="/images/header/searchLine.svg" width={20} height={20} alt="search" loading="lazy" />
                <Typography variant="buttonLargeMenu">Search</Typography>
              </Box>
            )}
          </Box>
          <Box display="flex" gap={2}>
            <HeaderAuthComponent />
          </Box>
        </WorkerNavItemContainer>
      </AppBar>
    </>
  );
};

export default WorkerNavItem;
