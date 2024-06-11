'use client';
import Avatar from '@mui/material/Avatar';
import { StyledIconButton, StyledPopover } from './AccountPopover.styled';
import { useState } from 'react';
import { Divider, MenuItem, Stack } from '@mui/material';

export default function AccountPopover() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledIconButton open={open} onClick={() => setOpen(!open)}>
        <Avatar src={'/images/admin/avatar.jpg'} alt="photoURL" />
      </StyledIconButton>
      <StyledPopover
        open={Boolean(open)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Stack sx={{ p: 1 }}>
          <MenuItem>Change Password</MenuItem>
        </Stack>
        <Divider sx={{ borderStyle: 'dashed' }} />
        <MenuItem sx={{ m: 1 }}>Logout</MenuItem>
      </StyledPopover>
    </>
  );
}
