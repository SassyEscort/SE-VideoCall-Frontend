import React from 'react';
import SideMenu from './SideMenu';
import MainLayoutNav from './protectedDashboardLayout';
import Box from '@mui/material/Box';
import { MyProfileModelTabs } from 'constants/profileConstants';
import { MenuItem } from '@mui/material';

const DashboardProfile = () => (
  <>
    <SideMenu />
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {MyProfileModelTabs.map((type, index: number) => (
          <MenuItem key={index} value={type.name}>
            {type.name}
          </MenuItem>
        ))}
      </Box>
    </MainLayoutNav>
  </>
);

export default DashboardProfile;
