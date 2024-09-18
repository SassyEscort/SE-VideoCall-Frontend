import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

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

export const AuthImageBox = styled(Box)(({ theme }) => ({
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

export const DescriptionTextBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '248px',
  display: 'flex',
  textAlign: 'center'
}));

export const TextMainBox = styled(UINewTypography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 700,
  lineHeight: '44.8px',
  background: 'linear-gradient(90deg, #FBA631, #FFFFFF)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}));
