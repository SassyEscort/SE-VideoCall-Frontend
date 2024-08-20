import { Box, styled } from '@mui/material';

export const LoaderBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  zIndex: 1000,
  left: '50%'
}));

export const EscortPersonalDetailsBoxContainet = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  textAlign: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(1.5)
}));

export const RateCountryBoxContainet = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3)
}));
