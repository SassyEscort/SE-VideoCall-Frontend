import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const BillingHistoryMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '929px',
  height: '100%',
  gap: theme.spacing(3),
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(1.5)
  }
}));

export const BillingHistoryTextContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '255px',
  height: '100%',
  maxHeight: '48px'
}));

export const TextAndBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(7),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3)
  }
}));

export const BillingUIContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const DollarBillingValue = styled(UINewTypography)(() => ({
  fontSize: '20px !important',
  fontWeight: 700,
  lineHeight: '125% !important'
}));

export const DateTimeBilling = styled(UINewTypography)(() => ({
  lineHeight: '17.5px !important'
}));

export const BillingHistoryBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6)
}));

export const BillingPaginationBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

export const TextBoxContainer = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px'
}));
