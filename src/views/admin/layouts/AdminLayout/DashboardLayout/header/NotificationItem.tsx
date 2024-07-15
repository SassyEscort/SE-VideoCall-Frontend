import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { formatFullDate } from 'utils/dateAndTime';
import { NotificationDetailsService } from 'services/notification/notification.services';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { Notification } from 'services/notification/type';
import { NotificationTypeDetailsAdmin } from 'constants/notificationTypeDetails';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ButtonBaseContainerAvatar, FiberManualRecordBox, MainBox, TypographyBox } from './AccountPopover.styled';

const NotificationItem = ({
  notification,
  handleClickNotification,
  handleClose,
  handleCallback,
  token
}: {
  notification: Notification;
  handleClickNotification: (index: number) => void;
  handleCallback: () => void;
  handleClose: () => void;
  token: TokenIdType;
}) => {
  const notificationType = NotificationTypeDetailsAdmin[notification?.category];
  const notificationBgColor = notificationType?.bgColor;

  const handleClickNotificationItem = () => {
    handleClickNotification(notification.id);
    handleClose();
    handleCallback();
  };

  const handleNotificationClick = async () => {
    try {
      const data = await NotificationDetailsService.notificationDetailsEdit(token.token, notification.id);
      if (data?.code === 200) {
        handleClickNotificationItem();
      } else {
        toast.error(ErrorMessage);
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  return (
    <>
      <ButtonBase LinkComponent={Link} href={notificationType?.href} onClick={handleNotificationClick} sx={{ width: '100%' }}>
        <MainBox>
          {notification.is_active === false && <FiberManualRecordBox color="primary" />}
          <ButtonBaseContainerAvatar notificationBgColor={notificationBgColor}>{notificationType?.icon}</ButtonBaseContainerAvatar>
          <TypographyBox>
            <Typography variant="bodyLight" color="secondary.dark" textAlign="start" className="ellipsis-2" whiteSpace="pre-line">
              {notification.message}{' '}
            </Typography>
            <Typography variant="captionLarge" color="secondary.800">
              {formatFullDate(notification.created_at)}
            </Typography>
          </TypographyBox>
        </MainBox>
      </ButtonBase>
      <Divider />
    </>
  );
};

export default NotificationItem;
