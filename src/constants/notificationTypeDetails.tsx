import { BoxIconNotification } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/Notification.styled';
import { NotificationTypeDetailsTypeAdmin } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/typeAdmin';

export const NotificationTypeDetailsAdmin: NotificationTypeDetailsTypeAdmin = {
  Credits_Credited: {
    bgColor: 'success.300',
    icon: <BoxIconNotification src="/images/notification/credits_credited.png" alt="credits_credited.png" />,
    href: '',
    isReadMore: false
  },
  Password_Updated: {
    bgColor: 'success.300',
    icon: <BoxIconNotification src="/images/notification/password.png" alt="password" />,
    href: '',
    isReadMore: true
  },
  Missed_Call: {
    bgColor: 'success.300',
    icon: <BoxIconNotification src="/images/notification/missed_call.png" alt="missed_call" />,
    href: '',
    isReadMore: false
  },
  Credits_Redeemed: {
    bgColor: 'success.300',
    icon: <BoxIconNotification src="/images/notification/redeem.png" alt="redeem" />,
    href: '',
    isReadMore: true
  }
};
