'use client';
import { MenuItem, Divider } from '@mui/material';
import { SidebarDropDownMainContainer } from '../sidebarDropDown/SidebarDropDown.styled';
import { useState } from 'react';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { TokenIdType } from 'views/protectedModelViews/verification';
import Box from '@mui/system/Box';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { FormattedMessage } from 'react-intl';
import PayoutBankInformation from '../payoutBankInformation';
import PayoutContainer from '../payoutRequest/PayoutContainer';
import PayoutsAndInvoices from '../payoutsAndInvoicesTable';
import PayoutFAQS from '../payoutFAQS';

const payoutMenuList = [
  { menuName: <FormattedMessage id="RequestPayout" />, id: 0 },
  { menuName: <FormattedMessage id="PaymentMethods" />, id: 1 },
  { menuName: <FormattedMessage id="PastPayouts" />, id: 2 },
  { menuName: <FormattedMessage id="FAQs" />, id: 3 }
];
const PayoutModelProfileConatiner = ({
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
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Divider orientation="vertical" flexItem sx={{ borderColor: 'primary.700' }} />
      <Box display="flex" width="100%">
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '55px' }}>
              <UINewTypography variant="h5" color="text.secondary" ml="24px" mt={3.93}>
                <FormattedMessage id="MyProfile" />
              </UINewTypography>
              <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700', width: '100%' }} />
            </Box>
            <SidebarDropDownMainContainer>
              {payoutMenuList.map((list, index) => (
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
            </SidebarDropDownMainContainer>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ borderColor: 'primary.700' }} />
        </Box>
        <Box sx={{ display: 'flex', width: '100%' }}>
          {menuId === 0 ? (
            <PayoutContainer />
          ) : menuId === 1 ? (
            <PayoutBankInformation />
          ) : menuId === 2 ? (
            <PayoutsAndInvoices />
          ) : (
            <PayoutFAQS />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PayoutModelProfileConatiner;
