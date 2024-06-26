import Delete from '@mui/icons-material/Delete';
import MarkChatRead from '@mui/icons-material/MarkChatRead';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const NotificationMoreMenu = ({
  open,
  anchorEl,
  handleClose,
  handleClickReadAndClearAllNotifications
}: {
  open: boolean;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  handleClickReadAndClearAllNotifications: () => void;
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="notification-more-menu"
      open={open}
      onClick={handleClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Box
        py="7px"
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
          <ListItemIcon>
            <MarkChatRead sx={{ color: 'primary.main' }} />
          </ListItemIcon>
          <ListItemText>MarkAllAsRead</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Delete sx={{ color: 'primary.main' }} />
          </ListItemIcon>
          <ListItemText>ClearAll</ListItemText>
        </MenuItem>
      </Box>
    </Menu>
  );
};

export default NotificationMoreMenu;
