import CampaignIcon from '@mui/icons-material/Campaign';
import LineAxis from '@mui/icons-material/LineAxis';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';

export const getNavConfig = (id?: number) => {
  const navConfig = [
    {
      title: 'Dashboard',
      path: '/admin',
      icon: <LineAxis />
    },
    {
      title: 'Model',
      path: '/admin/model',
      icon: <CampaignIcon />
    },
    {
      title: 'Customer',
      path: '/admin/customer',
      icon: <PersonIcon />
    },
    {
      title: 'Payout',
      path: '/admin/payout',
      icon: <PaymentsIcon />
    },
    {
      title: 'Call Price',
      path: '/admin/call-price',
      icon: <PaidIcon />
    },
    {
      title: 'Call Logs',
      path: '/admin/call-logs',
      icon: <DuoIcon />
    }
  ];

  return navConfig.filter(Boolean);
};
