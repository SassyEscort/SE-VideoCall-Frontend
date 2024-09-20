import { Box, IconButton, styled, Typography } from '@mui/material';

export const ModelNewPasswordBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  gap: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(2),
    maxWidth: '100%',
    paddingTop: theme.spacing(0),
    paddingRight: theme.spacing(2)
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(4),
    maxWidth: '400px',
    paddingRight: theme.spacing(0)
  },
  paddingTop: theme.spacing(0)
}));

export const IconeButtonBox = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  display: 'block',
  color: theme.palette.common.white,
  right: theme.spacing(-9),

  [theme.breakpoints.down('md')]: {
    right: theme.spacing(0)
  }
}));

export const SetupNewPasswordBox = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const SetYourNewPasswordBox = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(0),
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    marginTop: '100px',
    whiteSpace: 'normal'
  }
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

export const ModelPasswordInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(0)
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(6.25)
  }
}));
