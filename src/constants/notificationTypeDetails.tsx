import Box from '@mui/material/Box';
import { NotificationTypeDetailsTypeAdmin } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/typeAdmin';

export const NotificationTypeDetailsAdmin: NotificationTypeDetailsTypeAdmin = {
  Credits_Credited: {
    bgColor: 'success.300',
    icon: <Box component="img" src="/images/notification/credits_credited.png" sx={{ width: '30px', height: '25px' }} />,
    href: '',
    isReadMore: false
  },
  Password_Updated: {
    bgColor: 'success.300',
    icon: <Box component="img" src="/images/notification/password.png" sx={{ width: '30px', height: '25px' }} />,
    href: '',
    isReadMore: true
  },
  Missed_Call: {
    bgColor: 'success.300',
    icon: <Box component="img" src="/images/notification/missed_call.png" sx={{ width: '30px', height: '25px' }} />,
    href: '',
    isReadMore: false
  },
  Credits_Redeemed: {
    bgColor: 'success.300',
    icon: <Box component="img" src="/images/notification/redeem.png" sx={{ width: '30px', height: '25px' }} />,
    href: '',
    isReadMore: true
  }
};
