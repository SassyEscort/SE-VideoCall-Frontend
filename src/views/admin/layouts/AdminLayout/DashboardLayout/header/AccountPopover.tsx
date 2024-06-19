import { MouseEvent, useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { StyledIconButton } from './AccountPopover.styled';
import { toast } from 'react-toastify';
import { signOut } from 'next-auth/react';

export default function AccountPopover() {
  const [open, setOpen] = useState<null | HTMLElement>(null);

  const handleOpen = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    setOpen(event.currentTarget);
  };

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
      <StyledIconButton open={Boolean(open)} onClick={handleOpen}>
        <Avatar src={'/images/admin/avatar.jpg'} alt="photoURL" />
      </StyledIconButton>
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
