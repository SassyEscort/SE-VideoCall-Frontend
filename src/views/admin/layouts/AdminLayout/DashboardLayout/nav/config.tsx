import CampaignIcon from '@mui/icons-material/Campaign';
import LineAxis from '@mui/icons-material/LineAxis';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import EuroIcon from '@mui/icons-material/Euro';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { AdminUserPermissions } from 'contexts/AuthContext';

export const getNavConfig = (adminUserPermissions: AdminUserPermissions[] | undefined, isAdmin: boolean, id?: number) => {
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
      title: 'Banned Customers',
      path: '/admin/ban-customer',
      icon: <RemoveCircleIcon />
    },
    {
      title: 'Packages',
      path: '/admin/packages',
      icon: <EuroIcon />
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
    },
    {
      title: 'Boost',
      path: '/admin/boost',
      icon: <LocalFireDepartmentIcon />
    },
    {
      title: 'SEO',
      path: '/admin/seo',
      icon: <PostAddIcon />
    },
    {
      title: 'Setting',
      path: '/admin/setting',
      icon: <SettingsIcon />
    },
    {
      title: 'Admin Users',
      path: '/admin/users',
      icon: <GroupIcon />
    }
  ];

  const filteredNavConfig = navConfig.filter(
    (item) =>
      adminUserPermissions?.some(
        (permission) =>
          (permission.module_name.toLowerCase() === item.title.toLowerCase() &&
            (permission.permission === 'Read' || permission.permission === 'Update')) ||
          item.title === 'Dashboard'
      )
  );

  return isAdmin ? navConfig.filter(Boolean) : filteredNavConfig.filter(Boolean);
};
