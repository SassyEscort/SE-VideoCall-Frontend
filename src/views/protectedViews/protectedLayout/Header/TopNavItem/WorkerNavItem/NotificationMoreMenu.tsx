import Delete from "@mui/icons-material/Delete";
import MarkChatRead from "@mui/icons-material/MarkChatRead";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import usePutNotificationClearAll from "@/services/hooks/Notifications/usePutNotificationClearAll";
import usePutNotificationReadAll from "@/services/hooks/Notifications/usePutNotificationReadAll";
import { JSON_TYPES } from "@/constants/jsonConstants";

import usePutAffiliateNotificationClearAll from "@/services/hooks/Affiliate/Notifications/usePutAffiliateNotificationClearAll";
import usePutAffiliateNotificationReadAll from "@/services/hooks/Affiliate/Notifications/usePutAffiliateNotificationReadAll";
import usePutAdminNotificationClearAll from "@/services/admin/hooks/AdminNotifications/usePutAdminNotificationClearAll";
import usePutAdminNotificationReadAll from "@/services/admin/hooks/AdminNotifications/usePutAdminNotificationReadAll";
import { useLanguageContext } from "../../../../../../context/LanguageContext";

const NotificationMoreMenu = ({
  open,
  anchorEl,
  isAffiliate,
  isAdmin,
  handleClose,
  handleClickReadAndClearAllNotifications,
}: {
  open: boolean;
  anchorEl: null | HTMLElement;
  isAffiliate?: boolean;
  isAdmin?: boolean;
  handleClose: () => void;
  handleClickReadAndClearAllNotifications: () => void;
}) => {
  const { t } = useLanguageContext();

  const mutationNotificationClearAll = usePutNotificationClearAll();
  const mutationNotificationReadAll = usePutNotificationReadAll();
  const mutationAffiliateNotificationClearAll =
    usePutAffiliateNotificationClearAll();
  const mutationAffiliateNotificationReadAll =
    usePutAffiliateNotificationReadAll();
  const mutationAdminNotificationClearAll = usePutAdminNotificationClearAll();
  const mutationAdminNotificationReadAll = usePutAdminNotificationReadAll();

  const handleClickNotification = () => {
    handleClickReadAndClearAllNotifications();
    handleClose();
  };

  const handleClearAllNotificationsClick = () => {
    if (isAffiliate)
      mutationAffiliateNotificationClearAll.mutate(undefined, {
        onSuccess: (res) => {
          if (res.success) {
            handleClickNotification();
          }
        },
      });
    else if (isAdmin)
      mutationAdminNotificationClearAll.mutate(undefined, {
        onSuccess: (res) => {
          if (res.success) {
            handleClickNotification();
          }
        },
      });
    else
      mutationNotificationClearAll.mutate(undefined, {
        onSuccess: (res) => {
          if (res.success) {
            handleClickNotification();
          }
        },
      });
  };

  const handleReadAllNotificationsClick = () => {
    if (isAffiliate)
      mutationAffiliateNotificationReadAll.mutate(undefined, {
        onSuccess: (res) => {
          if (res.success) {
            handleClickNotification();
          }
        },
      });
    else if (isAdmin)
      mutationAdminNotificationReadAll.mutate(undefined, {
        onSuccess: (res) => {
          if (res.success) {
            handleClickNotification();
          }
        },
      });
    else
      mutationNotificationReadAll.mutate(undefined, {
        onSuccess: (res) => {
          if (res.success) {
            handleClickNotification();
          }
        },
      });
  };

  return (
    <Menu
      anchorEl={anchorEl}
      id="notification-more-menu"
      open={open}
      onClick={handleClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Box
        py="7px"
        sx={{
          width: "100%",
          minWidth: "130px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          "& .MuiMenuItem-root ": { width: "100%" },
        }}
      >
        <MenuItem onClick={handleReadAllNotificationsClick}>
          <ListItemIcon>
            <MarkChatRead sx={{ color: "primary.main" }} />
          </ListItemIcon>
          <ListItemText>
            {t(JSON_TYPES.MAIN_LAYOUT, "MarkAllAsRead")}
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClearAllNotificationsClick}>
          <ListItemIcon>
            <Delete sx={{ color: "primary.main" }} />
          </ListItemIcon>
          <ListItemText>{t(JSON_TYPES.MAIN_LAYOUT, "ClearAll")}</ListItemText>
        </MenuItem>
      </Box>
    </Menu>
  );
};

export default NotificationMoreMenu;
