import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { Notification } from 'services/notification/type';
import { getLastActive } from 'utils/dateAndTime';
import { NotificationDetailsService } from 'services/notification/notification.services';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { BaseContainer, ButtonBaseContainer, MainBox, TypographyBox, TypographyBox2, TypographyCreate } from './Notification.styled';
import { NotificationTypeDetailsModelV2 } from 'constants/notificationTypeDetailsModelV2';
import { useIntl } from 'react-intl';

const NotificationItemV2 = ({
  notification,
  token,
  handleClickNotification,
  handleClose,
  handleCallback
}: {
  notification: Notification;
  token: TokenIdType;
  handleClickNotification: (index: number) => void;
  handleClose: () => void;
  handleCallback: () => void;
}) => {
  const intl = useIntl();

  const notificationTypeV2 = NotificationTypeDetailsModelV2[notification?.category];

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

  const notificationIsRead = !notification?.is_active;

  return (
    <>
      <ButtonBase onClick={handleNotificationClick} LinkComponent={Link} href={notificationTypeV2?.href} sx={{ width: '100%' }}>
        <ButtonBaseContainer notificationIsRead={notificationIsRead}>
          <BaseContainer>{notificationTypeV2?.icon}</BaseContainer>
          <MainBox>
            <TypographyBox>
              <UINewTypography
                variant="bodySemiBold"
                color={notificationIsRead ? 'text.primary' : 'text.secondary'}
                sx={{ display: 'flex', justifyContent: 'flex-start' }}
              >
                {notification?.title}
              </UINewTypography>
              <UINewTypography variant="SubtitleSmallRegular" textAlign="start" color="text.primary">
                {notification?.message}
              </UINewTypography>
            </TypographyBox>
            <TypographyBox2>
              <TypographyCreate>{getLastActive(notification.created_at, intl)}</TypographyCreate>
              <Box>{notificationIsRead ? '' : <Box component="img" src="/images/notification/unread_dot.svg" alt="unread_dot" />}</Box>
            </TypographyBox2>
          </MainBox>
        </ButtonBaseContainer>
      </ButtonBase>
      <Divider />
    </>
  );
};

export default NotificationItemV2;
