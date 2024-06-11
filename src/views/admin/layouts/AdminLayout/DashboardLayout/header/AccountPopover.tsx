'use client';
import Avatar from '@mui/material/Avatar';
import { StyledIconButton } from './AccountPopover.styled';
import { useState } from 'react';
import { Divider, MenuItem, Stack } from '@mui/material';
import Popover from '@mui/material/Popover';

export default function AccountPopover() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledIconButton open={open} onClick={() => setOpen(!open)}>
        <Avatar src={'/images/admin/avatar.jpg'} alt="photoURL" />
      </StyledIconButton>
      <Popover
        open={Boolean(open)}
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
        <MenuItem sx={{ m: 1 }}>Logout</MenuItem>
      </Popover>
    </>
  );
}
