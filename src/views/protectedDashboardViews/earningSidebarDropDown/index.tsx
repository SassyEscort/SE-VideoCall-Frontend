'use client';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useState } from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FormattedMessage } from 'react-intl';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { Box, SelectChangeEvent } from '@mui/material';
import { SelectDropdown } from './EarningSidebarDropDown';
import EarningHistory from '../earningHistory';
import EarningOverview from '../earningOverview';

const EarningHistoryMenuList = [
  { menuName: <FormattedMessage id="Overview" />, id: 0 },
  { menuName: <FormattedMessage id="History" />, id: 1 }
];

const EarningMobileSidebar = ({ token }: { token: TokenIdType }) => {
  const [menuId, setMenuId] = useState(0);

  const handleMenu = (event: SelectChangeEvent<unknown>) => {
    setMenuId(Number(event.target.value));
  };

  return (
    <FormControl id="earnings-small" sx={{ width: '100%' }}>
      <Box sx={{ mb: 3 }}>
        <UINewTypography variant="h2" color="text.secondary">
          <FormattedMessage id="Earnings" />
        </UINewTypography>
      </Box>
      <SelectDropdown
        value={menuId}
        onChange={handleMenu}
        displayEmpty
        IconComponent={ExpandMore}
        renderValue={(selected) => {
          return EarningHistoryMenuList?.find((menu) => menu?.id === selected)?.menuName;
        }}
        MenuProps={{ disableScrollLock: true }}
      >
        {EarningHistoryMenuList?.map((list) => (
          <MenuItem key={list?.id} value={list?.id}>
            {menuId === list?.id ? (
              <UINewTypography variant="buttonLargeMenu" color="primary.400">
                {list?.menuName}
              </UINewTypography>
            ) : (
              <UINewTypography variant="buttonLargeMenu">{list?.menuName}</UINewTypography>
            )}
          </MenuItem>
        ))}
      </SelectDropdown>
      {menuId === 0 ? <EarningOverview /> : <EarningHistory token={token} />}
    </FormControl>
  );
};

export default EarningMobileSidebar;
