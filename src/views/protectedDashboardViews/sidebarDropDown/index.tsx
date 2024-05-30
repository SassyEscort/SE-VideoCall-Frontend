'use client';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React, { useState } from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { UIDashboardSelect } from 'components/UIComponents/UIDashboardSelect';
import { FormattedMessage } from 'react-intl';
import Divider from '@mui/material/Divider';

const profileMenuList = [
  { menuName: <FormattedMessage id="Profile" />, id: 0 },
  { menuName: <FormattedMessage id="ProfileDetails" />, id: 1 },
  { menuName: <FormattedMessage id="Prices" />, id: 2 }
];

const MobileSidebar = ({
  modelDetails,
  token,
  handleModelApiChange
}: {
  modelDetails: ModelDetailsResponse;
  token: TokenIdType;
  handleModelApiChange: () => void;
}) => {
  const [menuId, setMenuId] = useState(0);
  const handleMenu = (id: number) => {
    setMenuId(id);
  };
  return (
    <FormControl id="age" sx={{ width: '100%', maxWidth: '365px' }}>
      <UIDashboardSelect MenuProps={{ disableScrollLock: true }} name="age" labelId="age" IconComponent={ExpandMore}>
        {profileMenuList.map((list, index) => (
          <>
            <MenuItem onClick={() => handleMenu(list.id)} key={index}>
              {menuId === index ? (
                <UINewTypography variant="buttonLargeMenu" color="primary.400">
                  {list.menuName}
                </UINewTypography>
              ) : (
                <UINewTypography variant="buttonLargeMenu">{list.menuName}</UINewTypography>
              )}
            </MenuItem>
            <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
          </>
        ))}
      </UIDashboardSelect>
    </FormControl>
  );
};

export default MobileSidebar;
