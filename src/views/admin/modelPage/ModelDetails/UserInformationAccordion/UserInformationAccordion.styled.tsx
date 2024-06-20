import { Box, styled } from '@mui/material';

export const UserInformationAccordionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  borderRadius: '32px 0px',
  border: '1px solid',
  borderColor: theme.palette.secondary.light,
  boxShadow: '0px 1px 80px 18px rgba(0, 0, 0, 0.10)',
  width: '100%',
  backgroundColor: theme.palette.common.white
}));
