import WorkerNavItem from './TopNavItem/WorkerNavItem';
import { TopNavItemVariantProps } from './types';

const Header = <V extends TopNavItemVariantProps>(props: V) => {
  const { variant } = props;
  switch (variant) {
    case 'worker':
      return <WorkerNavItem />;
    default:
      return <></>;
  }
};

export default Header;
