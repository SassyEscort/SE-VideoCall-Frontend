'use client';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Divider, ListItemIcon, ListItemText, Menu, MenuItem, useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { useCallback, useEffect, useRef, useState } from 'react';
import ProfileMenu from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/ProfileMenu';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
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
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import MyProfileChangePassword from 'views/protectedViews/changePassword';
import { useAuthContext } from '../../../../context/AuthContext';

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
  const { session } = useAuthContext();
  const token = session?.user ? JSON.parse((session.user as any)?.picture) : '';

  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse>();
  const [anchorElLogout, setAnchorElLogout] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElLogout);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [anchorElNotification, setAnchorElNotification] = useState<HTMLButtonElement | null>(null);
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [filters, setFilters] = useState<NotificationFiltersDashboard>({
    page: 1,
    pageSize: 10,
    offset: 0
  });
  const [notificationDetails, setNotificationDetails] = useState<Root>();
  const notificationCount = useRef(0);

  const { isNameChange, isCustomer } = useCallFeatureContext();

  const handleOpenChangePassword = () => {
    setOpenChangePassword(true);
  };

  const handleCloseChangePassword = () => {
    setOpenChangePassword(false);
  };
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
      const modelData = await ModelDetailsService.getModelDetails(token.token, isCustomer);
      setModelDetails(modelData.data);
    };
    if (token.token) {
      modelDetails();
    }
  }, [token.id, token.token, isNameChange, isCustomer]);

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
              <Box component="img" src="/images/header/dot.png" alt="dot.png" position="absolute" />
              <Box component="img" src="/images/header/noti.png" alt="notification" />
            </UnReadCountMain>
          ) : (
            <UnReadCountMain>
              <Box component="img" src="/images/header/noti.png" alt="notification" />
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
                        <Box component="img" src="/images/icons/userLine.png" alt="user_line" sx={{ width: '24px', height: '24px' }} />
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
                        <Box component="img" src="/images/icons/userLine.png" alt="user_line" sx={{ width: '24px', height: '24px' }} />
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
            <MenuItem onClick={handleOpenChangePassword}>
              <ListItemIcon>
                <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                  <Box component="img" src="/images/icons/changepassword-img.png" alt="change_pwd" sx={{ width: '24px', height: '24px' }} />
                </IconButton>
              </ListItemIcon>
              <ListItemText>
                <UINewTypography variant="bodyLight" color="text.secondary">
                  <FormattedMessage id="ChangePassword" />
                </UINewTypography>
              </ListItemText>
            </MenuItem>
            <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
            <MenuItem onClick={handleOpenLogout}>
              <ListItemIcon>
                <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                  <Box component="img" src="/images/profile-vector/Vector-6.png" alt="vector_icon" sx={{ width: '20px', height: '20px' }} />
                </IconButton>
              </ListItemIcon>
              <ListItemText>
                <UINewTypography variant="bodyLight" color="text.secondary">
                  <FormattedMessage id="LogOut" />
                </UINewTypography>
              </ListItemText>
            </MenuItem>
            <Logout open={isLogoutOpen} onClose={handleCloseLogoutt} />
            <MyProfileChangePassword onOpen={openChangePassword} onClose={handleCloseChangePassword} token={token} />
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
