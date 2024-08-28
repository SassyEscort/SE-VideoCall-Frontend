import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const MobileImageBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
}));

export const MobileImageInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.spacing(7)
}));

export const ImageAndTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  alignItems: 'center'
}));

export const TitleTextBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '275px',
  display: 'flex',
  textAlign: 'center',
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
  WebkitTextFillColor: 'transparent',
  zIndex: 2
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
