'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Divider, Menu, MenuItem, useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { useCallback, useEffect, useRef, useState } from 'react';
import ProfileMenu from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/ProfileMenu';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { getUserDataClient } from 'utils/getSessionData';
import { SiderBarCircaleBoxHeader, SiderBarCircaleTextBoxHeader, SiderBarSecondBox, SiderBarThiredBox } from '../SideMenu/SideMenu.styled';
import { CommonMenuBox } from '../dashboardNavbar/nav.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Logout from 'views/protectedViews/logout';
import { FormattedMessage } from 'react-intl';
import LanguageDropdown from 'components/common/LanguageDropdown';
import Link from 'next/link';
import { HeaderBoxContainer } from './DashboardMenu.styled';
import NotificationModalV2 from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/NotificationModalV2';
import { NotificationDetailsService } from 'services/notification/notification.services';
import { Root } from 'services/notification/type';

export type NotificationFilters = {
  page: number;
  isRead?: number;
};

export type NotificationFiltersDashboard = {
  page: number;
  offset: number;
  pageSize: number;
};

const DashboadrHeaderAuthComponent = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse>();
  const [anchorElLogout, setAnchorElLogout] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElLogout);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [anchorElNotification, setAnchorElNotification] = useState<HTMLButtonElement | null>(null);
  const [filters, setFilters] = useState<NotificationFiltersDashboard>({
    page: 1,
    pageSize: 10,
    offset: 0
  });
  const [notificationDetails, setNotificationDetails] = useState<Root>();
  const notificationCount = useRef(0);

  const handleOpenLogout = () => {
    setIsLogoutOpen(true);
  };

  const handleCloseLogoutt = () => {
    setIsLogoutOpen(false);
  };

  const handleCloseMenu = () => {
    setOpenProfileMenu(false);
    setAnchorEl(null);
  };

  const handleClickLogout = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLogout(event.currentTarget);
  };
  const handleCloseLogout = () => {
    setAnchorElLogout(null);
  };

  const handleChangeFilter = (value: NotificationFiltersDashboard) => {
    setFilters(value);
  };

  const handleOpenNotification = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenNotification(true);
    setAnchorElNotification(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setOpenNotification(false);
    setAnchorElNotification(null);
  };

  const handleDeductNotificationCount = () => {
    notificationCount.current = notificationCount.current - 1;
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  const handleCallback = useCallback(async () => {
    const notificationDetails = async () => {
      const ModelPayoutListObject = {
        limit: filters.pageSize,
        offset: filters.offset
      };
      const modelData = await NotificationDetailsService.getNotificationDetails(token.token, ModelPayoutListObject);
      setNotificationDetails(modelData);
    };

    if (token.token) {
      await notificationDetails();
    }
  }, [filters, token.token]);

  useEffect(() => {
    handleCallback();
  }, [handleCallback]);

  useEffect(() => {
    const modelDetails = async () => {
      const modelData = await ModelDetailsService.getModelDetails(token.token);
      setModelDetails(modelData.data);
    };
    if (token.token) {
      modelDetails();
    }
  }, [token.id, token.token]);
  const firstChar = modelDetails?.name ? modelDetails.name.charAt(0).toUpperCase() : '';

  const unReadCount = notificationDetails?.data?.aggregate?.total_rows && notificationDetails?.data?.aggregate?.total_rows > 0;

  return (
    <>
      <Box display="flex" alignItems="center" gap={{ xs: 2.5, sm: 4.5 }}>
        <Box display="flex">
          <LanguageDropdown />
        </Box>
        <IconButton onClick={handleOpenNotification}>
          {unReadCount ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                position: 'relative'
              }}
            >
              <Box component="img" src="/images/header/dot.png" position="absolute" />
              <Box component="img" src="/images/header/noti.png" />
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                position: 'relative'
              }}
            >
              <Box component="img" src="/images/header/noti.png" />
            </Box>
          )}
        </IconButton>
        <Box display="flex" alignItems="center" gap={1}>
          <Box display="flex" alignItems="center" gap={1} sx={{ cursor: 'pointer' }} onClick={handleClickLogout}>
            <IconButton
              id="profile-menu"
              aria-controls={openProfileMenu ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openProfileMenu}
              disableFocusRipple
              disableRipple
              sx={{ p: 0 }}
            >
              <SiderBarSecondBox>
                <SiderBarThiredBox>
                  <SiderBarCircaleBoxHeader></SiderBarCircaleBoxHeader>
                  <SiderBarCircaleTextBoxHeader>{firstChar}</SiderBarCircaleTextBoxHeader>
                </SiderBarThiredBox>
              </SiderBarSecondBox>
            </IconButton>
            {isMdUp && (
              <Typography variant="buttonLargeMenu" color="text.secondary">
                {modelDetails?.name}
              </Typography>
            )}
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorElLogout}
            open={open}
            onClose={handleCloseLogout}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
            sx={{ '& .MuiMenu-paper > ul': { backgroundColor: '#1E0815 !important' } }}
          >
            <MenuItem>
              <CommonMenuBox sx={{ cursor: 'pointer', color: 'text.primary' }}>
                <HeaderBoxContainer>
                  <Box component="img" src="/images/icons/userLine.png" width={24} height={24} />
                  <Link href="/model/dashboard" onClick={handleCloseLogout}>
                    <UINewTypography variant="buttonLargeMenu">
                      <FormattedMessage id="MyProfile" />
                    </UINewTypography>
                  </Link>
                </HeaderBoxContainer>
                <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                <HeaderBoxContainer onClick={handleOpenLogout}>
                  <Box component="img" src="/images/profile-vector/Vector-6.png" height={16} mr={1} />
                  <UINewTypography variant="buttonLargeMenu">
                    <FormattedMessage id="LogOut" />
                  </UINewTypography>
                </HeaderBoxContainer>
              </CommonMenuBox>
              <Logout open={isLogoutOpen} onClose={handleCloseLogoutt} />
            </MenuItem>
          </Menu>
          <ProfileMenu profilePic={firstChar} open={openProfileMenu} handleClose={handleCloseMenu} anchorEl={anchorEl} />
        </Box>
      </Box>
      {notificationDetails && (
        <NotificationModalV2
          notificationDetails={notificationDetails ?? ({} as Root)}
          open={openNotification}
          anchorEl={anchorElNotification}
          filters={filters}
          handleClose={handleCloseNotification}
          handleChangeFilter={handleChangeFilter}
          handleDeductNotificationCount={handleDeductNotificationCount}
          token={token}
          handleCallback={handleCallback}
        />
      )}
    </>
  );
};

export default DashboadrHeaderAuthComponent;
