import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

export default function AccountPopover() {
  return (
    <>
      <IconButton
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
    </>
  );
}
