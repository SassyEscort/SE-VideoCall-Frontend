import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AccountPopover from './AccountPopover';
import NotificationsNone from '@mui/icons-material/NotificationsNone';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { bgBlur } from 'utils/Admin/cssStyles';

const NAV_WIDTH = 280;
const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`
  },
  paddingRight: '0 !important'
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

Header.propTypes = {
  onOpenNav: PropTypes.func
};

export default function Header() {
  return (
    <>
      <StyledRoot>
        <StyledToolbar>
          <IconButton
            sx={{
              mr: 1,
              color: 'text.primary',
              display: { lg: 'none' }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction="row"
            alignItems="center"
            spacing={{
              xs: 0.5,
              sm: 1
            }}
          >
            <IconButton>
              <NotificationsNone sx={{ color: 'secondary.dark' }} />
            </IconButton>
            <AccountPopover />
          </Stack>
        </StyledToolbar>
      </StyledRoot>
    </>
  );
}
