import Link from 'next/link';
import Image from 'next/image';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

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
        <IconButton
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '100%',
            justifyContent: 'flex-end'
          }}
          onClick={() => toggleDrawer(false)}
        >
          <Box component="img" src="/images/headerv2/closeLine.svg" />
        </IconButton>
        <Box display="flex" gap={3} flexDirection="column">
          <Box
            sx={{
              width: '100%',
              minWidth: '130px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              '& .MuiMenuItem-root ': { width: '100%' }
            }}
          >
            <MenuItem>
              <Link prefetch={true} href="/advertisment">
                <Typography variant="bodySemiBold" color="text.secondary">
                  AdvertiseWithSassyEscort
                </Typography>
              </Link>
            </MenuItem>
            <Divider orientation="horizontal" flexItem sx={{ borderColor: 'secondary.800', mr: '23px', ml: '23px' }} />
            <Link prefetch={true} href="/login">
              <MenuItem>
                <ListItemIcon>
                  <Image priority src="/images\headerv2/loginCircle.svg" width={20} height={20} alt="login" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="bodySemiBold" color="text.secondary">
                    Loginv2
                  </Typography>
                </ListItemText>
              </MenuItem>
            </Link>
            <Link prefetch={true} href="/register">
              <MenuItem>
                <ListItemIcon>
                  <Image priority src="/images\headerv2/userLine.svg" width={20} height={20} alt="sign_up" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="bodySemiBold" color="text.secondary">
                    Signupv2
                  </Typography>
                </ListItemText>
              </MenuItem>
            </Link>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBarGuestMenu;
