'use client';
import React, { useEffect, useState } from 'react';
import SideMenu from './SideMenu';
import MainLayoutNav from './protectedDashboardLayout';
import Box from '@mui/material/Box';
import { MenuItem, useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import DashboardPriceView from './dashboardPriceView';
import { getUserDataClient } from 'utils/getSessionData';
export type TokenIdType = {
  token: string;
};
const DashboardProfile = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [menuItem, setMenuItem] = useState('Profile Details');
  const [token, setToken] = useState<TokenIdType>({ token: '' });

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ token: data.token });
    };
    userToken();
  }, []);
  const MyProfileModelTabs = [{ name: 'Profile Details' }, { name: 'Photos' }, { name: 'Prices' }];

  const renderComponent = () => {
    switch (menuItem) {
      case 'Prices':
        return <DashboardPriceView token={token.token} />;
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
