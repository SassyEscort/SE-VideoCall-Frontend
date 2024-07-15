import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const MyProfileContainerMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(7),
  flexDirection: 'column'
}));

export const InputTypeBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  backgroundColor: theme.palette.secondary[500],
  width: '100%',
  maxWidth: '614px',
  borderRadius: '12px'
}));

export const DisableButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  maxWidth: '613px',
  padding: theme.spacing(2)
}));

export const ProfileTextHeader = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px !important',
  fontWeight: '600 !important',
  lineHeight: '25.6px !important'
}));
