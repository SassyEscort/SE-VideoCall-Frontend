import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const HeadingTextAndTotalClientMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(7)
}));

export const HeadingTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(4)
}));

export const TotalClientMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(3)
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3)
  }
}));

export const TotalClientInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.125)
}));
