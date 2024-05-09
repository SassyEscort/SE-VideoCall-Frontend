import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const DetailsMainBox = styled(Box)(() => ({
  width: '100%',
  maxWidth: '517px',
  backgroundColor: '#1E0815',
  padding: '16px 32px 16px 32px',
  borderRadius: '12px'
}));

export const DetailsChildBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const DetailsTypographyBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5)
}));

export const DetailsChipBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));

export const NewTypography = styled(UINewTypography)(() => ({
  fontSize: '20px',
  lineHeight: '32px',
  fontWeight: '400',
  letterSpacing: '0.1px',
  color: '#E9E8EB'
}));
