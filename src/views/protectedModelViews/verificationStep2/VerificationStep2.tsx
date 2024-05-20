import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const VerificationStep2MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(3.75),
  gap: theme.spacing(7),
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2)
}));

export const VerificationStep2MainContainerSecond = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

export const VerificationStep2MainContainerThree = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  width: '100%',
  maxWidth: '792px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.secondary['500'],
    paddingBottom: theme.spacing(3),
    gap: theme.spacing(2.5),
    borderRadius: '12px'
  }
}));

export const InputTypeBoxOne = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

export const InputTypeBoxSecond = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));
