import Box from '@mui/material/Box';
import { NotificationTypeDetailsTypeV2 } from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/typeV2';

export const NotificationTypeDetailsModelV2: NotificationTypeDetailsTypeV2 = {
  Credits_Credited: {
    icon: <Box component="img" src="/images/notification/credits_credited.png" sx={{ width: '30px', height: '25px' }} />,
    href: '',
    isReadMore: false
  },
  Password_Updated: {
    icon: <Box component="img" src="/images/notification/password.png" sx={{ width: '30px', height: '25px' }} />,
    href: '',
    isReadMore: true
  },
  Missed_Call: {
    icon: <Box component="img" src="/images/notification/missed_call.png" sx={{ width: '30px', height: '25px' }} />,
    href: '',
    isReadMore: false
  },
  Credits_Redeemed: {
    icon: <Box component="img" src="/images/notification/redeem.png" sx={{ width: '30px', height: '25px' }} />,
    href: '',
    isReadMore: true
  }
};
