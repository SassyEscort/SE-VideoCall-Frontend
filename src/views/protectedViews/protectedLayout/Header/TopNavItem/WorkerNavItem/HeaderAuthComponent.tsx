'use client';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import theme from 'themes/theme';
import ProfileMenu from './ProfileMenu';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Logout from 'views/protectedViews/logout';
import { FormattedMessage } from 'react-intl';
import LanguageDropdown from 'components/common/LanguageDropdown';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { NotificationDetailsService } from 'services/notification/notification.services';
import { ChatNotificationData, ChatNotificationRoot, Root } from 'services/notification/type';
import MyProfileChangePassword from 'views/protectedViews/myProfile/MyProfileChangePassword';
import { IconButtonBoxInner, UnReadCountMain } from 'views/protectedDashboardViews/dashboardNavItem/DashboardMenu.styled';
import { IconButtonBoxNew } from './Notification.styled';
import { BalanceBox, BorderBox, HeaderMainBox } from './HeaderAuthComponent.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import NotificationModalCustomerV2 from './NotificationModalCustomerV2';
import { useAuthContext } from '../../../../../../contexts/AuthContext';
import CreditSideDrawer from 'views/protectedViews/CreditSideDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useTawk } from 'contexts/TawkContext';
import { useCallFeatureContext } from 'contexts/CallFeatureContext';
import { io, Socket } from 'socket.io-client';
import { ISocketMessage } from 'services/chatServices/chat.service';
import { StyledSnackBar, StyledSnackBarInnerBox } from 'views/guestViews/homePage/homeBanner/HomeBanner.styled';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname, useRouter } from 'next/navigation';
import { gaEventTrigger } from 'utils/analytics';

export type NotificationFilters = {
  page: number;
  offset: number;
  pageSize: number;
};

const HeaderAuthComponent = () => {
  const { maximizeChat, initializeChat } = useTawk();
  const { session, token, isFreeCreditsClaimed, openCreditDrawer, handleCreditDrawerClose, handleGAEventsTrigger, handleSetBalance } =
    useAuthContext();
  const { isCallEnded, avaialbleCredits } = useCallFeatureContext();
  const router = useRouter();
  const customerDetails = session?.user ? JSON.parse((session.user as any)?.picture) : '';
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElLogout, setAnchorElLogout] = useState<null | HTMLElement>(null);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [anchorElNotification, setAnchorElNotification] = useState<HTMLButtonElement | null>(null);
  const [filters, setFilters] = useState<NotificationFilters>({
    page: 1,
    pageSize: 10,
    offset: 0
  });
  const [notificationDetails, setNotificationDetails] = useState<Root>();
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [openCreditSideDrawer, setOpenCreditSideDrawer] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [snackbarOptions, setSnackbarOptions] = useState({ open: false, message: '', url: '' });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setChatNotificationDetails] = useState<ChatNotificationRoot>();

  const open = Boolean(anchorElLogout);
  const uploadedImageURL = '/images/headerv2/profilePic.png';
  const firstChar = customerDetails?.customer_name ? customerDetails.customer_name.charAt(0).toUpperCase() : '';
  const notificationCount = useRef(0);
  const unReadCount = notificationDetails?.data?.aggregate?.enabled && notificationDetails?.data?.aggregate?.enabled > 0;

  const handleCloseCreditSideDrawer = () => {
    setOpenCreditSideDrawer(false);
    handleCreditDrawerClose();
  };

  const handleOpenChangePassword = () => {
    gaEventTrigger('change-password-click', {
      action: 'change-password-click',
      category: 'Button',
      label: 'Change password click'
    });
    setOpenChangePassword(true);
  };

  const handleCloseChnagePassword = () => {
    setOpenChangePassword(false);
  };

  const handleClickLogout = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLogout(event.currentTarget);
  };

  const handleCloseLogout = () => {
    setAnchorElLogout(null);
  };

  const handleCloseMenu = () => {
    setOpenProfileMenu(false);
    setAnchorEl(null);
  };

  const handleOpenNotification = (event: React.MouseEvent<HTMLButtonElement>) => {
    gaEventTrigger('notifications-icon-click', {
      action: 'notifications-icon-click',
      category: 'Button',
      label: 'Notification icon click'
    });
    setOpenNotification(true);
    setAnchorElNotification(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setOpenNotification(false);
    setAnchorElNotification(null);
  };

  const handleChangeFilter = (value: NotificationFilters) => {
    setFilters(value);
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

  const handleSnackbarClose = () => setSnackbarOptions({ open: false, message: '', url: '' });

  const handleOpenLogout = () => {
    gaEventTrigger('log-out-button-click', {
      action: 'log-out-button-click',
      category: 'Button',
      label: 'logout button click'
    });
    setIsLogoutOpen(true);
  };

  const handleCloseLogoutt = () => {
    setIsLogoutOpen(false);
  };

  const handleChatOpen = () => {
    gaEventTrigger('chat-support-click', {
      action: 'chat-support-click',
      category: 'Button',
      label: 'Chat support click'
    });
    maximizeChat();
    initializeChat();
  };

  const handleChatNotification = async (): Promise<ChatNotificationData> => {
    const ModelPayoutListObject = {
      limit: filters.pageSize,
      offset: filters.offset
    };
    const chatNotification = await NotificationDetailsService.getChatNotificationDetails(token.token, ModelPayoutListObject);
    setChatNotificationDetails(chatNotification);
    return chatNotification.data;
  };

  useEffect(() => {
    handleCallback();
  }, [handleCallback]);

  useEffect(() => {
    const getCustomerCredit = async () => {
      if (token.token) {
        const getModel = await ModelDetailsService.getModelWithDraw(token.token);
        if (getModel?.data?.credits === null) {
          setBalance(0);
          handleSetBalance(0);
        } else {
          setBalance(getModel?.data?.credits);
          handleSetBalance(getModel?.data?.credits || 0);
        }
      }
    };

    if (token.token) {
      getCustomerCredit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.id, token.token, isFreeCreditsClaimed, isCallEnded]);

  useEffect(() => {
    if (isCallEnded && avaialbleCredits !== undefined) {
      setBalance(avaialbleCredits);
    }
  }, [avaialbleCredits, isCallEnded, isFreeCreditsClaimed]);

  useEffect(() => {
    if (openCreditDrawer) {
      const creditInfoEvent = {
        email: customerDetails?.customer_email,
        name: customerDetails?.customer_name,
        username: customerDetails?.customer_user_name,
        is_credit_over: false,
        'is-automated': 'yes',
        'close-button-click': 'no',
        'credits-balance-available': balance || 0,
        source: 'Header'
      };
      gaEventTrigger('Credits_Purchase_Popup_open', {
        action: 'Credits_Purchase_Popup_open',
        category: 'Dialog',
        label: 'Credits_Purchase_Popup_open',
        value: JSON.stringify(creditInfoEvent)
      });
      setOpenCreditSideDrawer(true);
    }
  }, [openCreditDrawer]);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_BASE_URL!);
    setSocket(newSocket);
    if (customerDetails.customer_user_name) {
      newSocket.on('connect', () => {
        newSocket.emit('join', customerDetails.customer_user_name);
      });
    }
  }, [customerDetails.customer_user_name]);

  useEffect(() => {
    const setupSocketListeners = async () => {
      if (socket) {
        socket.on('connect', () => {
          socket.emit('join', customerDetails.customer_user_name);
          // Listener for chat messages
          socket.on('chat-message', async (message: ISocketMessage) => {
            if (!pathname.startsWith('/chat')) {
              const chatNotificationData = await handleChatNotification();
              setSnackbarOptions({
                open: true,
                message: chatNotificationData?.notifications[0].message || '',
                url: `/chat/${chatNotificationData?.notifications[0].user_name}` || ''
              });
            }
          });
        });
      }
    };
    setupSocketListeners();
    // Cleanup socket listeners on unmount or dependency change
    return () => {
      if (socket) {
        socket.off('connect');
        socket.off('chat-message');
        socket.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, customerDetails.customer_user_name]);

  const handleGAEventForChatIcon = () => handleGAEventsTrigger('message-icon-click', 'top-bar');
  const handleGAEventForFavouriteIcon = () => handleGAEventsTrigger('top-bar-favorite-icon-click');

  return (
    <>
      <HeaderMainBox>
        {isMdDown ? (
          <Box>
            <LanguageDropdown />
          </Box>
        ) : (
          <>
            <BorderBox>
              <LanguageDropdown />
            </BorderBox>
          </>
        )}

        {isMdUp && (
          <BorderBox
            alignItems="center"
            gap={1}
            display="flex"
            onClick={() => {
              gaEventTrigger('wallet-icon-click', {
                source: 'header',
                label: 'Wallet icon click',
                category: 'Wallet icon click',
                value: JSON.stringify({ 'credits-balance-available': balance?.toFixed(2) || 0 })
              });
              setOpenCreditSideDrawer(true);
            }}
          >
            <Box component="img" src="/images/header/coin.png" alt="coin_icon" />
            <BalanceBox>
              <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                {balance?.toFixed(2) || 0}
              </UINewTypography>
              <Divider orientation="vertical" flexItem sx={{ borderColor: '#E9E8EB33' }} />
              <Box component="img" src="/images/header/plus-icon-header.png" alt="coin_icon" />
            </BalanceBox>
          </BorderBox>
        )}

        {isMdUp && (
          <>
            <Link href="/profile/favourites" style={{ textDecoration: 'none' }} onClick={handleGAEventForFavouriteIcon}>
              <IconButton sx={{ height: 24, width: 24 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    position: 'relative'
                  }}
                >
                  <Box component="img" src="/images/header/heart.png" alt="heart_logo" />
                </Box>
              </IconButton>
            </Link>
            <Link href="/chat" style={{ textDecoration: 'none' }} onClick={handleGAEventForChatIcon}>
              <IconButton sx={{ height: 24, width: 24 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    position: 'relative'
                  }}
                >
                  <Box component="img" src="/images/chat/chatNotification.svg" alt="chat_logo" sx={{ width: 24, height: 24 }} />
                </Box>
              </IconButton>
            </Link>
          </>
        )}

        <IconButton onClick={handleOpenNotification}>
          {unReadCount ? (
            <UnReadCountMain>
              <Box component="img" src="/images/header/dot.png" position="absolute" alt="dot_icon" />
              <Box component="img" src="/images/header/noti.png" alt="notification" />
            </UnReadCountMain>
          ) : (
            <UnReadCountMain>
              <Box component="img" src="/images/header/noti.png" alt="notification" />
            </UnReadCountMain>
          )}
        </IconButton>
        <IconButtonBoxNew>
          <IconButtonBoxInner onClick={handleClickLogout}>
            <IconButton
              id="profile-menu"
              aria-controls={openProfileMenu ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openProfileMenu}
              disableFocusRipple
              disableRipple
              sx={{ p: 1 }}
            >
              <Avatar
                alt="User Photo"
                sx={{
                  height: 24,
                  width: 24
                }}
              >
                {firstChar}
              </Avatar>
            </IconButton>
            {isMdUp && (
              <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                {customerDetails?.customer_name || ''}
              </UINewTypography>
            )}
          </IconButtonBoxInner>
          <Menu
            id="basic-menu"
            anchorEl={anchorElLogout}
            open={open}
            onClose={handleCloseLogout}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
              'aria-label': 'basic-button'
            }}
            sx={{ '& .MuiMenu-paper > ul': { backgroundColor: '#1E0815 !important' } }}
          >
            <MenuItem onClick={handleCloseLogout}>
              <ListItemIcon>
                <Link href="/profile" onClick={handleCloseLogout}>
                  <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                    <Box component="img" src="/images/icons/userLine.png" alt="user_line" sx={{ width: '24px', height: '24px' }} />
                  </IconButton>
                </Link>
              </ListItemIcon>
              <Link
                href="/profile"
                onClick={() => {
                  gaEventTrigger('my-profile-click', {
                    action: 'my-profile-click',
                    category: 'Button',
                    label: 'My profile click'
                  });
                  handleCloseLogout();
                }}
              >
                <ListItemText>
                  <UINewTypography variant="bodyLight" color="text.secondary">
                    <FormattedMessage id="MyProfile" />
                  </UINewTypography>
                </ListItemText>
              </Link>
            </MenuItem>
            <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
            {isMdDown && (
              <>
                <MenuItem
                  onClick={() => {
                    setAnchorElLogout(null);
                    setOpenCreditSideDrawer(true);
                  }}
                >
                  <ListItemIcon>
                    <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                      <Box component="img" src="/images/header/coin.png" alt="coin_icon" />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText>
                    <BalanceBox>
                      <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                        {balance?.toFixed(2) || 0}
                      </UINewTypography>
                      <Divider orientation="vertical" flexItem sx={{ borderColor: '#E9E8EB33' }} />
                      <Box component="img" src="/images/header/plus-icon-header.png" alt="coin_icon" />
                    </BalanceBox>
                  </ListItemText>
                </MenuItem>
                <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
              </>
            )}
            {isMdDown && (
              <>
                <MenuItem>
                  <ListItemIcon>
                    <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                      <Link href="/profile/favourites" style={{ textDecoration: 'none' }}>
                        <IconButton sx={{ height: 24, width: 24 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row-reverse',
                              position: 'relative'
                            }}
                          >
                            <Box component="img" src="/images/header/heart.png" alt="heart_logo" />
                          </Box>
                        </IconButton>
                      </Link>
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="/profile/favourites">
                      <UINewTypography variant="bodyLight" color="text.secondary">
                        <FormattedMessage id="Favourites" />
                      </UINewTypography>
                    </Link>
                  </ListItemText>
                </MenuItem>
                <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                <MenuItem>
                  <ListItemIcon>
                    <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                      <Link href="/chat" style={{ textDecoration: 'none' }} onClick={handleGAEventForChatIcon}>
                        <IconButton sx={{ height: 24, width: 24 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row-reverse',
                              position: 'relative'
                            }}
                          >
                            <Box component="img" src="/images/chat/chatNotification.svg" alt="chat_logo" />
                          </Box>
                        </IconButton>
                      </Link>
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText>
                    <Link href="/chat">
                      <UINewTypography variant="bodyLight" color="text.secondary">
                        <FormattedMessage id="Chat" />
                      </UINewTypography>
                    </Link>
                  </ListItemText>
                </MenuItem>
                <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
              </>
            )}
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
            <MenuItem onClick={handleChatOpen}>
              <ListItemIcon>
                <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                  <Box component="img" src="/images/profile-vector/chat-icon.png" alt="vector_img" sx={{ width: '20px', height: '20px' }} />
                </IconButton>
              </ListItemIcon>
              <ListItemText>
                <UINewTypography variant="bodyLight" color="text.secondary">
                  <FormattedMessage id="SupportChat" />
                </UINewTypography>
              </ListItemText>
            </MenuItem>

            <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
            <MenuItem onClick={handleOpenLogout}>
              <ListItemIcon>
                <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                  <Box component="img" src="/images/profile-vector/Vector-6.png" alt="vector_img" sx={{ width: '20px', height: '20px' }} />
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
          <ProfileMenu profilePic={uploadedImageURL} open={openProfileMenu} handleClose={handleCloseMenu} anchorEl={anchorEl} />
          <MyProfileChangePassword onOpen={openChangePassword} onClose={handleCloseChnagePassword} token={token.token} />
        </IconButtonBoxNew>
      </HeaderMainBox>
      {notificationDetails && (
        <NotificationModalCustomerV2
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
      <CreditSideDrawer open={openCreditSideDrawer} handleClose={handleCloseCreditSideDrawer} balance={balance} />

      <StyledSnackBar
        open={snackbarOptions.open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleSnackbarClose}
      >
        <StyledSnackBarInnerBox onClick={() => router.push(snackbarOptions?.url)}>
          {snackbarOptions.message && (
            <>
              <Box
                component="img"
                src="/images/chat/chatNotification.svg"
                alt="chat_img"
                sx={{ width: 32, height: 32 }}
                onClick={handleGAEventForChatIcon}
              />
              <Box sx={{ fontWeight: 800, fontSize: 16 }}>{snackbarOptions.message}</Box>
              <CloseIcon
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSnackbarClose();
                }}
                sx={{ cursor: 'pointer', color: 'black', width: 16, height: 16 }}
              />
            </>
          )}
        </StyledSnackBarInnerBox>
      </StyledSnackBar>
    </>
  );
};

export default HeaderAuthComponent;
