'use client';
import React, { useState } from 'react';
import SideMenu from './SideMenu';
import MainLayoutNav from './protectedDashboardLayout';
import Box from '@mui/material/Box';
import { MenuItem, useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import DashboardPriceView from './dashboardPriceView';

const DashboardProfile = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [menuItem, setMenuItem] = useState('Profile Details');
  const MyProfileModelTabs = [{ name: 'Profile Details' }, { name: 'Photos' }, { name: 'Prices' }];

  const renderComponent = () => {
    switch (menuItem) {
      case 'Profile Details':
        return <DashboardPriceView />;
      case 'Photos':
        return <DashboardPriceView />;
      case 'Prices':
        return <DashboardPriceView />;
      default:
        return null;
    }
  };

  return (
    <>
      {isMdUp && <SideMenu />}
      <MainLayoutNav variant={'worker'} enlargedFooter={true}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {MyProfileModelTabs.map((type, index) => (
            <MenuItem key={index} value={type.name} onClick={() => setMenuItem(type.name)}>
              {type.name}
            </MenuItem>
          ))}
        </Box>
        <Box>{renderComponent()}</Box>
      </MainLayoutNav>
    </>
  );
};

export default DashboardProfile;
