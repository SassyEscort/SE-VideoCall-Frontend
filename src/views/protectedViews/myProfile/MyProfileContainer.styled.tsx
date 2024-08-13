import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const MyProfileTitle = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3)
}));

export const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const InnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5)
}));

export const VerifiedColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  cursor: 'pointer',
  '@media (max-width: 320px)': {
    flexDirection: 'column'
  },
  '@media (max-width: 375px)': {
    gap: theme.spacing(1)
  }
}));
