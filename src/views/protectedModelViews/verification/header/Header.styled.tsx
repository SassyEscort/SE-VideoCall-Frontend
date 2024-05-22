import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const VerificationHeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: theme.spacing(9),
  paddingTop: '21px',
  paddingBottom: '21px',
  [theme.breakpoints.up('md')]: {
    paddingTop: '15px',
    paddingBottom: '17px'
  }
}));
