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

export const TextMainBox = styled(UINewTypography)(() => ({
  fontSize: '32px',
  fontWeight: 700,
  lineHeight: '44.8px',
  background: 'linear-gradient(90deg, #FBA631, #FFFFFF)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}));
