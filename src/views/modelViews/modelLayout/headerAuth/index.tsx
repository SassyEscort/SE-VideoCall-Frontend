'use client';
import Link from 'next/link';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import { WorkerNavItemContainer } from 'views/protectedDashboardViews/dashboardNavItem/DashboardMenu.styled';
import ModelHeaderAuthComponent from './ModelHeaderAuthComponent';
import { FormattedMessage } from 'react-intl';
import UINewTypography from 'components/UIComponents/UINewTypography';

const ModelNavItem = () => {
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
                <UINewTypography variant="buttonLargeMenu">
                  <FormattedMessage id="Search" />
                </UINewTypography>
              </Box>
            )}
          </Box>
          <Box display="flex" gap={2}>
            <ModelHeaderAuthComponent />
          </Box>
        </WorkerNavItemContainer>
      </AppBar>
    </>
  );
};

export default ModelNavItem;
