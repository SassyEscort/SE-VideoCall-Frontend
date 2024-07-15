import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const AuthModelCommonBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '920px',
  border: '1px solid #FF68C0',
  paddingTop: 0,
  [theme.breakpoints.down('md')]: {
    border: 'none'
  },
  borderRadius: '12px',
  position: 'relative'
}));

export const AuthModelImageMobileBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'absolute',
  borderRadius: '12px',
  backgroundPosition: 'center',
  display: 'none',
  maxWidth: 420,
  [theme.breakpoints.up('sm')]: {
    maxWidth: '100%'
  },
  [theme.breakpoints.only('xs')]: {
    display: 'block'
  }
}));

export const AuthModelImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxWidth: '420px',
  backgroundSize: 'calc(100% - 320px) 100%, cover',
  backgroundPosition: 'right',
  borderRadius: '12px',
  backgroundRepeat: 'no-repeat',
  display: 'block',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

export const AuthModelSignupSuccessMainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '509px',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 0
}));

export const FirstImgAuthModelSignupSuccessContainer = styled('img')(() => ({
  paddingBottom: 1.375
}));

export const SecContainerAuthModelSignupSuccessContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  paddingBottom: theme.spacing(4)
}));

export const ModelSignUpUIRemember = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  paddingBottom: theme.spacing(3),
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));
