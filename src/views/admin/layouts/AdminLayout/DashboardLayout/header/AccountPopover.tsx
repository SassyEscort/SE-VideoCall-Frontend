import { MouseEvent, useState } from 'react';
import { alpha } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

export default function AccountPopover() {
  const [open, setOpen] = useState<null | HTMLElement>(null);

  const handleOpen = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(Boolean(open) && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8)
            }
          })
        }}
      >
        <Avatar src={'/images/admin/avatar.jpg'} alt="photoURL" />
      </IconButton>
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
        <MenuItem sx={{ m: 1 }}>Logout</MenuItem>
      </Popover>
    </>
  );
}
