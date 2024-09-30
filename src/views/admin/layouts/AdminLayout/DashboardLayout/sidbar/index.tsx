'use client';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { usePathname } from 'next/navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import {
  CommonMenuBox,
  MobileComponentBox,
  MobileComponentSecBoxContainer,
  MobileTextStyleContainer,
  SelectedTab
} from 'views/protectedDashboardViews/dashboardNavbar/nav.styled';
import Navbar from './Navbar';
import { AdminConstantsTabs } from 'constants/adminConstants';
import { StyledNavItemIcon } from './nav.styled';

AdminSidbar.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func
};

export default function AdminSidbar() {
  const router = usePathname();

  const maindashboardTabIndex: { [key: string]: number } = {
    dashboard: 1,
    model: 2
  };

  const modifiedPath = router.split('/profile').join('').split('/').join('');

  const tabIndex = maindashboardTabIndex[modifiedPath] || 2;

  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box component="nav" sx={{ flexShrink: { lg: 0 } }}>
      <Drawer
        variant={isMdUp ? 'permanent' : 'temporary'}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            border: 'none',
            width: 299,
            position: 'static'
          }
        }}
        sx={{ height: '100%', width: 299 }}
      >
        <Navbar tabIndex={tabIndex} />
      </Drawer>
      {isMdDown && (
        <MobileComponentBox>
          <Tabs
            value={value}
            variant="scrollable"
            onChange={handleChange}
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            {AdminConstantsTabs?.map((tab, index) => {
              return index === tabIndex - 1 ? (
                <CommonMenuBox key={index} sx={{ color: 'text.primary' }}>
                  <Link prefetch={false} href={tab.path} style={{ textDecoration: 'none' }}>
                    <SelectedTab>
                      {tab.icon && <StyledNavItemIcon>{tab.icon}</StyledNavItemIcon>}
                      <Box sx={{ color: 'primary.400' }}>
                        <MobileTextStyleContainer label={tab.name} />
                      </Box>
                    </SelectedTab>
                  </Link>
                </CommonMenuBox>
              ) : (
                <CommonMenuBox key={index} sx={{ color: 'text.primary' }}>
                  <Link prefetch={false} href={tab.path} style={{ textDecoration: 'none' }}>
                    <MobileComponentSecBoxContainer>
                      {tab.icon && <StyledNavItemIcon>{tab.icon}</StyledNavItemIcon>}
                      <MobileTextStyleContainer label={tab.name} />
                    </MobileComponentSecBoxContainer>
                  </Link>
                </CommonMenuBox>
              );
            })}
            <CommonMenuBox sx={{ cursor: 'pointer', color: 'text.primary' }}>
              <Box component="img" src="/images/profile-vector/Vector-6.png" alt="vector_icon" />
            </CommonMenuBox>
          </Tabs>
          <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
        </MobileComponentBox>
      )}
    </Box>
  );
}
