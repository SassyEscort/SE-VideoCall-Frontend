import { Box, styled } from '@mui/material';

export const HeaderMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center'
}));

export const SearchTitalBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  cursor: 'pointer'
}));
