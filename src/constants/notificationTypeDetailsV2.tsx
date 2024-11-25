import { BoxIconNotification } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/Notification.styled';
import { NotificationTypeDetailsTypeV2 } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/typeV2';

export const NotificationTypeDetailsV2: NotificationTypeDetailsTypeV2 = {
  Credits_Credited: {
    icon: <BoxIconNotification src="/images/notification/credits_credited.png" alt="credits_credited" />,
    href: '/profile/billing',
    isReadMore: false
  },
  Password_Updated: {
    icon: <BoxIconNotification src="/images/notification/password.png" alt="password" />,
    href: '/profile',
    isReadMore: true
  },
  Missed_Call: {
    icon: <BoxIconNotification src="/images/notification/missed_call.png" alt="missed_call" />,
    href: '/profile/call',
    isReadMore: false
  },
  Credits_Redeemed: {
    icon: <BoxIconNotification src="/images/notification/redeem.png" alt="redeem" />,
    href: '/profile/billing',
    isReadMore: true
  },
  Payout_Requested: {
    icon: <BoxIconNotification src="/images/notification/payout.png" alt="payout" />,
    href: '',
    isReadMore: true
  },
  Credits_Deducted: {
    icon: <BoxIconNotification src="/images/notification/Credits_deducted.png" alt="Credits_deducted" />,
    href: '/profile/billing',
    isReadMore: true
  },
  Payout_Approved: {
    icon: <BoxIconNotification src="/images/notification/Payout_Approved.png" alt="Payout_Approved" />,
    href: '',
    isReadMore: true
  },
  Profile_Approved: {
    icon: <BoxIconNotification src="/images/notification/profile_approved.png" alt="profile_approved" />,
    href: '',
    isReadMore: true
  },
  Verify_For_Free_Credits: {
    icon: <BoxIconNotification src="/images/header/coin.png" alt="coin" />,
    href: '/profile',
    isReadMore: true
  }
};
