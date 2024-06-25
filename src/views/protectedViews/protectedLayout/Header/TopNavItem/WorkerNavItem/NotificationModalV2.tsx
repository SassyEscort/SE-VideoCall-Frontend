import NotificationsNone from '@mui/icons-material/NotificationsNone';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import NotificationMoreMenu from './NotificationMoreMenu';
import { NotificationFilters } from './HeaderAuthComponent';
import CloseIcon from '@mui/icons-material/Close';
import NotificationItemV2 from './NotificationItemV2';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { Root } from 'services/notification/type';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { FormattedMessage } from 'react-intl';
import {
  DrawerBox,
  ExistNotificationsMainBox,
  IconButtonBox,
  IconButtonInnerBox,
  IconButtonMain,
  IconButtonMainBox,
  NotificationsNoneBox
} from './Notification.styled';

const NotificationModalV2 = ({
  notificationDetails,
  open,
  filters,
  handleClose,
  handleChangeFilter,
  token,
  handleDeductNotificationCount,
  handleCallback
}: {
  notificationDetails: Root;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  filters: NotificationFilters;
  handleClose: () => void;
  handleChangeFilter: (value: NotificationFilters) => void;
  token: TokenIdType;
  handleDeductNotificationCount: () => void;
  handleCallback: () => void;
}) => {
  const [openNotificationMore, setOpenNotificationMore] = useState(false);
  const [anchorElNotificationMore, setAnchorElNotificationMore] = useState<null | HTMLElement>(null);
  const [existNotifications, setExistNotifications] = useState<Root>();

  const handleCloseNotificationMore = () => {
    setAnchorElNotificationMore(null);
    setOpenNotificationMore(false);
  };

  const handleClickNotification = (id: number) => {
    if (existNotifications?.data?.notifications) {
      const notificationData = [...existNotifications.data.notifications];
      const index = notificationData.findIndex((x) => x.id === id);
      if (index >= 0 && notificationData[index].is_active === false) {
        notificationData[index].is_active = true;
        setExistNotifications({
          ...existNotifications,
          data: {
            ...existNotifications.data,
            notifications: notificationData
          }
        });
        handleDeductNotificationCount();
      }
    }
  };

  const handleClickReadAndClearAllNotifications = () => {
    const filter = {
      ...filters,
      page: 1
    };

    handleChangeFilter(filter);
  };

  useEffect(() => {
    if (filters.page === 1) {
      setExistNotifications(notificationDetails);
    } else if (existNotifications) {
      setExistNotifications({
        ...existNotifications,
        data: {
          ...existNotifications.data,
          notifications: [...existNotifications.data.notifications, ...notificationDetails.data.notifications]
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationDetails]);

  return (
    <>
      <DrawerBox open={open} anchor="right" onClose={handleClose}>
        <IconButtonMainBox>
          <IconButtonInnerBox>
            <UINewTypography variant="h3" color="white.main">
              <FormattedMessage id="Notifications" />
            </UINewTypography>
            <IconButtonBox>
              <IconButtonMain onClick={handleClose} size="small">
                <CloseIcon sx={{ width: '21px', height: '21px' }} />
              </IconButtonMain>
            </IconButtonBox>
          </IconButtonInnerBox>
          <Divider />
        </IconButtonMainBox>
        <ExistNotificationsMainBox>
          <Box>
            {existNotifications && existNotifications?.data?.notifications?.length > 0 ? (
              existNotifications?.data?.notifications?.map((notification, index) => (
                <NotificationItemV2
                  key={index}
                  notification={notification}
                  token={token}
                  handleClickNotification={handleClickNotification}
                  handleClose={handleClose}
                  handleCallback={handleCallback}
                />
              ))
            ) : (
              <NotificationsNoneBox>
                <NotificationsNone />
                <Typography variant="bodySmall">
                  <FormattedMessage id="YouHaveNoNotification" />
                </Typography>
              </NotificationsNoneBox>
            )}
          </Box>
        </ExistNotificationsMainBox>
      </DrawerBox>
      <NotificationMoreMenu
        open={openNotificationMore}
        anchorEl={anchorElNotificationMore}
        handleClose={handleCloseNotificationMore}
        handleClickReadAndClearAllNotifications={handleClickReadAndClearAllNotifications}
      />
    </>
  );
};

export default NotificationModalV2;
