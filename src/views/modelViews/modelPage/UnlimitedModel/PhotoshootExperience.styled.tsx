import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const PhotoshootExpMainContainer = styled(Box)(() => ({
  position: 'relative',
  width: '100%'
}));

export const PhotoshootExpWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 14.5,
    paddingRight: 14.5
  }
}));

export const Banner = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(7, 3, 14, 1), rgba(0, 0, 0, 0.1)), url(images/model/banner.webp)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  width: '100%',
  alignItems: 'end',
  position: 'relative',
  borderRadius: '12px',
  [theme.breakpoints.down('lg')]: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
}));

export const PhotoshootExpContainer = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  paddingTop: '40px',
  paddingBottom: '40px',
  paddingLeft: '32px',
  paddingRight: '32px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(3),
  borderRadius: '12px',
  background: 'transparent',
  backdropFilter: 'blur(0px)',
  marginTop: '205px',
  marginBottom: '203px',
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(23.25),
    marginBottom: theme.spacing(23.25)
  }
}));

export const PhotoshootExpTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  width: '100%',
  maxWidth: '665px'
}));

export const PhotoshootExpButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));
