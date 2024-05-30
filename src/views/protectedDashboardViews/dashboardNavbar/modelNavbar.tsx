import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useState } from 'react';
import { DashboardModelTabs } from 'constants/modelConstants';
import Logout from 'views/protectedViews/logout';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { CommonMenuBox, DashboardSidebarBox, MainDashboardSideMenuMainBox, NavBarBoxContainer, SelectedTab } from './nav.styled';
import Link from 'next/link';

const ModelNavbar = ({ tabIndex }: { tabIndex: number }) => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleOpenLogout = () => {
    setIsLogoutOpen(true);
  };

  const handleCloseLogout = () => {
    setIsLogoutOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <MainDashboardSideMenuMainBox>
          <NavBarBoxContainer>
            {DashboardModelTabs.map((tab, index) =>
              index === tabIndex - 1 ? (
                <Link prefetch={false} href={tab.path} key={index} style={{ textDecoration: 'none' }}>
                  <SelectedTab key={index}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', minWidth: '268px' }}>
                      <Box sx={{ display: 'flex', gap: 1.5 }}>
                        <Box
                          component="img"
                          src={tab.img}
                          sx={{
                            filter: 'invert(39%) sepia(43%) saturate(1339%) hue-rotate(280deg) brightness(87%) contrast(103%)'
                          }}
                        />
                        <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: 'nowrap' }}>
                          {tab.name}
                        </UINewTypography>
                      </Box>
                      <ArrowDropDownRoundedIcon />
                    </Box>
                  </SelectedTab>
                </Link>
              ) : (
                <>
                  <Link prefetch={false} href={tab.path} key={index} style={{ textDecoration: 'none' }}>
                    <CommonMenuBox sx={{ color: 'text.primary' }}>
                      <DashboardSidebarBox id="basic-button">
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                          <Box component="img" src={tab.img} sx={{ filter: 'none' }} />
                          <UINewTypography variant="buttonLargeMenu" whiteSpace="nowrap">
                            {tab.name}
                          </UINewTypography>
                        </Box>
                        <ArrowDropDownRoundedIcon />
                      </DashboardSidebarBox>
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
      </Box>
    </>
  );
};

export default ModelNavbar;
