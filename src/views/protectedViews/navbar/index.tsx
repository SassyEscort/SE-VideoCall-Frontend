import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Navbar from './Navbar';
import useResponsive from 'hooks/useResponsive';
import { usePathname } from 'next/navigation';

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func
};

interface NavProps {
  openNav: boolean;
  onCloseNav: () => void;
}

export default function Nav({ openNav, onCloseNav }: NavProps) {
  const router = usePathname();

  const isDesktop = useResponsive('up', 'md', 'xs');

  const maindashboardTabIndex: { [key: string]: number } = {
    dashboard: 1,
    profile: 2,
    favourites: 3,
    Call: 4,
    credit: 5,
    billing: 6,
    logout: 7
  };

  const modifiedPath = router.split('/profile').join('').split('/').join('');

  const tabIndex = maindashboardTabIndex[modifiedPath] || -1;

  return (
    <Box component="nav" sx={{ flexShrink: { lg: 0 } }}>
      <Drawer
        variant={isDesktop ? 'permanent' : 'temporary'}
        open={isDesktop ? true : openNav}
        onClose={onCloseNav}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            border: 'none',
            backgroundColor: 'transparent',
            width: 299,
            position: 'static'
          }
        }}
        sx={{ height: '100%', width: 299 }}
      >
        <Navbar tabIndex={tabIndex} />
      </Drawer>
    </Box>
  );
}
