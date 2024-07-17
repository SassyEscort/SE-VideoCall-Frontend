'use client';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Divider, ListItemIcon, ListItemText, Menu, MenuItem, useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { useCallback, useEffect, useRef, useState } from 'react';
import ProfileMenu from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/ProfileMenu';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { getUserDataClient } from 'utils/getSessionData';
import { SiderBarCircaleBoxHeader, SiderBarCircaleTextBoxHeader, SiderBarSecondBox, SiderBarThiredBox } from '../SideMenu/SideMenu.styled';
import Logout from 'views/protectedViews/logout';
import { FormattedMessage } from 'react-intl';
import LanguageDropdown from 'components/common/LanguageDropdown';
import Link from 'next/link';
import { CompleteProfileBox, IconButtonBox, IconButtonBoxInner, UnReadCountMain } from './DashboardMenu.styled';
import NotificationModalV2 from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/NotificationModalV2';
import { NotificationDetailsService } from 'services/notification/notification.services';
import { Root } from 'services/notification/type';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { MODEL_ACTIVE_STEP } from 'constants/workerVerification';

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
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
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

  const unReadCount = notificationDetails?.data?.aggregate?.enabled && notificationDetails?.data?.aggregate?.enabled > 0;
  const isSmaller = useMediaQuery('(max-width:320px)');
  const isSmUP = useMediaQuery(theme.breakpoints.up('sm'));

  const isVerificationPendingOrCompleted = (step: string | undefined) => {
    return step === MODEL_ACTIVE_STEP.IN_REVIEW || step === MODEL_ACTIVE_STEP.ONBOARDED || step === MODEL_ACTIVE_STEP.VERIFIED;
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          gap: isSmaller
            ? 1
            : {
                xs: 2.5,
                sm: 4.5
              }
        }}
      >
        <Box display="flex">
          <LanguageDropdown />
        </Box>
        <IconButton onClick={handleOpenNotification}>
          {unReadCount ? (
            <UnReadCountMain>
              <Box component="img" src="/images/header/dot.png" position="absolute" />
              <Box component="img" src="/images/header/noti.png" />
            </UnReadCountMain>
          ) : (
            <UnReadCountMain>
              <Box component="img" src="/images/header/noti.png" />
            </UnReadCountMain>
          )}
        </IconButton>
        <IconButtonBox>
          <IconButtonBoxInner onClick={handleClickLogout}>
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
              <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                {modelDetails?.name}
              </UINewTypography>
            )}
          </IconButtonBoxInner>
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
            <MenuItem onClick={handleCloseLogout}>
              {token.token && !isVerificationPendingOrCompleted(modelDetails?.verification_step) ? (
                <>
                  <ListItemIcon>
                    <Link href="/model/profile">
                      <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                        <Box component="img" src="/images/icons/userLine.png" sx={{ width: '24px', height: '24px' }} />
                      </IconButton>
                    </Link>
                  </ListItemIcon>
                  <Link href="/model/profile">
                    <UINewTypography variant="bodyLight" color="text.secondary">
                      <FormattedMessage id="MyProfile" />
                    </UINewTypography>
                  </Link>
                </>
              ) : (
                <>
                  <ListItemIcon>
                    <Link href="/model/dashboard">
                      <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                        <Box component="img" src="/images/icons/userLine.png" sx={{ width: '24px', height: '24px' }} />
                      </IconButton>
                    </Link>
                  </ListItemIcon>
                  <Link href="/model/dashboard">
                    <UINewTypography variant="bodyLight" color="text.secondary">
                      <FormattedMessage id="MyProfile" />
                    </UINewTypography>
                  </Link>
                </>
              )}
            </MenuItem>

            <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
            <MenuItem onClick={handleOpenLogout}>
              <ListItemIcon>
                <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                  <Box component="img" src="/images/profile-vector/Vector-6.png" sx={{ width: '20px', height: '20px' }} />
                </IconButton>
              </ListItemIcon>
              <ListItemText>
                <UINewTypography variant="bodyLight" color="text.secondary">
                  <FormattedMessage id="LogOut" />
                </UINewTypography>
              </ListItemText>
            </MenuItem>
            <Logout open={isLogoutOpen} onClose={handleCloseLogoutt} />
          </Menu>
          <ProfileMenu profilePic={firstChar} open={openProfileMenu} handleClose={handleCloseMenu} anchorEl={anchorEl} />
        </IconButtonBox>
        {isSmUP &&
          !(
            modelDetails?.verification_step === MODEL_ACTIVE_STEP.IN_REVIEW ||
            modelDetails?.verification_step === MODEL_ACTIVE_STEP.ONBOARDED ||
            modelDetails?.verification_step === MODEL_ACTIVE_STEP.VERIFIED
          ) && (
            <Link href="/model/profile">
              <CompleteProfileBox variant="contained">
                <UINewTypography variant="body" color="primary.200" whiteSpace="nowrap">
                  <FormattedMessage id="CompleteYourProfile" />
                </UINewTypography>
              </CompleteProfileBox>
            </Link>
          )}
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
