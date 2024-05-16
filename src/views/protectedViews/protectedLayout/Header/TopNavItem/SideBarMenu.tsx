import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { MainDashboardTabs } from 'constants/escortConstants';

const SideBarMenu = ({ open, toggleDrawer }: { open: boolean; toggleDrawer: (open: boolean) => void }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 284, pt: 1 }} onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
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
            display={{ xs: 'flex', sm: 'none' }}
            alignItems="center"
            padding="16px 10px"
            paddingLeft="14px"
            paddingBottom={0}
            height="36px"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Box alignItems="center" gap={1.5} display="flex">
                <Box component="img" src="/images/icons/coin1.svg" height="24px" />
                <Typography variant="bodySemiBold" color="text.secondary">
                  Credits
                </Typography>
              </Box>
            </Box>
            <Typography variant="bodySemiBold" color="text.secondary">
              Hello
            </Typography>
          </Box>
          <Divider orientation="horizontal" flexItem sx={{ borderColor: 'secondary.800' }} />
          <Box
            sx={{
              width: '100%',
              minWidth: '130px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              '& .MuiMenuItem-root ': { width: '100%' },
              gap: '26px'
            }}
          >
            {MainDashboardTabs.map((tab, index) => (
              <Link prefetch={false} href={tab.path} key={index} style={{ textDecoration: 'none' }}>
                <MenuItem>
                  <ListItemIcon>
                    <Box component="img" src={tab.img} />
                  </ListItemIcon>
                  <ListItemText>
                    <UINewTypography variant="buttonLargeMenu">tab.name</UINewTypography>
                  </ListItemText>
                </MenuItem>
              </Link>
            ))}

            <Link prefetch={false} href="/">
              <MenuItem>
                <ListItemIcon>
                  <Box component="img" src="/images/dashboard/external-link-line.png" />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="buttonLargeMenu" color="text.primary">
                    GoSassyWebsite
                  </Typography>
                </ListItemText>
              </MenuItem>
            </Link>

            <MenuItem>
              <ListItemIcon>
                <Box component="img" src="/images/headerv2/logoutCircleLine.svg" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="buttonLargeMenu" color="text.primary">
                  Logoutv2
                </Typography>
              </ListItemText>
            </MenuItem>
          </Box>
          <Divider orientation="horizontal" flexItem sx={{ borderColor: 'secondary.800', mr: '23px', ml: '23px' }} />
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBarMenu;
