import Link from 'next/link';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

const ProfileMenu = ({
  open,
  handleClose,
  anchorEl,
  profilePic
}: {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
  profilePic: string;
}) => {
  const [openEdit, setOpenEdit] = useState(false);

  const handleEdit = () => {
    setOpenEdit(true);
  };

  // const handleCloseEdit = () => {
  //   setOpenEdit(false);
  // };

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
          <MenuItem component={Link} prefetch={false} shallow={true} href="/escort/profile">
            <ListItemIcon>
              <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
                <Avatar
                  alt="User Photo"
                  src={profilePic}
                  sx={{
                    height: 24,
                    width: 24
                  }}
                />
              </IconButton>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="bodySemiBold" color="text.secondary">
                MyProfile
              </Typography>
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={handleEdit}>
            <ListItemIcon>
              <Box component="img" src="/images/headerv2/lockPasswordLine.svg" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="bodySemiBold" color="text.secondary">
                ChangePassword
              </Typography>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Box component="img" src="/images/headerv2/logoutCircleLine.svg" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="bodySemiBold" color="text.secondary">
                Logoutv2
              </Typography>
            </ListItemText>
          </MenuItem>
        </Box>
      </Menu>
      {/* <WorkerChangePasswordV2 open={openEdit} onClose={handleCloseEdit} /> */}
    </>
  );
};

export default ProfileMenu;
