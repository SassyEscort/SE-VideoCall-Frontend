import NotificationsNone from '@mui/icons-material/NotificationsNone';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NotificationMoreMenu from './NotificationMoreMenu';
import { NotificationFilters } from './HeaderAuthComponent';

import CloseIcon from '@mui/icons-material/Close';
import NotificationItemV2 from './NotificationItemV2';
import { NotificationContainer } from './Notification.styled';
import Drawer from '@mui/material/Drawer';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import UINewTypography from 'components/UIComponents/UINewTypography';

const NotificationModalV2 = ({
  notifications,
  open,
  isLoading,
  filters,
  isAffiliate,
  isAdmin,
  handleClose,
  handleChangeFilter,
  handleDeductNotificationCount
}: {
  notifications: any;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  isLoading: boolean;
  filters: NotificationFilters;
  isAffiliate?: boolean;
  isAdmin?: boolean;
  handleClose: () => void;
  handleChangeFilter: (value: NotificationFilters) => void;
  handleDeductNotificationCount: () => void;
}) => {
  return (
    <>
      <Drawer
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
        <Box position="sticky" top={0} zIndex={1} sx={{ backgroundColor: '#1E0815' }}>
          <Box display="flex" alignItems="center" justifyContent="space-between" gap={1} py={1.5} pr={0.5} pl={2}>
            <UINewTypography variant="h3" color="white.main">
              Notifications
            </UINewTypography>
            <Box display="flex" alignItems="center" gap={0.5}>
              {/* do not remove this below comment... it's important... - 26/10/2023 */}
              {/* <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      onChange={(e) => handleChangeShowRead(e.target.checked)}
                    />
                  }
                  label={t("ShowRead")}
                  labelPlacement="start"
                  sx={{ m: 0, fontSize: "14px", whiteSpace: "nowrap" }}
                /> */}
              <IconButton onClick={handleClose} size="small" sx={{ color: 'white.main', width: '40px', height: '40px' }}>
                <CloseIcon sx={{ width: '21px', height: '21px' }} />
              </IconButton>
            </Box>
          </Box>
          <Divider />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}
        >
          <Box>
            {existNotifications?.length > 0 ? (
              existNotifications.map((notification, index) => (
                <NotificationItemV2
                  key={index}
                  notification={notification}
                  isAffiliate={isAffiliate}
                  isAdmin={isAdmin}
                  handleClickNotification={handleClickNotification}
                  handleClose={handleClose}
                />
              ))
            ) : (
              <Box display="flex" flexDirection="column" alignItems="center" gap={2} p={1.5}>
                <NotificationsNone />
                <Typography variant="bodySmall">{t(JSON_TYPES.MAIN_LAYOUT, 'YouHaveNoNotification')}</Typography>
              </Box>
            )}
            {notifications?.data?.page < Math.ceil(notifications?.data?.totalRecords / notifications?.data?.size) && (
              <Box p={1.5}>
                <UIThemeButton
                  variant="contained"
                  fullWidth
                  size="small"
                  loading={isLoading}
                  onClick={handleLoadMoreNotifications}
                  sx={{ p: 1 }}
                >
                  <UINewTypography variant="buttonLargeBold">{t(JSON_TYPES.MAIN_LAYOUT, 'MoreButton')}</UINewTypography>
                </UIThemeButton>
              </Box>
            )}
          </Box>
          {existNotifications?.length > 0 && (
            <Box>
              <NotificationContainer>
                <UIThemeButton variant="text" onClick={handleReadAllNotificationsClick}>
                  <UINewTypography variant="buttonSmallBold">{t(JSON_TYPES.MAIN_LAYOUT, 'MarkAllAsRead')}</UINewTypography>
                </UIThemeButton>
              </NotificationContainer>
            </Box>
          )}
        </Box>
      </Drawer>
      <NotificationMoreMenu
        open={openNotificationMore}
        anchorEl={anchorElNotificationMore}
        isAffiliate={isAffiliate}
        isAdmin={isAdmin}
        handleClose={handleCloseNotificationMore}
        handleClickReadAndClearAllNotifications={handleClickReadAndClearAllNotifications}
      />
    </>
  );
};

export default NotificationModalV2;
