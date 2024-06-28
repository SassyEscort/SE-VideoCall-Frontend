import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ProtectedDashboardLayoutMainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 72, 179, 0.3)',
  height: '412px',
  width: '584px',
  borderRadius: '50%',
  filter: 'blur(100px)',
  position: 'absolute',
  zIndex: '-1',
  right: theme.spacing(9),
  top: '-232px'
}));

export const ProtectedDashboardLayoutBoxContainer = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(1.75),
  [theme.breakpoints.only('md')]: {
    paddingBottom: theme.spacing(13)
  },
  [theme.breakpoints.only('sm')]: {
    paddingLeft: theme.spacing(1.75)
  },
  [theme.breakpoints.only('xs')]: {
    paddingLeft: theme.spacing(1.75)
  }
}));
