import { BoxIconNotification } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/Notification.styled';
import { NotificationTypeDetailsTypeV2 } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/typeV2';

export const NotificationTypeDetailsModelV2: NotificationTypeDetailsTypeV2 = {
  Credits_Credited: {
    icon: <BoxIconNotification src="/images/notification/credits_credited.png" alt="credits_credited" />,
    href: '/model/earnings',
    isReadMore: false
  },
  Password_Updated: {
    icon: <BoxIconNotification src="/images/notification/password.png" alt="password" />,
    href: '',
    isReadMore: true
  },
  Missed_Call: {
    icon: <BoxIconNotification src="/images/notification/missed_call.png" alt="missed_call" />,
    href: '/model/dashboard',
    isReadMore: false
  },
  Credits_Redeemed: {
    icon: <BoxIconNotification src="/images/notification/redeem.png" alt="redeem" />,
    href: '/model/earnings',
    isReadMore: true
  },
  Payout_Requested: {
    icon: <BoxIconNotification src="/images/notification/payout.png" alt="payout" />,
    href: '/model/payouts',
    isReadMore: true
  },
  Credits_Deducted: {
    icon: <BoxIconNotification src="/images/notification/Credits_deducted.png" alt="Credits_deducted" />,
    href: '/model/earnings',
    isReadMore: true
  },
  Payout_Approved: {
    icon: <BoxIconNotification src="/images/notification/Payout_Approved.png" alt="Payout_Approved" />,
    href: '/model/payouts',
    isReadMore: true
  },
  Profile_Approved: {
    icon: <BoxIconNotification src="/images/notification/profile_approved.png" alt="profile_approved" />,
    href: '/model/dashboard',
    isReadMore: true
  },
  Payout_Rejected: {
    icon: <BoxIconNotification src="/images/notification/Payout_Rejected.png" alt="Payout_Rejected" />,
    href: '/model/payouts',
    isReadMore: true
  },
  Profile_Rejected: {
    icon: <BoxIconNotification src="/images/notification/profile_rejected.png" alt="profile_rejected" />,
    href: '/model/profile',
    isReadMore: true
  }
};
