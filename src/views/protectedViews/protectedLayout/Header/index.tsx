import CloseButtonNavItem from './TopNavItem/CloseButtonNavItem';
import GuestNavItem from './TopNavItem/GuestNavItem';
import WorkerNavItem from './TopNavItem/WorkerNavItem';
// import WorkerNavItem from './TopNavItem/WorkerNavItem';
import { TopNavItemVariantProps } from './types';

const Header = <V extends TopNavItemVariantProps>(props: V) => {
  const { variant } = props;
  switch (variant) {
    case 'guest':
      return <GuestNavItem />;
    case 'worker':
      return <WorkerNavItem />;
    case 'closeButton':
      return <CloseButtonNavItem handleClickClose={props.handleClickClose} />;
    default:
      return <></>;
  }
};

export default Header;
