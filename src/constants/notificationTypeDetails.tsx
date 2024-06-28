import { BoxIconNotification } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/Notification.styled';
import { NotificationTypeDetailsTypeAdmin } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/typeAdmin';

export const NotificationTypeDetailsAdmin: NotificationTypeDetailsTypeAdmin = {
  Credits_Credited: {
    bgColor: 'success.300',
    icon: <BoxIconNotification src="/images/notification/credits_credited.png" />,
    href: '',
    isReadMore: false
  },
  Password_Updated: {
    bgColor: 'success.300',
    icon: <BoxIconNotification src="/images/notification/password.png" />,
    href: '',
    isReadMore: true
  },
  Missed_Call: {
    bgColor: 'success.300',
    icon: <BoxIconNotification src="/images/notification/missed_call.png" />,
    href: '',
    isReadMore: false
  },
  Credits_Redeemed: {
    bgColor: 'success.300',
    icon: <BoxIconNotification src="/images/notification/redeem.png" />,
    href: '',
    isReadMore: true
  }
};
