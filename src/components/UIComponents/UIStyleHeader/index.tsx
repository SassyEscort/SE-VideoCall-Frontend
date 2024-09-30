import Link from 'next/link';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { FormattedMessage } from 'react-intl';
import { HeaderMainBoxContainer } from './UIHeader.styled';
import { gaEventTrigger } from 'utils/analytics';

const ProfileMenu = ({
  open,
  handleClose,
  anchorEl,
  onSignupOpen
}: {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
  onSignupOpen: () => void;
}) => {
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="profile-menu"
        open={open}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            backgroundColor: 'secondary.dark'
          }
        }}
      >
        <HeaderMainBoxContainer>
          <MenuItem>
            <ListItemIcon>
              <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                <Box component="img" src="/images/icons/userLine.png" alt="user_line" sx={{ width: '24px', height: '24px' }} />
              </IconButton>
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                gaEventTrigger('Signup_Button_clicked', { source: 'header' });
                onSignupOpen();
              }}
            >
              <Typography variant="bodyLight" color="text.secondary">
                <FormattedMessage id="SignUpAsAUser" />
              </Typography>
            </ListItemText>
          </MenuItem>
          <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
          <MenuItem component={Link} prefetch={false} shallow={true} href="/model">
            <ListItemIcon>
              <Box
                component="img"
                src="/images/header/register-model-img.png"
                alt="register_model"
                sx={{ width: '24px', height: '24px' }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="bodyLight" color="text.secondary">
                <FormattedMessage id="RegisterAsAModel" />
              </Typography>
            </ListItemText>
          </MenuItem>
        </HeaderMainBoxContainer>
      </Menu>
    </>
  );
};

export default ProfileMenu;
