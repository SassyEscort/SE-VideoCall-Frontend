/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { getNavConfig } from './config';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavSection from 'components/Admin/nav-section';
import { navRoleConfigIdType, navRoleConfigSubmenuIdType } from 'components/Admin/nav-section/type';
import useResponsive from 'hooks/useResponsive';
import { useSession } from 'next-auth/react';

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12)
}));

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

  const adminAuth = useSession();

  const navConfig = getNavConfig() as unknown as (navRoleConfigIdType | navRoleConfigSubmenuIdType)[];

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

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

      <Box sx={{ mb: 2, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src="/images/admin/avatar.jpg" alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary', textTransform: 'capitalize' }}>
                {adminAuth.data?.user?.name}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {adminAuth.data?.user?.email}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <NavSection data={navConfig} />

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
