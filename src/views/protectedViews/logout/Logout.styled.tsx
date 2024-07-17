import { Box, Dialog, DialogTitle, styled } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';

export const DialogTitleBox = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3)
}));

export const DialogContentFristBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: theme.spacing(7),
  paddingBottom: theme.spacing(7),
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(6)
  }
}));

export const DialogContentSecondBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '486px',
  gap: '48px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}));

export const DialogContentBoxQuestion = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '486px',
  textAlign: 'center'
}));

export const DialogContentBoxButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  flexDirection: 'row',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    dislay: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(1.5)
  }
}));

export const DialogContentBoxUIThemeButton = styled(UIThemeButton)(() => ({
  width: '100%',
  maxWidth: '231px',
  backgroundColor: '#D4D3D6 !important'
}));

export const DialogContentMain = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#07030E',
    borderRadius: '12px',
    border: 'solid 1px #232027'
  },
  '& .MuiDialog-container': {
    backgroundColor: '#07030e99 !important',
    backdropFilter: 'blur(24px)'
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiDialog-paper': {
      border: 'solid 0px'
    },
    '& .MuiDialog-container': {
      backgroundColor: '#07030E'
    }
  }
}));

export const UINewTypographyDollar = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '30px',
  color: theme.palette.text.secondary
}));
export const UINewTypographyAmount = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '30px',
  color: theme.palette.text.secondary
}));

export const UINewTypographyWithDrawButtonText = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '19.2px',
  color: theme.palette.primary[200]
}));

export const UINewTypographyWithDrawRecentWithdrawls = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '17.5px',
  color: theme.palette.secondary[200]
}));

export const UINewTypographyWithDrawButtonText2 = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '19.2px',
  color: theme.palette.text.disabled,
  backgroundColor: theme.palette.primary[700],
  borderColor: theme.palette.primary[700]
}));
