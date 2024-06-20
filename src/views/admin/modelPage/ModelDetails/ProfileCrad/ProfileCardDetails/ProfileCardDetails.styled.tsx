import { Box, styled } from '@mui/material';

export const ProfileCradDetailsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  alignSelf: 'stretch'
}));

export const ProfileCradDetailsTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  flex: '1 0 0'
}));
