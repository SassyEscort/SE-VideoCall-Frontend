import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { ROLE } from 'constants/workerVerification';

interface BackgroundImageBoxProps {
  variant: string;
}

export const AuthCommonBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '920px',
  overflowY: 'scroll',
  scrollbarWidth: 'none',
  paddingTop: 0,
  [theme.breakpoints.down('md')]: {
    border: 'none'
  },
  position: 'relative'
}));

export const AuthImageMobileBox = styled(Box)(({ theme }) => ({
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

export const AuthImageBox = styled(Box)<BackgroundImageBoxProps>(({ theme, variant }) => ({
  width: '100%',
  maxWidth: '420px',
  backgroundSize: variant === ROLE.MODEL ? 'calc(100%) 100%, cover' : 'calc(100% - 320px) 100%, cover',
  backgroundImage: variant === ROLE.MODEL ? 'url(/images/model/model-signup/model-signup.webp)' : 'none',
  backgroundPosition: 'right',
  borderRadius: '12px',
  backgroundRepeat: 'no-repeat',
  display: 'block',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
  height: 'auto'
}));

export const BackgroundImageBox = styled(Box)<BackgroundImageBoxProps>(({ theme, variant }) => ({
  backgroundImage: variant === ROLE.CUSTOMER ? 'url(/images/home/free-credit-signup-img.webp)' : 'none',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  backgroundPosition: 'left',
  gap: theme.spacing(1.5),
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    backgroundImage: 'none'
  }
}));

export const AuthFreeCreditsMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    display: 'block'
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}));

export const AuthFreeCreditsInnerBoxContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '92px',
  [theme.breakpoints.only('md')]: {
    paddingLeft: theme.spacing(2)
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(4)
  }
}));

export const TextMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  alignItems: 'center',
  marginTop: theme.spacing(3)
}));

export const TextInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'baseline'
}));

export const HeaderTextMainBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '367px',
  display: 'flex',
  justifyContent: 'center',
  '@media (max-width: 768px)': {
    maxWidth: '275px'
  }
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 800,
  lineHeight: '44.8px',
  background: 'linear-gradient(90deg, #FBA631, #FFFFFF)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  '@media (max-width: 768px)': {
    whiteSpace: 'normal'
  },
  textAlign: 'center'
}));

export const DescriptionTextMainBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '332px',
  display: 'flex',
  textAlign: 'center',
  '@media (max-width: 768px)': {
    maxWidth: '300px'
  }
}));
