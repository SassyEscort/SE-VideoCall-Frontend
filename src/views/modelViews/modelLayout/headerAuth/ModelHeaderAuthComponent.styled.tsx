import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const FirstBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}));

export const SecBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer'
}));

export const ThirdBoxContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  position: 'relative'
}));
