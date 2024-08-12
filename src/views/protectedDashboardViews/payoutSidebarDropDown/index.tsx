'use client';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useEffect, useState } from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FormattedMessage } from 'react-intl';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { Box, SelectChangeEvent } from '@mui/material';
import { SelectDropdown } from './PayoutSidebarDropDown';
import PayoutContainer from '../payoutRequest/PayoutContainer';
import PayoutBankInformation from '../payoutBankInformation';
import PayoutsAndInvoices from '../payoutsAndInvoicesTable';
import PayoutFAQS from '../payoutFAQS';
import PayoutPaymentConatiner from '../payoutPaymentContainer';
import { PayoutService } from 'services/payout/payout.service';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { BankDetailsListRes } from 'services/payout/types';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';

const profileMenuList = [
  { menuName: <FormattedMessage id="RequestPayout" />, id: 0 },
  { menuName: <FormattedMessage id="PaymentMethods" />, id: 1 },
  { menuName: <FormattedMessage id="PastPayouts" />, id: 2 },
  { menuName: <FormattedMessage id="FAQs" />, id: 3 }
];

const PayoutMobileSidebar = ({ token, modelDetails }: { token: TokenIdType; modelDetails: ModelDetailsResponse }) => {
  const [menuId, setMenuId] = useState(0);
  const [bankDetailsList, setBankDetailsList] = useState<BankDetailsListRes>();
  const [menuProfileId, setMenuProfileId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const handleMenu = (event: SelectChangeEvent<unknown>) => {
    setMenuId(Number(event.target.value));
  };

  const fetchBankDetails = async () => {
    try {
      const BankListObject = {
        limit: 5,
        offset: 0
      };
      if (token.token) {
        setIsLoading(true);
        const data = await PayoutService.bankDetailsList(token.token, BankListObject);
        if (data.code === 200) {
          setBankDetailsList(data);
          setIsLoading(false);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  useEffect(() => {
    fetchBankDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token]);

  useEffect(() => {
    if (bankDetailsList?.data?.bank_details.length) {
      setMenuProfileId(1);
    }
  }, [bankDetailsList]);

  return (
    <FormControl id="payout-small" sx={{ width: '100%' }}>
      <Box sx={{ marginBottom: 4.625 }}>
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
        {profileMenuList?.map((list) => (
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
        <PayoutContainer
          bankDetailsList={bankDetailsList ?? ({} as BankDetailsListRes)}
          token={token}
          fetchBankDetails={fetchBankDetails}
          modelDetails={modelDetails}
          isLoading={isLoading}
        />
      ) : menuId === 1 ? (
        menuProfileId === 0 ? (
          <PayoutBankInformation token={token} fetchBankDetails={fetchBankDetails} />
        ) : (
          <PayoutPaymentConatiner
            bankDetailsList={bankDetailsList ?? ({} as BankDetailsListRes)}
            token={token}
            fetchBankDetails={fetchBankDetails}
            isLoading={isLoading}
          />
        )
      ) : menuId === 2 ? (
        <PayoutsAndInvoices />
      ) : (
        <PayoutFAQS />
      )}
    </FormControl>
  );
};

export default PayoutMobileSidebar;
