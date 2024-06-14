import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const FavoritesText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '173px',
  height: '100%',
  maxHeight: '77px',
  gap: theme.spacing(1.5)
}));
