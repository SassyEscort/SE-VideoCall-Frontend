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
