import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GuestNewPasswordText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    whiteSpace: 'normal',
    marginTop: theme.spacing(12.5),
    lineHeight: '41.6px'
  },
  [theme.breakpoints.up('sm')]: {
    whiteSpace: 'nowrap',
    marginTop: theme.spacing(0),
    lineHeight: '40px'
  }
}));

export const MainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  alignItems: 'center',
  justifyContent: 'center'
}));

export const FirstBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const SecBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5)
}));

export const ThirdBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5)
}));

export const SecTextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '19.2px',
  fontWeight: '700'
}));

export const FourBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3.25),
  width: '100%'
}));

export const FiveBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.75)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(3)
  }
}));

export const SixBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row'
  }
}));
