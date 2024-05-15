import { Box, Dialog, IconButton, styled } from '@mui/material';

export const SideBarBox = styled(Box)(() => ({
  width: '100%',
  minWidth: '130px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '& .MuiMenuItem-root ': { width: '100%' }
}));

export const IconSideBar = styled(IconButton)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  width: '100%',
  justifyContent: 'flex-end'
}));

export const GuestStyleComponent = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#07030E',
    borderRadius: '12px'
  },
  '& .MuiDialog-container': {
    backgroundColor: 'linear-gradient(rgba(19, 6, 23, 1)), rgba(7, 3, 14, 1))',
    backdropFilter: 'blur(12px)'
  },
  maxWidth: 920,
  borderRadius: '12px'
}));
