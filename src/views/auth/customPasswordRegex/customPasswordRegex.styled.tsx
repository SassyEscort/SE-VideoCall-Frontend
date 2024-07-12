import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AuthCommonBox = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '25.6px',
  color: theme.palette.text.secondary,
  fontWeight: '600'
}));

export const MainBoxContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary[700],
  width: '100%',
  maxWidth: '509px',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  gap: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column'
}));
