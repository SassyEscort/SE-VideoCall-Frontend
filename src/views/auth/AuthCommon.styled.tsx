import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const AuthCommonBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '920px',
  border: '1px solid #FF68C0',
  paddingTop: 0,
  [theme.breakpoints.down('md')]: {
    border: 'none',
    paddingTop: '145px'
  },
  borderRadius: '12px',
  position: 'relative'
}));

export const AuthImageMobileBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 620,
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

export const AuthImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 620,
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

export const AuthSignupSuccessMainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '509px',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const FirstImgAuthSignupSuccessContainer = styled('img')(() => ({
  width: '100%',
  maxWidth: '135.5px',
  height: '100%',
  maxHeight: '132.16px',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const SecContainerAuthSignupSuccessContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '509px',
  height: '100%',
  maxHeight: '309px',
  gap: theme.spacing(1)
}));

export const SubContainerAuthSignupSuccessContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const SecImgAuthSignupSuccessContainer = styled('img')(() => ({
  width: '100%',
  maxWidth: '359px',
  height: '100%',
  maxHeight: '110px'
}));

export const TextContainerAuthSignupSuccessContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '509px',
  height: '100%',
  maxHeight: '100px',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  gap: theme.spacing(1)
}));

export const TextSubContainerAuthSignupSuccessContainer = styled(Box)(() => ({
  display: 'flex',
  height: '100%',
  maxHeight: '100px',
  textAlign: 'center',
  alignItems: 'center'
}));
