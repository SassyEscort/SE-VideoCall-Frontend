import DashboardNavItem from 'views/protectedDashboardViews/dashboardNavItem';
import WorkerNavItem from './TopNavItem/WorkerNavItem';
import { TopNavItemVariantProps } from './types';

const Header = <V extends TopNavItemVariantProps>(props: V) => {
  const { variant } = props;
  switch (variant) {
    case 'worker':
      return <WorkerNavItem />;
    case 'dashboard':
      return <DashboardNavItem />;
    default:
      return <></>;
  }
};

export default Header;
