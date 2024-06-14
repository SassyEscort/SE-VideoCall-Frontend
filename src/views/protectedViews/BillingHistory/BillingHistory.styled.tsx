import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const BillingHistoryMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '929px',
  height: '100%',
  maxHeight: '471px',
  gap: theme.spacing(3),
  flexDirection: 'column'
}));

export const TextMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  maxHeight: '75px',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const FirstTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  maxHeight: '50px',
  justifyContent: 'space-between'
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

export const DividerContainer = styled(Divider)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.primary[700],
  width: '100%',
  maxWidth: '929px'
}));

export const BillingUIContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const DollarBillingValue = styled(UINewTypography)(() => ({
  fontSize: '20px !important',
  fontWeight: 700,
  lineHeight: '125% !important'
}));

export const ViewDetailsBilling = styled(UINewTypography)(() => ({
  fontSize: '16px !important',
  fontWeight: 600,
  lineHeight: '125% !important'
}));

export const DateTimeBilling = styled(UINewTypography)(() => ({
  lineHeight: '17.5px !important'
}));
