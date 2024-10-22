import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';

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
  justifyContent: 'end',
  width: '100%',
  maxWidth: '613px',
  padding: theme.spacing(2),
  gap: theme.spacing(2)
}));

export const ProfileTextHeader = styled(UINewTypography)(() => ({
  fontSize: '16px !important',
  fontWeight: '600 !important',
  lineHeight: '25.6px !important'
}));

export const SaveButton = styled(StyleButtonV2)(() => ({
  '&.MuiButton-root': {
    height: '40px'
  }
}));
export const EditButton = styled(UIThemeButton)(() => ({
  '&.MuiButton-root': {
    height: '40px'
  }
}));
