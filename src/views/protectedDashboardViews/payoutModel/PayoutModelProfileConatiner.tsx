'use client';
import { MenuItem, useMediaQuery } from '@mui/material';
import { SidebarDropDownMainContainer } from '../sidebarDropDown/SidebarDropDown.styled';
import React, { useEffect, useState } from 'react';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { FormattedMessage } from 'react-intl';
import PayoutBankInformation from '../payoutBankInformation';
import PayoutContainer from '../payoutRequest/PayoutContainer';
import PayoutsAndInvoices from '../payoutsAndInvoicesTable';
import PayoutFAQS from '../payoutFAQS';
import {
  FiveBox,
  ForBox,
  FirstDivider,
  MainContainer,
  MenuListText,
  SecondBox,
  SecondDivider,
  ThirdBox
} from './PayoutModelProfileConatiner.styled';
import PayoutPaymentConatiner from '../payoutPaymentContainer';
import { toast } from 'react-toastify';
import { PayoutService } from 'services/payout/payout.service';
import { ErrorMessage } from 'constants/common.constants';
import { BankDetailsListRes } from 'services/payout/types';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';

const payoutMenuList = [
  { menuName: <FormattedMessage id="RequestPayout" />, id: 0 },
  { menuName: <FormattedMessage id="PaymentMethods" />, id: 1 },
  { menuName: <FormattedMessage id="PastPayouts" />, id: 2 },
  { menuName: <FormattedMessage id="FAQs" />, id: 3 }
];
const PayoutModelProfileConatiner = ({ token, modelDetails }: { token: TokenIdType; modelDetails: ModelDetailsResponse }) => {
  const [bankDetailsList, setBankDetailsList] = useState<BankDetailsListRes>();
  const [menuId, setMenuId] = useState(0);
  const [menuProfileId, setMenuProfileId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleMenu = (id: number) => {
    setMenuId(id);
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
        if (data) {
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
  }, [token.token]);

  useEffect(() => {
    if (bankDetailsList?.data?.bank_details.length) {
      setMenuProfileId(1);
    } else {
      setMenuProfileId(0);
    }
  }, [bankDetailsList]);
  const isMd = useMediaQuery('(min-width:900px) and (max-width:1024px)');

  return (
    <MainContainer sx={isMd ? { paddingLeft: '14px' } : {}}>
      <FirstDivider orientation="vertical" flexItem />
      <SecondBox>
        <ThirdBox>
          <ForBox>
            <FiveBox>
              <UINewTypography variant="h5" lineHeight="125%" color="text.secondary" ml={3} mt={6}>
                <FormattedMessage id="Payout" />
              </UINewTypography>
              <SecondDivider orientation="horizontal" flexItem />
            </FiveBox>
            <SidebarDropDownMainContainer>
              {payoutMenuList?.map((list, index) => (
                <React.Fragment key={index}>
                  <MenuItem onClick={() => handleMenu(list.id)} key={index} sx={{ paddingLeft: '0', py: '12px' }}>
                    {menuId === index ? (
                      <UINewTypography variant="buttonLargeMenu" color="primary.400">
                        {list.menuName}
                      </UINewTypography>
                    ) : (
                      <UINewTypography variant="buttonLargeMenu">{list.menuName}</UINewTypography>
                    )}
                  </MenuItem>
                  {index !== payoutMenuList.length - 1 && <FirstDivider orientation="horizontal" flexItem />}
                </React.Fragment>
              ))}
            </SidebarDropDownMainContainer>
          </ForBox>
          <FirstDivider orientation="vertical" flexItem />
        </ThirdBox>
        <MenuListText>
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
        </MenuListText>
      </SecondBox>
    </MainContainer>
  );
};

export default PayoutModelProfileConatiner;
