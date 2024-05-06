import Link from 'next/link';
import Image from 'next/image';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { IconSideBar, SideBarBox } from './GuestLayout.styled';

const SideBarGuestMenu = ({ open, toggleDrawer }: { open: boolean; toggleDrawer: (open: boolean) => void }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 284 }} onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
        <IconSideBar onClick={() => toggleDrawer(false)}>
          <Image priority height={40} width={40} src="/images/header/closeLine.svg" alt="closeLine" />
        </IconSideBar>
        <Box display="flex" gap={3} flexDirection="column">
          <SideBarBox>
            <MenuItem>
              <Link prefetch={true} href="/">
                <Typography variant="bodySemiBold" color="text.secondary">
                  Register as Model
                </Typography>
              </Link>
            </MenuItem>
            <Divider orientation="horizontal" flexItem sx={{ borderColor: 'secondary.800', mr: '23px', ml: '23px' }} />
            <Link prefetch={true} href="/">
              <MenuItem>
                <ListItemIcon>
                  <Image priority src="/images/header/loginCircle.svg" width={20} height={20} alt="login" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="bodySemiBold" color="text.secondary">
                    Login
                  </Typography>
                </ListItemText>
              </MenuItem>
            </Link>
            <Link prefetch={true} href="/">
              <MenuItem>
                <ListItemIcon>
                  <Image priority src="/images/header/userLine.svg" width={20} height={20} alt="sign_up" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="bodySemiBold" color="text.secondary">
                    Signup
                  </Typography>
                </ListItemText>
              </MenuItem>
            </Link>
          </SideBarBox>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBarGuestMenu;
