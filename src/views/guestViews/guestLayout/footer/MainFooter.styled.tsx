import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const FooterSubICon = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));

export const FooterButton = styled(UINewTypography)(() => ({
  fontSize: '16px !important',
  fontWeight: '700 !important',
  lineHeight: '24px !important'
}));

export const FooterMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.only('xs')]: {
    gap: theme.spacing(3),
    flexDirection: 'column'
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3),
    flexDirection: 'column'
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(10),
    flexDirection: 'row'
  }
}));
