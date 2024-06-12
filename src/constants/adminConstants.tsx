import CampaignIcon from '@mui/icons-material/Campaign';
import LineAxis from '@mui/icons-material/LineAxis';
import EuroIcon from '@mui/icons-material/Euro';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

export const AdminConstantsTabs = [
  {
    name: 'Dashboard',
    path: '/admin',
    icon: <LineAxis />
  },
  {
    name: 'Model',
    path: '/admin/model',
    icon: <CampaignIcon />,
    submenu: [
      {
        id: 0,
        title: 'Campaign Logs Report',
        path: '',
        icon: <EuroIcon />
      },
      {
        id: 0,
        title: 'Visitor Spent Logs Report',
        path: '',
        icon: <SupervisorAccountIcon />
      }
    ]
  },
  {
    name: 'Payout',
    path: '/admin/payout',
    icon: <LineAxis />
  }
];
