import { Box, IconButton, styled } from '@mui/material';

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

export const HeaderBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer'
}));
