'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
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

export default function SidebarDropDown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <SidebarDropDownMainContainer>
          {menuList.map((list, index) => (
            <>
              <MenuItem onClick={handleClose}>{list.menuName}</MenuItem>
              <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
            </>
          ))}
        </SidebarDropDownMainContainer>
      </Menu>
    </Box>
  );
}
