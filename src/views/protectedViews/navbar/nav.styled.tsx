import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const MainDashboardSideMenuMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: 32,
  marginBottom: 20,
  width: '100%',
  maxWidth: 299,
  height: 'calc(100vh - 112px)',
  justifyContent: 'space-between',
  gap: theme.spacing(6)
}));

export const CommonMenuBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.common.white,
  width: '100%',
  cursor: 'pointer',
  '& .MuiButtonBase-root': {
    opacity: 1
  }
}));

export const SelectedTab = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  color: theme.palette.primary.main,
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(1)
  }
}));

export const NavBarBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(4)
}));
