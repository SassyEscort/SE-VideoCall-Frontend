import { Box, Dialog, DialogTitle, Divider, Typography, styled } from '@mui/material';

export const MainDailgConatiner = styled(Dialog)(({ theme }) => ({
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

export const DialogTitleBox = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875),
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(0)
  }
}));

export const MainDailgFristBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const DividerBox = styled(Divider)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  border: '1px solid',
  borderColor: theme.palette.primary[700]
}));

export const ForBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: theme.spacing(4),
  gap: theme.spacing(4.75)
}));

export const FiveBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  width: '100%',
  maxWidth: '465px'
}));

export const UINewTypographyYourRequestHasBeenSubmitted = styled(Box)(({ theme }) => ({
  fontSize: '30px',
  fontWeight: 600,
  lineHeight: '42px',
  textWrap: 'nowrap',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    lineHeight: '33.6px',
    textWrap: 'wrap'
  }
}));

export const UINewTypographyYourTheRequestWill = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '25.6px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    lineHeight: '22.4px'
  }
}));

export const FirstBoxRequestSubmit = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6)
}));

export const SecondBoxRequestSubmit = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}));

export const TextBox = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '28px'
}));
