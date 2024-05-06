import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const HomeMainBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  gap: 2
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

export const VectorLines = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/images/vactor-line.png)',
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

export const BoxImageBackground = styled(Box)(() => ({
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
  zIndex: 2
}));

export const BoxImageBackgroundChild = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '64px',
  height: '100%',
  minHeight: '64px',
  border: '1px solid #FF68C0',
  borderRadius: '50%',
  backgroundColor: '#FF68C0',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const BoxMain = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const MainChildContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center'
}));
