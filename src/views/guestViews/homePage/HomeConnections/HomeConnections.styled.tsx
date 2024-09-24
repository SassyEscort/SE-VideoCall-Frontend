import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const HomeMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5)
  }
}));

export const DullCircles = styled(Box)(() => ({
  backgroundColor: 'rgba(255, 72, 179, 0.3)',
  height: '412px',
  width: '584px',
  borderRadius: '50%',
  filter: 'blur(100px)',
  position: 'absolute',
  zIndex: '-1',
  top: '-200px',
  right: 700
}));

export const DullCircles2 = styled(Box)(() => ({
  backgroundColor: 'rgba(255, 72, 179, 0.3)',
  height: '412px',
  width: '584px',
  borderRadius: '50%',
  filter: 'blur(100px)',
  position: 'absolute',
  zIndex: '-1',
  top: '350px',
  right: 0
}));

export const DullCircles3 = styled(Box)(() => ({
  backgroundColor: 'rgba(255, 72, 179, 0.3)',
  height: '412px',
  width: '584px',
  borderRadius: '50%',
  filter: 'blur(100px)',
  position: 'absolute',
  zIndex: '-1',
  top: '-4200px',
  right: 0
}));

export const DullCircles4 = styled(Box)(() => ({
  backgroundColor: 'rgba(255, 72, 179, 0.3)',
  height: '412px',
  width: '584px',
  borderRadius: '50%',
  filter: 'blur(100px)',
  position: 'absolute',
  zIndex: '-1',
  top: '-3550px',
  right: 1270
}));

export const DullCircles5 = styled(Box)(() => ({
  backgroundColor: 'rgba(255, 72, 179, 0.3)',
  height: '412px',
  width: '584px',
  borderRadius: '50%',
  filter: 'blur(100px)',
  position: 'absolute',
  zIndex: '-1',
  top: '-2900px',
  right: 1300
}));

export const VectorLines = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/images/vactor-line.webp)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'absolute',
  width: '100%',
  maxWidth: '1500px',
  height: '100%',
  top: 0,
  transform: 'rotate(-04deg)',
  zIndex: -1
}));

export const VectorLinesMobile = styled(Box)(() => ({
  backgroundImage: 'url(/images/vector-mobile.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '569px',
  transform: 'rotate(-04deg)',
  left: '-136px'
}));

export const BoxImageBackground = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '94px',
  height: '100%',
  minHeight: '94px',
  border: '1px solid #601244',
  borderRadius: '50%',
  backgroundColor: '#601244',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '72px',
    minHeight: '72px'
  }
}));

export const BoxImageBackgroundChild = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '64px',
  height: '100%',
  minHeight: '64px',
  border: '1px solid #FF68C0',
  borderRadius: '50%',
  backgroundColor: '#FF68C0',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '49px',
    minHeight: '49px'
  }
}));

export const BoxMain = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const TextMainTitleTyporaphy = styled(Typography)(({ theme }) => ({
  width: '100%',
  fontSize: '40px',
  color: theme.palette.text.secondary,
  fontWeight: 700,
  lineHeight: '52px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    lineHeight: '32px'
  }
}));

export const TextTitleTyporaphy = styled(Typography)(({ theme }) => ({
  width: '100%',
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '32px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    lineHeight: '21px'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '680px'
  }
}));

export const MainChildContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center'
}));

export const FirstTextTyporaphy = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2)
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(2.75)
  }
}));

export const SeconBoxContainer = styled(Box)(() => ({
  width: '100%',
  maxWidth: '314px'
}));

export const ImgBoxContainer = styled('img')(() => ({
  position: 'absolute',
  top: '230px',
  left: 'calc(50% - 466px)',
  zIndex: 1
}));

export const ThirdBoxContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center'
}));
