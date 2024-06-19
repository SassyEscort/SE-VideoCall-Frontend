import CampaignIcon from '@mui/icons-material/Campaign';
import LineAxis from '@mui/icons-material/LineAxis';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaidIcon from '@mui/icons-material/Paid';

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
      title: 'Payout',
      path: '/admin/payout',
      icon: <PaymentsIcon />
    },
    {
      title: 'Call Price',
      path: '/admin/model-commission',
      icon: <PaidIcon />
    }
  ];

  return navConfig.filter(Boolean);
};
