import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const MobileImageBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const MobileImageInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const ImageAndTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  alignItems: 'center'
}));

// export const ImageContainer = styled(Box)(({ theme }) => ({
//   backgroundImage: 'url(/images/workercards/Workercard-img.jpeg)',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   position: 'absolute',
//   width: '100%',
//   maxWidth: '363px',
//   height: '100%',
//   maxHeight: '290px'
// }));

export const TitleTextBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '275px',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  '@media (max-width: 320px)': {
    maxWidth: '221px'
  }
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '33.6px',
  letterSpacing: '0.3px',
  background: 'linear-gradient(90deg, #FBA631, #FFFFFF)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}));

export const DescriptionTextBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '228px',
  display: 'flex',
  textAlign: 'center',
  '@media (max-width: 320px)': {
    maxWidth: '221px'
  }
}));
