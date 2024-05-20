import Link from 'next/link';
import Box from '@mui/material/Box';
import { MainDashboardTabs } from 'constants/escortConstants';
import { CommonMenuBox, MainDashboardSideMenuMainBox, NavBarBoxContainer, SelectedTab } from './nav.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Logout from '../logout';
import { useState } from 'react';

const Navbar = ({ tabIndex }: { tabIndex: number }) => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const handleOpenLogout = () => {
    setIsLogoutOpen(true);
  };

  const handleCloseLogout = () => {
    setIsLogoutOpen(false);
  };
  return (
    <MainDashboardSideMenuMainBox>
      <NavBarBoxContainer>
        {MainDashboardTabs.map((tab, index) =>
          index === tabIndex - 1 ? (
            <Link prefetch={false} href={tab.path} key={index} style={{ textDecoration: 'none' }}>
              <SelectedTab>
                <Box
                  component="img"
                  src={tab.img}
                  sx={{
                    filter: 'invert(39%) sepia(43%) saturate(1339%) hue-rotate(280deg) brightness(87%) contrast(103%)'
                  }}
                />
                <UINewTypography variant="buttonLargeMenu">{tab.name}</UINewTypography>
              </SelectedTab>
            </Link>
          ) : (
            <>
              <Link prefetch={false} href={tab.path} key={index} style={{ textDecoration: 'none' }}>
                <CommonMenuBox sx={{ color: 'text.primary' }}>
                  <Box component="img" src={tab.img} />
                  <UINewTypography variant="buttonLargeMenu">{tab.name}</UINewTypography>
                </CommonMenuBox>
              </Link>
            </>
          )
        )}
        <CommonMenuBox sx={{ cursor: 'pointer', color: 'text.primary' }} onClick={handleOpenLogout}>
          <Box component="img" src="/images/profile-vector/Vector-6.png" />
          <UINewTypography variant="buttonLargeMenu">Logout</UINewTypography>
        </CommonMenuBox>
        <Logout open={isLogoutOpen} onClose={handleCloseLogout} />
      </NavBarBoxContainer>
    </MainDashboardSideMenuMainBox>
  );
};

export default Navbar;
