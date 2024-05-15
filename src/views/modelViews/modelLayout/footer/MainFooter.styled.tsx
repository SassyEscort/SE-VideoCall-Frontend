import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const FooterSubICon = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));

export const TextContainerMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  Width: '100%',
  maxWidth: 1244,
  textAlign: 'center',
  alignItems: 'center',
  position: 'absolute',
  zIndex: 3,
  top: 64,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    top: 40
  }
}));

export const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(30, 8, 21, 1)',
  overflow: 'hidden',
  width: '100%',
  height: 768,
  alignItems: 'end',
  position: 'relative',
  [theme.breakpoints.only('xs')]: {
    height: 762
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '96px'
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: '125px'
  }
}));
