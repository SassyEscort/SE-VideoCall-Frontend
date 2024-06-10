import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import AccountPopover from './AccountPopover';
import NotificationsNone from '@mui/icons-material/NotificationsNone';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { StyledRoot, StyledToolbar } from './AccountPopover.styled';

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
