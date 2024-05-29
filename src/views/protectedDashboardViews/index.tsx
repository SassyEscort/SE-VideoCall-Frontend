'use client';
import React, { useEffect, useState } from 'react';
import SideMenu from './SideMenu';
import MainLayoutNav from './protectedDashboardLayout';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { getUserDataClient } from 'utils/getSessionData';
export type TokenIdType = {
  token: string;
};
const DashboardProfile = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [token, setToken] = useState<TokenIdType>({ token: '' });

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ token: data.token });
    };
    userToken();
  }, []);

  return (
    <>
      {isMdUp && <SideMenu />}
      <MainLayoutNav variant={'worker'} enlargedFooter={true}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}></Box>
      </MainLayoutNav>
    </>
  );
};

export default DashboardProfile;
