import { FormControl, styled } from '@mui/material';

export const FormControlBox = styled(FormControl)(({ theme }) => ({
  width: '100%',
  maxWidth: '525px',
  [theme.breakpoints.only('lg')]: {
    maxWidth: '300px'
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '442px'
  }
}));
