import { Box, styled, Typography } from '@mui/material';

export const UserInformationAccordionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  borderRadius: '12px',
  border: '1px solid',
  borderColor: theme.palette.secondary.light,
  boxShadow: '0px 1px 80px 18px rgba(0, 0, 0, 0.10)',
  width: '100%',
  backgroundColor: theme.palette.common.white
}));

export const PhotoMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const TitleTextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32.78px',
  color: '#202224'
}));
