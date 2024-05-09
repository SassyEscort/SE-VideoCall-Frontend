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
  [theme.breakpoints.down('md')]: {
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
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));
