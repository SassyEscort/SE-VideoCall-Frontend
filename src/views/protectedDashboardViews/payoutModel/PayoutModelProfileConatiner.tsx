'use client';
import { MenuItem } from '@mui/material';
import { SidebarDropDownMainContainer } from '../sidebarDropDown/SidebarDropDown.styled';
import { useState } from 'react';
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
            <PayoutBankInformation token={token} />
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
