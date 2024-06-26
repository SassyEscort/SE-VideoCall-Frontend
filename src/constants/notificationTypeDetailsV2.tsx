import Box from '@mui/material/Box';
import { NotificationTypeDetailsTypeV2 } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/typeV2';
import LockIcon from '@mui/icons-material/Lock';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';

export const NotificationTypeDetailsV2: NotificationTypeDetailsTypeV2 = {
  Credits_Credited: {
    icon: <Box component="img" src="/images/notification/coin.png" />,
    href: '',
    isReadMore: false
  },
  Password_Updated: {
    icon: <LockIcon sx={{ color: '#EDED00' }} />,
    href: '',
    isReadMore: true
  },
  Missed_Call: {
    icon: <PhoneMissedIcon sx={{ color: '#FF7F7F' }} />,
    href: '',
    isReadMore: false
  },
  Credits_Redeemed: {
    icon: <Box component="img" src="/images/notification/coin.png" />,
    href: '',
    isReadMore: true
  }
};
