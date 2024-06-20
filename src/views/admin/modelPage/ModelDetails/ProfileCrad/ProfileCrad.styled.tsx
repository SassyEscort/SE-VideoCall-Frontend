import { Box, styled } from '@mui/material';

export const ProfileCradBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(4),
  borderRadius: '32px 0px',
  border: '1px solid',
  borderColor: theme.palette.secondary.light,
  boxShadow: '0px 1px 80px 18px rgba(0, 0, 0, 0.10)',
  minWidth: 'auto',

  [theme.breakpoints.down('md')]: {
    minWidth: '100%'
  }
}));
