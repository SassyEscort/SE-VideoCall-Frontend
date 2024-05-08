import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ImageMenuCardStyle = styled(Box)(() => ({
  width: '100%',
  flexShrink: 0,
  borderRadius: '32px 0px',
  position: 'absolute',
  zIndex: 1
}));

export const ImageMenuBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: 366,
  padding: '40px 0px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexShrink: 0,
  borderRadius: '24px 0px',
  background: 'rgba(213, 42, 142, 0.10)',
  backdropFilter: 'blur(24px)'
}));

export const ImageCardMenuItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: theme.spacing(1),
  paddingLeft: theme.spacing(3),
  alignItems: 'center',
  gap: theme.spacing(1),
  alignSelf: 'stretch'
}));
