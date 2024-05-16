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
  top: 64,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    top: 40
  }
}));
