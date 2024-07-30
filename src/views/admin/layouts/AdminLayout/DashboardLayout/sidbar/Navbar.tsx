import Link from 'next/link';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { CommonMenuBox, MainDashboardSideMenuMainBox, NavBarBoxContainer, SelectedTab, StyledNavItemIcon } from './nav.styled';
import { AdminConstantsTabs } from 'constants/adminConstants';

const Navbar = ({ tabIndex }: { tabIndex: number }) => {
  return (
    <MainDashboardSideMenuMainBox>
      <NavBarBoxContainer>
        {AdminConstantsTabs?.map((tab, index) =>
          index === tabIndex - 1 ? (
            <Link prefetch={false} href={tab.path} key={index} style={{ textDecoration: 'none' }}>
              <SelectedTab>
                {tab.icon && <StyledNavItemIcon>{tab.icon}</StyledNavItemIcon>}
                <UINewTypography variant="buttonLargeMenu">{tab.name}</UINewTypography>
              </SelectedTab>
            </Link>
          ) : (
            <>
              <Link prefetch={false} href={tab.path} key={index} style={{ textDecoration: 'none' }}>
                <CommonMenuBox sx={{ color: 'text.primary' }}>
                  {tab.icon && <StyledNavItemIcon>{tab.icon}</StyledNavItemIcon>}
                  <UINewTypography variant="buttonLargeMenu">{tab.name}</UINewTypography>
                </CommonMenuBox>
              </Link>
            </>
          )
        )}
      </NavBarBoxContainer>
    </MainDashboardSideMenuMainBox>
  );
};

export default Navbar;
