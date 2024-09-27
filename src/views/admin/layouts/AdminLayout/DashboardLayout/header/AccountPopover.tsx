import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { toast } from 'react-toastify';
import { signOut, useSession } from 'next-auth/react';
import { Box, Typography } from '@mui/material';
import { UserIconMainBox } from './AccountPopover.styled';

export default function AccountPopover() {
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const adminAuth = useSession();

  const handleClose = () => {
    setOpen(null);
  };

  const handleConfirmLogout = async () => {
    try {
      await signOut({ callbackUrl: '/admin/login' });
    } catch (error) {
      toast.error('Error during sign-out:');
    }
  };

  return (
    <>
      <Avatar src={'/images/admin/avatar.jpg'} alt="photoURL" />
      <Box sx={{ ml: 2 }}>
        <UserIconMainBox>
          <Typography variant="subtitle2" sx={{ color: 'text.primary', textTransform: 'capitalize' }}>
            {adminAuth.data?.user?.name}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {adminAuth.data?.user?.email}
          </Typography>
        </UserIconMainBox>
      </Box>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75
            }
          }
        }}
      >
        <Stack sx={{ p: 1 }}>
          <MenuItem>Change Password</MenuItem>
        </Stack>
        <Divider sx={{ borderStyle: 'dashed' }} />
        <MenuItem sx={{ m: 1 }} onClick={handleConfirmLogout}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
