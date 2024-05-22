import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const SideBarGuestMenuBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  minWidth: '130px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '& .MuiMenuItem-root ': { width: '100%' }
}));

export const IconButtonContainer = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  width: '100%',
  justifyContent: 'flex-end'
}));

export const SideBarMenuMainContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  minWidth: '130px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '& .MuiMenuItem-root ': { width: '100%' },
  gap: theme.spacing(3.25)
}));

export const SideBarMenuContainer = styled(Box)(({ theme }) => ({}));
