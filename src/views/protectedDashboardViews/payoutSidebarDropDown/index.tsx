'use client';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useState } from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FormattedMessage } from 'react-intl';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { Box, SelectChangeEvent } from '@mui/material';
import { SelectDropdown } from './PayoutSidebarDropDown';
import PayoutContainer from '../payoutRequest/PayoutContainer';
import PayoutBankInformation from '../payoutBankInformation';
import PayoutsAndInvoices from '../payoutsAndInvoicesTable';
import PayoutFAQS from '../payoutFAQS';

const profileMenuList = [
  { menuName: <FormattedMessage id="RequestPayout" />, id: 0 },
  { menuName: <FormattedMessage id="PaymentMethods" />, id: 1 },
  { menuName: <FormattedMessage id="PastPayouts" />, id: 2 },
  { menuName: <FormattedMessage id="FAQs" />, id: 3 }
];

const PayoutMobileSidebar = ({
  modelDetails,
  token,
  handleModelApiChange
}: {
  modelDetails: ModelDetailsResponse;
  token: TokenIdType;
  handleModelApiChange: () => void;
}) => {
  const [menuId, setMenuId] = useState(0);
  const handleMenu = (event: SelectChangeEvent<unknown>) => {
    setMenuId(Number(event.target.value));
  };

  return (
    <FormControl id="age" sx={{ width: '100%' }}>
      <Box sx={{ mb: 3 }}>
        <UINewTypography variant="h2" color="text.secondary">
          <FormattedMessage id="Payout" />
        </UINewTypography>
      </Box>
      <SelectDropdown
        value={menuId}
        onChange={handleMenu}
        displayEmpty
        IconComponent={ExpandMore}
        renderValue={(selected) => {
          return profileMenuList.find((menu) => menu.id === selected)?.menuName;
        }}
        MenuProps={{ disableScrollLock: true }}
      >
        {profileMenuList.map((list) => (
          <MenuItem key={list.id} value={list.id}>
            {menuId === list.id ? (
              <UINewTypography variant="buttonLargeMenu" color="primary.400">
                {list.menuName}
              </UINewTypography>
            ) : (
              <UINewTypography variant="buttonLargeMenu">{list.menuName}</UINewTypography>
            )}
          </MenuItem>
        ))}
      </SelectDropdown>
      {menuId === 0 ? (
        <PayoutContainer />
      ) : menuId === 1 ? (
        <PayoutBankInformation />
      ) : menuId === 2 ? (
        <PayoutsAndInvoices />
      ) : (
        <PayoutFAQS />
      )}
    </FormControl>
  );
};

export default PayoutMobileSidebar;
