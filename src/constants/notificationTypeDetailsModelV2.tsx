import { BoxIconNotification } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/Notification.styled';
import { NotificationTypeDetailsTypeV2 } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/typeV2';

export const NotificationTypeDetailsModelV2: NotificationTypeDetailsTypeV2 = {
  Credits_Credited: {
    icon: <BoxIconNotification src="/images/notification/credits_credited.png" />,
    href: '/model/earnings',
    isReadMore: false
  },
  Password_Updated: {
    icon: <BoxIconNotification src="/images/notification/password.png" />,
    href: '',
    isReadMore: true
  },
  Missed_Call: {
    icon: <BoxIconNotification src="/images/notification/missed_call.png" />,
    href: '/model/dashboard',
    isReadMore: false
  },
  Credits_Redeemed: {
    icon: <BoxIconNotification src="/images/notification/redeem.png" />,
    href: '/model/earnings',
    isReadMore: true
  },
  Payout_Requested: {
    icon: <BoxIconNotification src="/images/notification/payout.png" />,
    href: '/model/payouts',
    isReadMore: true
  },
  Credits_Deducted: {
    icon: <BoxIconNotification src="/images/notification/Credits_deducted.png" />,
    href: '/model/earnings',
    isReadMore: true
  },
  Payout_Approved: {
    icon: <BoxIconNotification src="/images/notification/Payout_Approved.png" />,
    href: '/model/payouts',
    isReadMore: true
  },
  Profile_Approved: {
    icon: <BoxIconNotification src="/images/notification/profile_approved.png" />,
    href: '/model/dashboard',
    isReadMore: true
  },
  Payout_Rejected: {
    icon: <BoxIconNotification src="/images/notification/Payout_Rejected.png" />,
    href: '/model/payouts',
    isReadMore: true
  },
  Profile_Rejected: {
    icon: <BoxIconNotification src="/images/notification/profile_rejected.png" />,
    href: '/model/profile',
    isReadMore: true
  }
};
