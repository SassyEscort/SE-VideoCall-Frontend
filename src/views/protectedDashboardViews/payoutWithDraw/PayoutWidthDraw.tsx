import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';

export const DialogContentMain = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.secondary[800],
    borderRadius: theme.spacing(1.5),
    maxWidth: '648px'
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

export const DialogTitleBox = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0
  }
}));

export const FirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const SecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}));

export const ThreeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const ForBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  [theme.breakpoints.down(375)]: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: theme.spacing(1)
  }
}));

export const ChooseYourBankFristBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const ChooseYourBankSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5)
}));

export const ChooseYourBankthreeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5)
}));

export const BigScreenGap = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const SmallScreenGap = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5)
}));
export const UINewTypographyChooseYourBank = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '22.4px',
  color: theme.palette.secondary[200]
}));

export const UINewTypographyBankName = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '24px',
  color: theme.palette.text.secondary
}));

export const UINewTypographyRemarks = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '25.6px',
  color: theme.palette.secondary[200]
}));

export const UINewTypographyConfirm = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '19.2px',
  color: theme.palette.primary[200]
}));

export const PayoutDetailSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: theme.palette.primary[700],
  borderRadius: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: ' flex-start',
    alignItems: 'flex-start',
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    gap: theme.spacing(6)
  },
  cursor: 'pointer'
}));

export const PayoutDetailThreeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(0),
    paddingBottom: theme.spacing(0)
  }
}));

export const PayoutDetailForBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5)
}));

export const PayoutDetailFiveBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  paddingRight: theme.spacing(3)
}));

export const PayoutDetailSixBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5)
}));

export const SmallScreenBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const SamllScreenFirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}));

export const UINewTypographyTitleRequestPayout = styled(UINewTypography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '28px',
  color: theme.palette.secondary[200]
}));

export const UINewTypographyYourBalance = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '20px',
  color: theme.palette.text.primary,
  textWrap: 'nowrap'
}));
export const UINewTypographyAmount = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '20px',
  color: theme.palette.text.secondary,
  textWrap: 'nowrap'
}));

export const UIStyledInputTextAmount = styled(UIStyledInputText)(({ theme }) => ({
  height: '70px',
  '& .MuiInputBase-root': {
    padding: '16px 20px',
    fontWeight: 700,
    fontSize: '24px !important',
    lineHeight: '38.4px !important',
    color: theme.palette.text.secondary
  }
}));

export const UINewTypographyPrice = styled(UINewTypography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '38.4px'
}));
