'use client';
import { MenuItem } from '@mui/material';
import { SidebarDropDownMainContainer } from '../sidebarDropDown/SidebarDropDown.styled';
import { useEffect, useState } from 'react';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { FormattedMessage } from 'react-intl';
import PayoutBankInformation from '../payoutBankInformation';
import PayoutContainer from '../payoutRequest/PayoutContainer';
import PayoutsAndInvoices from '../payoutsAndInvoicesTable';
import PayoutFAQS from '../payoutFAQS';
import {
  FiveBox,
  ForBox,
  FristDivider,
  MainConatiner,
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
  const [bankDetailsList, setBankDetailsList] = useState<BankDetailsListRes>();
  const [menuId, setMenuId] = useState(0);
  const [menuProfileId, setMenuProfileId] = useState(0);

  const handleMenu = (id: number) => {
    setMenuId(id);
  };

  useEffect(() => {
    const fetchBankDetails = async () => {
      try {
        const BankListObject = {
          limit: 5,
          offset: 0
        };
        const data = await PayoutService.bankDetailsList(token.token, BankListObject);
        if (data) {
          setBankDetailsList(data);
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };

    fetchBankDetails();
  }, [token.token]);

  useEffect(() => {
    if (bankDetailsList?.data?.bank_details.length) {
      setMenuProfileId(1);
    }
  }, [bankDetailsList]);

  return (
    <MainConatiner>
      <FristDivider orientation="vertical" flexItem />
      <SecondBox>
        <ThirdBox>
          <ForBox>
            <FiveBox>
              <UINewTypography variant="h5" color="text.secondary" ml={3} mt={3.93}>
                <FormattedMessage id="Payout" />
              </UINewTypography>
              <SecondDivider orientation="horizontal" flexItem />
            </FiveBox>
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
                  <FristDivider orientation="horizontal" flexItem />
                </>
              ))}
            </SidebarDropDownMainContainer>
          </ForBox>
          <FristDivider orientation="vertical" flexItem />
        </ThirdBox>
        <MenuListText>
          {menuId === 0 ? (
            <PayoutContainer />
          ) : menuId === 1 ? (
            menuProfileId === 0 ? (
              <PayoutBankInformation token={token} />
            ) : (
              <PayoutPaymentConatiner bankDetailsList={bankDetailsList ?? ({} as BankDetailsListRes)} />
            )
          ) : menuId === 2 ? (
            <PayoutsAndInvoices />
          ) : (
            <PayoutFAQS />
          )}
        </MenuListText>
      </SecondBox>
    </MainConatiner>
  );
};

export default PayoutModelProfileConatiner;
