'use client';
import { MenuItem } from '@mui/material';
import { SidebarDropDownMainContainer } from '../sidebarDropDown/SidebarDropDown.styled';
import React, { useState } from 'react';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { FormattedMessage } from 'react-intl';

import {
  FiveBox,
  ForBox,
  FristDivider,
  MainConatiner,
  MenuListText,
  SecondBox,
  SecondDivider,
  ThirdBox
} from './EarningsModelProfileContainer.styled';
import EarningHistory from '../earningHistory';
import EarningOverview from '../earningOverview';

const EarningHistoryMenuList = [
  { menuName: <FormattedMessage id="Overview" />, id: 0 },
  { menuName: <FormattedMessage id="History" />, id: 1 }
];
const EarningsModelProfileConatiner = ({ token }: { token: TokenIdType }) => {
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
              <UINewTypography variant="h5" lineHeight="125%" color="text.secondary" ml={3} mt={6}>
                <FormattedMessage id="Earnings" />
              </UINewTypography>
              <SecondDivider orientation="horizontal" flexItem />
            </FiveBox>
            <SidebarDropDownMainContainer>
              {EarningHistoryMenuList?.map((list, index) => (
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
                  {index !== EarningHistoryMenuList.length - 1 && <FristDivider orientation="horizontal" flexItem />}
                </React.Fragment>
              ))}
            </SidebarDropDownMainContainer>
          </ForBox>
          <FristDivider orientation="vertical" flexItem />
        </ThirdBox>
        <MenuListText>{menuId === 0 ? <EarningOverview /> : <EarningHistory token={token} />}</MenuListText>
      </SecondBox>
    </MainConatiner>
  );
};

export default EarningsModelProfileConatiner;
