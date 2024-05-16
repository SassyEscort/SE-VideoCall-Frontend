import MoreVert from "@mui/icons-material/MoreVert";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState, MouseEvent, useEffect } from "react";
import NotificationMoreMenu from "./NotificationMoreMenu";
import NotificationItem from "./NotificationItem";
import {
  GetAllNotificationsResponse,
  WorkerNotification,
} from "@/types/api/notifications/GetAllNotifications";
import StyleButton from "@/components/UIComponents/StyleLoadingButton";
import { NotificationFilters } from "./HeaderAuthComponent";

import { JSON_TYPES } from "@/constants/jsonConstants";
import { useLanguageContext } from "../../../../../../context/LanguageContext";

const NotificationModal = ({
  notifications,
  open,
  anchorEl,
  isLoading,
  filters,
  isAffiliate,
  isAdmin,
  handleClose,
  handleChangeFilter,
  handleDeductNotificationCount,
}: {
  notifications: GetAllNotificationsResponse;
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
  const { t } = useLanguageContext();

  const [openNotificationMore, setOpenNotificationMore] = useState(false);
  const [anchorElNotificationMore, setAnchorElNotificationMore] =
    useState<null | HTMLElement>(null);
  const [existNotifications, setExistNotifications] = useState<
    WorkerNotification[]
  >([]);

  const handleOpenNotificationMore = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNotificationMore(event.currentTarget);
    setOpenNotificationMore(true);
  };

  const handleCloseNotificationMore = () => {
    setAnchorElNotificationMore(null);
    setOpenNotificationMore(false);
  };

  const handleLoadMoreNotifications = () => {
    const filter = {
      ...filters,
      page: filters.page + 1,
    };

    handleChangeFilter(filter);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChangeShowRead = (value: boolean) => {
    const filter = {
      page: 1,
      isRead: value ? 0 : undefined,
    };

    handleChangeFilter(filter);
  };

  const handleClickNotification = (id: number) => {
    const notificationData = [...existNotifications];
    const index = notificationData.findIndex((x) => x.id === id);
    if (
      index >= 0 &&
      notificationData?.length &&
      notificationData[index] &&
      notificationData[index].isRead === "false"
    ) {
      notificationData[index].isRead = "true";
      setExistNotifications(notificationData);
      handleDeductNotificationCount();
    }
  };

  const handleClickReadAndClearAllNotifications = () => {
    const filter = {
      ...filters,
      page: 1,
    };

    handleChangeFilter(filter);
  };

  useEffect(() => {
    if (filters.page === 1) {
      setExistNotifications(notifications?.data?.workerNotificationList);
    } else {
      setExistNotifications([
        ...existNotifications,
        ...notifications.data.workerNotificationList,
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifications]);

  return (
    <>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          "& .MuiPaper-root": {
            maxWidth: { xs: 288, sm: 360 },
            width: "100%",
            maxHeight: "calc(100vh - 100px)",
          },
        }}
      >
        <Box
          position="sticky"
          top={0}
          zIndex={1}
          sx={{ backgroundColor: "white.main" }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={1}
            py={1.5}
            pr={0.5}
            pl={2}
          >
            <Typography variant="bodyBold" color="secondary.dark">
              {t(JSON_TYPES.MAIN_LAYOUT, "Notifications")}
            </Typography>
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
              <IconButton onClick={handleOpenNotificationMore} size="small">
                <MoreVert />
              </IconButton>
            </Box>
          </Box>
          <Divider />
        </Box>
        {existNotifications?.length > 0 ? (
          existNotifications.map((notification, index) => (
            <NotificationItem
              key={index}
              notification={notification}
              isAffiliate={isAffiliate}
              isAdmin={isAdmin}
              handleClickNotification={handleClickNotification}
              handleClose={handleClose}
            />
          ))
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            p={1.5}
          >
            <NotificationsNone />
            <Typography variant="bodySmall">
              {t(JSON_TYPES.MAIN_LAYOUT, "YouHaveNoNotification")}
            </Typography>
          </Box>
        )}
        {notifications?.data?.page <
          Math.ceil(
            notifications?.data?.totalRecords / notifications?.data?.size
          ) && (
          <Box p={1.5}>
            <StyleButton
              variant="contained"
              fullWidth
              size="small"
              loading={isLoading}
              onClick={handleLoadMoreNotifications}
              sx={{ p: 1 }}
            >
              <Typography>{t(JSON_TYPES.MAIN_LAYOUT, "MoreButton")}</Typography>
            </StyleButton>
          </Box>
        )}
      </Popover>
      <NotificationMoreMenu
        open={openNotificationMore}
        anchorEl={anchorElNotificationMore}
        isAffiliate={isAffiliate}
        isAdmin={isAdmin}
        handleClose={handleCloseNotificationMore}
        handleClickReadAndClearAllNotifications={
          handleClickReadAndClearAllNotifications
        }
      />
    </>
  );
};

export default NotificationModal;
