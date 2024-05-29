import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useState } from 'react';
import { DashboardModelTabs } from 'constants/modelConstants';
import Logout from 'views/protectedViews/logout';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { CommonMenuBox, DashboardSidebarBox, MainDashboardSideMenuMainBox, NavBarBoxContainer, SelectedTab } from './nav.styled';
import { Divider } from '@mui/material';
import SidebarDropDown from '../sidebarDropDown';

const ModelNavbar = ({ tabIndex }: { tabIndex: number }) => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [menuName, setMenuName] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  console.log(menuName, open, anchorEl, 'menuName');

  const handleOpenLogout = () => {
    setIsLogoutOpen(true);
  };

  const handleCloseLogout = () => {
    setIsLogoutOpen(false);
  };

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>, name: string) => {
    setAnchorEl(event.currentTarget);
    setMenuName(name);
  };

  const handleCloseMenu = (event: React.MouseEvent<HTMLButtonElement>, name: string) => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <MainDashboardSideMenuMainBox>
          <NavBarBoxContainer>
            {DashboardModelTabs.map((tab, index) =>
              index === tabIndex - 1 ? (
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
                      <UINewTypography variant="buttonLargeMenu">{tab.name}</UINewTypography>
                    </Box>
                    <ArrowDropDownRoundedIcon />
                  </Box>
                </SelectedTab>
              ) : (
                <>
                  <CommonMenuBox sx={{ color: 'text.primary' }}>
                    <DashboardSidebarBox onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleMenu(e, tab.name)}>
                      <Box sx={{ display: 'flex', gap: 1.5 }}>
                        <Box component="img" src={tab.img} />
                        <UINewTypography variant="buttonLargeMenu" whiteSpace="nowrap">
                          {tab.name}
                        </UINewTypography>
                      </Box>
                      <ArrowDropDownRoundedIcon />
                    </DashboardSidebarBox>
                  </CommonMenuBox>
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
        <Divider orientation="vertical" flexItem sx={{ borderColor: 'primary.700' }} />
        <SidebarDropDown open={open} handleCloseMenu={handleCloseMenu} />
      </Box>
    </>
  );
};

export default ModelNavbar;
