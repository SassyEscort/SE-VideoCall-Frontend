import { Box, styled } from '@mui/material';

export const MainConatiner = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6.25)
}));

export const SecondBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '324px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(4.5),
  paddingLeft: theme.spacing(2.5)
}));

export const ThreeBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '214.8px',
  border: '12px solid #23202799',
  borderRadius: '16px',
  paddingTop: theme.spacing(4.5),
  paddingBottom: theme.spacing(3.75),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.11125),
  backgroundColor: '#232027D1',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const ImageBox = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '55.4px'
}));

export const ImageSecondBox = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '150.8px'
}));

export const ForBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '268px',
  paddingLeft: theme.spacing(6),
  gap: theme.spacing(3.5),
  display: 'flex'
}));
