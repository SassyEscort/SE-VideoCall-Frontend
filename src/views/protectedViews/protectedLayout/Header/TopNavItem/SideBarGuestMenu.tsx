import Link from 'next/link';
import Image from 'next/image';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { IconButtonContainer, SideBarGuestMenuBoxContainer } from './SideBarGuestMenu.styled';

const SideBarGuestMenu = ({
  open,
  toggleDrawer
}: {
  open: boolean;

  toggleDrawer: (open: boolean) => void;
}) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 284 }} onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
        <IconButtonContainer onClick={() => toggleDrawer(false)}>
          <Box component="img" src="/images/headerv2/closeLine.svg" alt="close_line_icon" />
        </IconButtonContainer>
        <Box display="flex" gap={3} flexDirection="column">
          <SideBarGuestMenuBoxContainer>
            <MenuItem>
              <Link prefetch={true} href="/advertisment">
                <UINewTypography variant="bodySemiBold" color="text.secondary">
                  AdvertiseWithSassyEscort
                </UINewTypography>
              </Link>
            </MenuItem>
            <Divider orientation="horizontal" flexItem sx={{ borderColor: 'secondary.800', mr: '23px', ml: '23px' }} />
            <Link prefetch={true} href="/login">
              <MenuItem>
                <ListItemIcon>
                  <Image priority src="/images\headerv2/loginCircle.svg" width={20} height={20} alt="login" />
                </ListItemIcon>
                <ListItemText>
                  <UINewTypography variant="bodySemiBold" color="text.secondary">
                    Loginv2
                  </UINewTypography>
                </ListItemText>
              </MenuItem>
            </Link>
            <Link prefetch={true} href="/register">
              <MenuItem>
                <ListItemIcon>
                  <Image priority src="/images\headerv2/userLine.svg" width={20} height={20} alt="sign_up" />
                </ListItemIcon>
                <ListItemText>
                  <UINewTypography variant="bodySemiBold" color="text.secondary">
                    Signupv2
                  </UINewTypography>
                </ListItemText>
              </MenuItem>
            </Link>
          </SideBarGuestMenuBoxContainer>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBarGuestMenu;
