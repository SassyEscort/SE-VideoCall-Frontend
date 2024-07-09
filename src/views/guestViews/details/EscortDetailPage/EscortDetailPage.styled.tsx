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
