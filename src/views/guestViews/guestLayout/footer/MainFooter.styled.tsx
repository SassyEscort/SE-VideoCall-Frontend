import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const FooterSubICon = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));

export const FooterButton = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px !important',
  fontWeight: '700 !important',
  lineHeight: '24px !important'
}));
