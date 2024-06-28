import { Tab } from '@mui/material';
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
  flexDirection: 'column',
  gap: theme.spacing(1),
  color: theme.palette.common.white,
  width: '100%',
  maxWidth: '217px',
  cursor: 'pointer',
  '& .MuiButtonBase-root': {
    opacity: 1
  }
}));

export const MainMenuBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  alignSelf: 'stretch'
}));

export const MainMenuBoxChlid = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 1
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
  gap: theme.spacing(4),
  width: '100%',
  maxWidth: '268px'
}));

export const MobileComponentBoxContainer = styled(Box)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .MuiButtonBase-root': {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    alignItems: 'flex-start'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 420
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 768
  }
}));

export const MobileTextStyleContainer = styled(Tab)(({ theme }) => ({
  whiteSpace: 'nowrap',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '19.2px'
}));

export const MobileComponentSecBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
}));

export const DashboardSidebarBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  minWidth: '268px'
}));

export const DullCirclesNav = styled(Box)(() => ({
  backgroundColor: 'rgba(255, 72, 179, 0.3)',
  height: '412px',
  width: '584px',
  borderRadius: '50%',
  filter: 'blur(100px)',
  position: 'absolute',
  zIndex: '-1',
  top: '-200px',
  right: '-100px'
}));

export const MobileComponentBox = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .MuiButtonBase-root': {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 420
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 768
  }
}));

export const SecondBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center'
}));

export const FirstBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  minWidth: '268px'
}));
