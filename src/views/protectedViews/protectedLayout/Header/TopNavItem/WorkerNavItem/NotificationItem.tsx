import FiberManualRecord from "@mui/icons-material/FiberManualRecord";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { NotificationTypeDetails } from "@/constants/notificationTypeDetails";
import usePutNotificationRead from "@/services/hooks/Notifications/usePutNotificationRead";
import { WorkerNotification } from "@/types/api/notifications/GetAllNotifications";
import { formatFullDate } from "@/utils/dateTimeUtils";

import { JSON_TYPES } from "@/constants/jsonConstants";
import usePutAffiliateNotificationRead from "@/services/hooks/Affiliate/Notifications/usePutAffiliateNotificationRead";
import usePutAdminNotificationRead from "@/services/admin/hooks/AdminNotifications/usePutAdminNotificationRead";
import { useLanguageContext } from "../../../../../../context/LanguageContext";

const NotificationItem = ({
  notification,
  isAffiliate,
  isAdmin,
  handleClickNotification,
  handleClose,
}: {
  notification: WorkerNotification;
  isAffiliate?: boolean;
  isAdmin?: boolean;
  handleClickNotification: (index: number) => void;
  handleClose: () => void;
}) => {
  const { t } = useLanguageContext();

  const notificationType = NotificationTypeDetails[notification.type];
  const mutationNotificationRead = usePutNotificationRead();
  const mutationAffiliateNotifocationRead = usePutAffiliateNotificationRead();
  const mutationAdminNotifocationRead = usePutAdminNotificationRead();

  const handleClickNotificationItem = () => {
    handleClickNotification(notification.id);
    handleClose();
  };

  const handleNotificationClick = () => {
    if (isAffiliate)
      mutationAffiliateNotifocationRead.mutate(
        {
          notificationId: notification.id,
        },
        {
          onSuccess: (res) => {
            if (res.success) {
              handleClickNotificationItem();
            }
          },
        }
      );
    else if (isAdmin)
      mutationAdminNotifocationRead.mutate(
        {
          notificationId: notification.id,
        },
        {
          onSuccess: (res) => {
            if (res.success) {
              handleClickNotificationItem();
            }
          },
        }
      );
    else
      mutationNotificationRead.mutate(
        {
          notificationId: notification.id,
        },
        {
          onSuccess: (res) => {
            if (res.success) {
              handleClickNotificationItem();
            }
          },
        }
      );
  };

  return (
    <>
      <ButtonBase
        LinkComponent={Link}
        href={notificationType?.href}
        onClick={handleNotificationClick}
        sx={{ width: "100%" }}
      >
        <Box
          display="flex"
          gap={1}
          alignItems="flex-start"
          p={1}
          pl={2}
          position="relative"
          width="100%"
        >
          {notification.isRead === "false" && (
            <FiberManualRecord
              sx={{ width: 10, height: 32, position: "absolute", left: 4 }}
              color="primary"
            />
          )}
          <Avatar
            sx={{
              backgroundColor: notificationType?.bgColor,
              height: 32,
              width: 32,
            }}
          >
            {notificationType?.icon}
          </Avatar>
          <Box
            display="flex"
            flexDirection="column"
            gap={0.5}
            alignItems="start"
          >
            <Typography
              variant="bodyLight"
              color="secondary.dark"
              textAlign="start"
              className="ellipsis-2"
              whiteSpace="pre-line"
            >
              {notification.text}{" "}
              {notificationType?.isReadMore && (
                <Typography variant="body" color="primary.main">
                  {t(JSON_TYPES.MAIN_LAYOUT, "ReadMore")}
                </Typography>
              )}
              {/* {notification.text.split("\\n").join("\n")} */}
            </Typography>
            <Typography variant="captionLarge" color="secondary.800">
              {formatFullDate(notification.createdDate)}
            </Typography>
          </Box>
        </Box>
      </ButtonBase>
      <Divider />
    </>
  );
};

export default NotificationItem;
