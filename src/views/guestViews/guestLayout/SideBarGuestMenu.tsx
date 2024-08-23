import Image from 'next/image';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { GuestStyleComponent, IconSideBar, SideBarBox } from './GuestLayout.styled';
import GuestSignup from 'views/auth/guestSignup';
import GuestForgetPasswordLink from 'views/auth/guestForgetPasswordLink';
import { useState } from 'react';
import Link from 'next/link';
import UINewTypography from 'components/UIComponents/UINewTypography';

const SideBarGuestMenu = ({ open, toggleDrawer }: { open: boolean; toggleDrawer: (open: boolean) => void }) => {
  const [openSignup, setIsSignupOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);

  const handleSignupOpen = () => {
    setIsSignupOpen(true);
    setIsOpenLogin(false);
  };

  const handleSignupClose = () => {
    setIsSignupOpen(false);
  };

  const handleLoginOpen = () => {
    setIsSignupOpen(false);
    setIsOpenLogin(true);
  };

  const handleLoginResetPasswordOpen = () => {
    setOpenForgetPassLink(false);
    setIsOpenLogin(true);
  };

  const handleLoginClose = () => {
    setIsOpenLogin(false);
  };

  const handleResetPasswordLinkClose = () => {
    setOpenForgetPassLink(false);
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 284 }}>
        <IconSideBar onClick={() => toggleDrawer(false)}>
          <Image priority height={40} width={40} src="/images/header/closeLine.svg" alt="closeLine" />
        </IconSideBar>
        <Box display="flex" gap={3} flexDirection="column">
          <SideBarBox>
            <MenuItem>
              <Link href="/model">
                <UINewTypography variant="bodySemiBold" color="text.secondary">
                  Register as Model
                </UINewTypography>
              </Link>
            </MenuItem>
            <Divider orientation="horizontal" flexItem sx={{ borderColor: 'secondary.800', mr: '23px', ml: '23px' }} />
            <MenuItem>
              <ListItemIcon>
                <Image priority src="/images/header/loginCircle.svg" width={20} height={20} alt="login" />
              </ListItemIcon>
              <ListItemText>
                <UINewTypography variant="bodySemiBold" color="text.secondary" onClick={handleLoginOpen}>
                  Login
                </UINewTypography>
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Image priority src="/images/header/userLine.svg" width={20} height={20} alt="sign_up" />
              </ListItemIcon>
              <ListItemText>
                <UINewTypography variant="bodySemiBold" color="text.secondary" onClick={handleSignupOpen}>
                  Signup
                </UINewTypography>
              </ListItemText>
            </MenuItem>
          </SideBarBox>
        </Box>
      </Box>
      <GuestStyleComponent scroll="body" open={openSignup} onClose={handleSignupClose} maxWidth="md" fullWidth>
        <GuestSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </GuestStyleComponent>
      <GuestStyleComponent open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth></GuestStyleComponent>
      <GuestStyleComponent open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
        <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </GuestStyleComponent>
    </Drawer>
  );
};

export default SideBarGuestMenu;
