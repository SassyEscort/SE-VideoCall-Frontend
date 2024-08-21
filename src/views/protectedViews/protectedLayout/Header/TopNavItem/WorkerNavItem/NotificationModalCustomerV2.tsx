import NotificationsNone from '@mui/icons-material/NotificationsNone';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { NotificationFilters } from './HeaderAuthComponent';
import CloseIcon from '@mui/icons-material/Close';
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
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import NotificationItemCustomerV2 from './NotificationItemCustomerV2';

const NotificationModalCustomerV2 = ({
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

  const handleLoadMoreNotifications = () => {
    const filter = {
      ...filters,
      page: filters.page + 1
    };

    handleChangeFilter(filter);
  };

  return (
    <>
      <DrawerBox
        open={open}
        anchor="right"
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: 480,
            backgroundColor: 'secondary.dark'
          }
        }}
      >
        <IconButtonMainBox>
          <IconButtonInnerBox>
            <UINewTypography variant="h3" color="text.secondary">
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
                <NotificationItemCustomerV2
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
                <Typography variant="bodySmall" color="text.secondary">
                  <FormattedMessage id="YouHaveNoNotification" />
                </Typography>
              </NotificationsNoneBox>
            )}
            {filters?.page <
              Math.ceil((existNotifications?.data?.aggregate?.total_rows ?? 0) / (existNotifications?.data?.aggregate?.page_size ?? 1)) && (
              <Box p={1.5}>
                <UIThemeButton variant="contained" fullWidth size="small" onClick={handleLoadMoreNotifications} sx={{ p: 1 }}>
                  <UINewTypography variant="buttonLargeBold">
                    <FormattedMessage id="MoreButton" />
                  </UINewTypography>
                </UIThemeButton>
              </Box>
            )}
          </Box>
        </ExistNotificationsMainBox>
      </DrawerBox>
    </>
  );
};

export default NotificationModalCustomerV2;
