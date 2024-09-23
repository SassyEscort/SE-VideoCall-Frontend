/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getNavConfig } from './config';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import NavSection from 'components/Admin/nav-section';
import { navRoleConfigIdType, navRoleConfigSubmenuIdType } from 'components/Admin/nav-section/type';
import useResponsive from 'hooks/useResponsive';
import { Divider, ListItemText } from '@mui/material';
import { StyledNavItemIcon } from '../sidbar/nav.styled';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'next-auth/react';
import { toast } from 'react-toastify';

const NAV_WIDTH = 280;

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func
};

interface NavProps {
  openNav: boolean;
  onCloseNav: () => void;
}

export default function Nav({ openNav, onCloseNav }: NavProps) {
  const { pathname } = window.location;
  const isDesktop = useResponsive('up', 'lg', 'xs');

  const navConfig = getNavConfig() as unknown as (navRoleConfigIdType | navRoleConfigSubmenuIdType)[];

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const handleConfirmLogout = async () => {
    try {
      await signOut({ callbackUrl: '/admin/login' });
    } catch (error) {
      toast.error('Error during sign-out:');
    }
  };

  const renderContent = (
    <>
      <Box
        sx={{
          py: 3,
          display: 'inline-flex',
          textAlign: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <Box component="img" src="/images/header/headerlogo.png" alt="logo" width={180} />
      </Box>

      <Box sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <NavSection data={navConfig} />
        <Box>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: 3,
              cursor: 'pointer'
            }}
            onClick={handleConfirmLogout}
          >
            <StyledNavItemIcon>
              <LogoutIcon />
            </StyledNavItemIcon>

            <ListItemText sx={{ fontWeight: 600 }} disableTypography primary={'Logout'} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }} />
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH }
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed'
            }
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
