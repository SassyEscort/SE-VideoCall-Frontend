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
