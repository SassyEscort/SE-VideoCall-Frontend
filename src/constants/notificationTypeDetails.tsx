import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import { NotificationTypeDetailsTypeAdmin } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/typeAdmin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';

export const NotificationTypeDetailsAdmin: NotificationTypeDetailsTypeAdmin = {
  Credits_Credited: {
    bgColor: 'success.300',
    icon: <Box component="img" src="/images/notification/coin.png" />,
    href: '',
    isReadMore: false
  },
  Password_Updated: {
    bgColor: 'success.300',
    icon: <LockIcon sx={{ color: '#EDED00' }} />,
    href: '',
    isReadMore: true
  },
  Missed_Call: {
    bgColor: 'success.300',
    icon: <PhoneMissedIcon sx={{ color: '#FF7F7F' }} />,
    href: '',
    isReadMore: false
  },
  Credits_Redeemed: {
    bgColor: 'success.300',
    icon: <Box component="img" src="/images/notification/coin.png" />,
    href: '',
    isReadMore: true
  }
};
