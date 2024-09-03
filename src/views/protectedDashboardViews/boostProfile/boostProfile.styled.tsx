import { Box, Dialog, Divider, styled } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const BoostProfileMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  flexDirection: 'column',
  width: '100%',
  maxWidth: '600px',
  alignItems: 'center'
}));

export const BoostProfileTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center'
}));

export const BoostProfileMissedCallTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
}));

export const BoostProfileMissCallBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  width: '100%',
  maxWidth: '150px',
  alignItems: 'center'
}));

export const BoostProfileDialogConatiner = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.secondary[800],
    borderRadius: '12px',
    maxWidth: '648px',
    height: 'auto'
  },
  '& .MuiDialog-container': {
    backdropFilter: 'blur(24px)'
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiDialog-paper': {
      backgroundColor: 'transparent'
    }
  }
}));

export const UINewTypographyMissedCall = styled(UINewTypography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 800,
  lineHeight: '21px',
  color: theme.palette.text.primary
}));

export const UINewTypographyMissedCallBox = styled(UINewTypography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '21px',
  color: theme.palette.secondary[700],
  display: 'inline-block',
  position: 'relative',
  right: theme.spacing(1)
}));

export const SupBox = styled('sup')(({ theme }) => ({
  display: 'inline-block',
  width: '13px',
  height: '21px',
  fontSize: '12px',
  fontWeight: 800,
  bottom: '6px',
  position: 'relative',
  color: theme.palette.text.primary
}));

export const DividerMainBox = styled(Divider)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  border: '1px solid',
  display: 'block',
  borderColor: theme.palette.primary[700],
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

export const BoostBox = styled(Box)(() => ({
  padding: '32px 24px'
}));

export const BoostProfileBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
  flexDirection: 'column',
  alignItems: 'center'
}));

export const BoostProfileModelBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  flexDirection: 'column'
}));

export const UINewTypographySuccessBoost = styled(UINewTypography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 700,
  lineHeight: '43.2px',
  textAlign: 'center'
}));
