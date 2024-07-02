import { Box, styled } from '@mui/material';

export const MainDashboardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
}));

export const DashboardSecondBox = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(16.75)
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(16.75)
  }
}));
