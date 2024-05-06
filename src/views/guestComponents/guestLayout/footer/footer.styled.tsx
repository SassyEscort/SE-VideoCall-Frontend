import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

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
  width: '100%',
  height: 768,
  alignItems: 'end',
  position: 'relative',
  [theme.breakpoints.only('xs')]: {
    height: 762
  }
}));

export const BannerImg = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  [theme.breakpoints.down('lg')]: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    position: 'absolute'
  }
}));
