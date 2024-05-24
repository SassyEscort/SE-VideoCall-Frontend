import { Box, styled } from '@mui/material';

export const MainConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(4),
  gap: theme.spacing(8),
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(0)
  }
}));

export const SecondConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(20.5),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1.75),
    paddingRight: theme.spacing(1.75)
  }
}));

export const VideoCall = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  width: '100%',
  maxWidth: '390px',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0)
  }
}));

export const PriceMinute = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  [theme.breakpoints.down('sm')]: {
    backgroundColor: theme.palette.secondary['500'],
    borderRadius: '12px',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

export const Minute = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5)
}));

export const SelectMenucontainer = styled(Box)(({ theme }) => ({
  maxWidth: '390px',
  borderRadius: '15px'
}));

export const ButtonConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '725px',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));
