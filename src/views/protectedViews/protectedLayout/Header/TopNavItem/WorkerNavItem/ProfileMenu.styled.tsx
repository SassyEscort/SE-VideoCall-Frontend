import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ProfileMenuMainContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  minWidth: '130px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '& .MuiMenuItem-root ': { width: '100%' },
  paddingTop: theme.spacing(0.875),
  paddingBottom: theme.spacing(0.875)
}));
