'use client';

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { SidebarDropDownMainContainer } from './SidebarDropDown.styled';
import { FormattedMessage } from 'react-intl';

const menuList = [
  { menuName: <FormattedMessage id="Profile" /> },
  { menuName: <FormattedMessage id="ProfileDetails" /> },
  { menuName: <FormattedMessage id="Prices" /> }
];

export default function SidebarDropDown({
  open,
  anchorEl,
  handleCloseMenu
}: {
  open: boolean;
  anchorEl: null | HTMLElement;
  handleCloseMenu: () => void;
}) {
  return (
    <Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <SidebarDropDownMainContainer>
          {menuList.map((list, index) => (
            <>
              <MenuItem>{list.menuName}</MenuItem>
              <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
            </>
          ))}
        </SidebarDropDownMainContainer>
      </Menu>
    </Box>
  );
}
