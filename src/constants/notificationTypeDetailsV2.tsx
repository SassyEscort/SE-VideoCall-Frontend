import { BoxIconNotification } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/Notification.styled';
import { NotificationTypeDetailsTypeV2 } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/typeV2';

export const NotificationTypeDetailsV2: NotificationTypeDetailsTypeV2 = {
  Credits_Credited: {
    icon: <BoxIconNotification src="/images/notification/credits_credited.png" />,
    href: '/profile/billing',
    isReadMore: false
  },
  Password_Updated: {
    icon: <BoxIconNotification src="/images/notification/password.png" />,
    href: '/profile',
    isReadMore: true
  },
  Missed_Call: {
    icon: <BoxIconNotification src="/images/notification/missed_call.png" />,
    href: '/profile/call',
    isReadMore: false
  },
  Credits_Redeemed: {
    icon: <BoxIconNotification src="/images/notification/redeem.png" />,
    href: '/profile/billing',
    isReadMore: true
  },
  Payout_Requested: {
    icon: <BoxIconNotification src="/images/notification/payout.png" />,
    href: '',
    isReadMore: true
  },
  Credits_Deducted: {
    icon: <BoxIconNotification src="/images/notification/Credits_deducted.png" />,
    href: '/profile/billing',
    isReadMore: true
  },
  Payout_Approved: {
    icon: <BoxIconNotification src="/images/notification/Payout_Approved.png" />,
    href: '',
    isReadMore: true
  },
  Profile_Approved: {
    icon: <BoxIconNotification src="/images/notification/profile_approved.png" />,
    href: '',
    isReadMore: true
  }
};
