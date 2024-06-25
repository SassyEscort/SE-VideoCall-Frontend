import Box from '@mui/material/Box';
import { NotificationTypeDetailsTypeV2 } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/typeV2';
import LockIcon from '@mui/icons-material/Lock';

export const NotificationTypeDetailsV2: NotificationTypeDetailsTypeV2 = {
  Credits_Credited: {
    icon: <Box component="img" src="/images/notification/coin.png" />,
    href: '',
    isReadMore: false
  },
  Password_Updated: {
    icon: <LockIcon sx={{ color: 'yellow' }} />,
    href: '',
    isReadMore: true
  },
  Missed_Call: {
    icon: <Box component="img" src="/images/NewThemeImages/icons/credit-icon-noti.svg" />,
    href: '',
    isReadMore: false
  },
  Credits_Redeemed: {
    icon: <Box component="img" src="/images/NewThemeImages/icons/gold-icon-noti.svg" />,
    href: '',
    isReadMore: true
  }
};
