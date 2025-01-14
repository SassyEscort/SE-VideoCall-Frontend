import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const MainDashboardContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
}));

export const DashboardSecondBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1244px',
  marginTop: theme.spacing(4.5)
}));
