import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '32px',
    paddingRight: '32px'
  }
}));

export const ChildContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6)
}));

export const ImageContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center'
}));

export const TypographyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  justifyContent: 'center',
  textAlign: 'center'
}));

export const TypographyContainer2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  justifyContent: 'center',
  textAlign: 'center'
}));
