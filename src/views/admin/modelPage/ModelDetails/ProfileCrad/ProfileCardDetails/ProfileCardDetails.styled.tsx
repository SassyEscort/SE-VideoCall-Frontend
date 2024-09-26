import { Box, Button, styled, Typography } from '@mui/material';

export const ProfileCradDetailsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
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

export const ProfileCradMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
}));

export const ButtonMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3)
}));

export const DeclineButtonContainer = styled(Button)(({ theme }) => ({
  cursor: 'pointer',
  width: '97px',
  height: '31px',
  backgroundColor: '#FF5959',
  border: '1px solid #FF5959',
  borderRadius: '4px'
}));

export const ButtonTextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '14.52px',
  color: theme.palette.common.white
}));

export const ApproveButtonContainer = styled(Button)(({ theme }) => ({
  cursor: 'pointer',
  width: '97px',
  height: '31px',
  backgroundColor: '#00B69B',
  border: '1px solid #00B69B',
  borderRadius: '4px'
}));
