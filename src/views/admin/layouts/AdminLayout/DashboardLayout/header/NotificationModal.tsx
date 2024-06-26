import MoreVert from '@mui/icons-material/MoreVert';
import NotificationsNone from '@mui/icons-material/NotificationsNone';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { Root } from 'services/notification/type';
import { NotificationFiltersDashboard } from 'views/protectedDashboardViews/dashboardNavItem/HeaderAuthComponent';
import { FormattedMessage } from 'react-intl';
import NotificationItem from './NotificationItem';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { IconButtonBox, NotificationsNoneBox, StickyMain, StickyMainInner } from './AccountPopover.styled';

const NotificationModal = ({
  notificationDetails,
  open,
  anchorEl,
  filters,
  token,
  handleClose,
  handleChangeFilter,
  handleCallback,
  handleDeductNotificationCount
}: {
  notificationDetails: Root;
  open: boolean;
  token: TokenIdType;
  anchorEl: HTMLButtonElement | null;
  filters: NotificationFiltersDashboard;
  handleClose: () => void;
  handleChangeFilter: (value: NotificationFiltersDashboard) => void;
  handleCallback: () => void;
  handleDeductNotificationCount: () => void;
}) => {
  const [existNotifications, setExistNotifications] = useState<Root>();

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
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          '& .MuiPaper-root': {
            maxWidth: { xs: 288, sm: 360 },
            width: '100%',
            maxHeight: 'calc(100vh - 100px)'
          }
        }}
      >
        <StickyMain>
          <StickyMainInner>
            <Typography variant="bodyBold" color="secondary.dark">
              <FormattedMessage id="Notifications" />
            </Typography>
            <IconButtonBox>
              <IconButton size="small">
                <MoreVert />
              </IconButton>
            </IconButtonBox>
          </StickyMainInner>
          <Divider />
        </StickyMain>
        {existNotifications && existNotifications?.data?.notifications?.length > 0 ? (
          existNotifications?.data?.notifications?.map((notification, index) => (
            <NotificationItem
              key={index}
              notification={notification}
              handleClickNotification={handleClickNotification}
              handleClose={handleClose}
              token={token}
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
      </Popover>
    </>
  );
};

export default NotificationModal;
