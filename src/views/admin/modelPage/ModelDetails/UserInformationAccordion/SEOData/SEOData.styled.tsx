import { Box, styled } from '@mui/material';

export const ModelInformationBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
}));

export const ModelInformationContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  flexDirection: 'column',
  gap: theme.spacing(2.5)
}));
