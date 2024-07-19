import Link from 'next/link';
import Image from 'next/image';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { IconSideBar, SideBarBox } from './ModelLayout.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import ModelSignup from '../modelSignup';
import ModelSignin from '../modelSignin';
import ModelForgetPasswordLink from '../modelForgetPasswordLink';
// import ModelNewPassword from '../ModelNewPassword';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const SideBarModelMenu = ({ open, toggleDrawer }: { open: boolean; toggleDrawer: (open: boolean) => void }) => {
  // const url = new URL(window.location.href);
  // const email = url.searchParams.get('email');
  // const emailCode = url.searchParams.get('code');
  // const emailId = url.searchParams.get('id');
  const [isopen, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  // const [openChangePassword, setIsOpenChangePassword] = useState(email && emailCode && !emailId ? true : false);

  const handleSignupOpen = () => {
    setIsOpen(true);
    setIsOpenLogin(false);
  };
  const handleLoginOpen = () => {
    setIsOpen(false);
    setIsOpenLogin(true);
  };

  const handleSignupClose = () => {
    setIsOpen(false);
  };

  const handleLoginClose = () => {
    setIsOpenLogin(false);
  };
  const handleResetPasswordLinkOpen = () => {
    setIsOpenLogin(false);
    setOpenForgetPassLink(true);
  };

  const handleLoginResetPasswordOpen = () => {
    setOpenForgetPassLink(false);
    setIsOpenLogin(true);
  };

  const handleResetPasswordLinkClose = () => {
    setOpenForgetPassLink(false);
  };

  // const handleChangePasswordClose = () => {
  //   setIsOpenChangePassword(false);
  // };
  // const handleLoginChangePasswordOpen = () => {
  //   setIsOpenChangePassword(false);
  //   setIsOpenLogin(true);
  // };

  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 284 }}>
        <IconSideBar onClick={() => toggleDrawer(false)}>
          <Image priority height={40} width={40} src="/images/header/closeLine.svg" alt="closeLine" />
        </IconSideBar>
        <Box display="flex" gap={3} flexDirection="column">
          <SideBarBox>
            <MenuItem>
              <Link href="/">
                <UINewTypography variant="bodySemiBold" color="text.secondary">
                  <FormattedMessage id="LookingForAModel" />
                </UINewTypography>
              </Link>
            </MenuItem>
            <Divider orientation="horizontal" flexItem sx={{ borderColor: 'secondary.800', mr: '23px', ml: '23px' }} />
            <MenuItem>
              <ListItemIcon>
                <Image priority src="/images/header/loginCircle.svg" width={20} height={20} alt="login" />
              </ListItemIcon>
              <ListItemText onClick={handleLoginOpen}>
                <UINewTypography variant="bodySemiBold" color="text.secondary">
                  <FormattedMessage id="Login" />
                </UINewTypography>
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Image priority src="/images/header/userLine.svg" width={20} height={20} alt="sign_up" />
              </ListItemIcon>
              <ListItemText onClick={handleSignupOpen}>
                <UINewTypography variant="bodySemiBold" color="text.secondary">
                  <FormattedMessage id="Signup" />
                </UINewTypography>
              </ListItemText>
            </MenuItem>
          </SideBarBox>
        </Box>
      </Box>
      <UIStyledDialog scroll="body" open={isopen} onClose={handleSignupClose} maxWidth="md" fullWidth>
        <ModelSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
        <ModelSignin onClose={handleLoginClose} onSignupOpen={handleSignupOpen} onFogotPasswordLinkOpen={handleResetPasswordLinkOpen} />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
        <ModelForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </UIStyledDialog>
      {/* <UIStyledDialog scroll="body" open={openChangePassword} onClose={handleChangePasswordClose} maxWidth="md" fullWidth>
        <ModelNewPassword email={String(email)} onClose={handleChangePasswordClose} onLoginOpen={handleLoginChangePasswordOpen} />
      </UIStyledDialog> */}
    </Drawer>
  );
};

export default SideBarModelMenu;
