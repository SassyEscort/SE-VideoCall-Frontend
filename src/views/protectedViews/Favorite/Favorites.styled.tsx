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

export const FavoriteBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6)
}));

export const FavoriteTextMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(6)
  },
  gap: theme.spacing(7)
}));

export const LoadingBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 2
}));
