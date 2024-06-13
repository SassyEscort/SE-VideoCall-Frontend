import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ErrorBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5),
  alignSelf: 'stretch',
  borderRadius: '16px 0px',
  backgroundColor: theme.palette.error[100],
  marginBottom: theme.spacing(1.5),
  color: theme.palette.error[400],
  justifyContent: 'center'
}));
