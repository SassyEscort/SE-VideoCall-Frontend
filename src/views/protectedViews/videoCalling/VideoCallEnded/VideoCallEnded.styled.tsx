import { Box, Button, Dialog, DialogTitle, styled } from '@mui/material';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';

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

export const DialogContentMain = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.secondary[800],
    borderRadius: theme.spacing(1.5),
    maxWidth: '648px',
    border: 'solid 1px',
    borderColor: theme.palette.primary[700]
  },
  '& .MuiTypography-root': {
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
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
      backgroundColor: theme.palette.secondary[800]
    }
  }
}));

export const SecondBoxContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  textAlign: 'center'
}));

export const FirstBoxContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '352px',
  flexDirection: 'column',
  gap: theme.spacing(2),
  justifyContent: 'center',
  alignItems: 'center'
}));

export const ThirdBoxContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5),
  justifyContent: 'center',
  alignItems: 'center'
}));

export const FourBoxContent = styled(Box)(() => ({
  width: '100%',
  maxWidth: '300px',
  height: '100%',
  maxHeight: '48px',
  whiteSpace: 'nowrap'
}));

export const FiveBoxContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  alignItems: 'center'
}));

export const SixBoxContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5),
  textAlign: 'center'
}));

export const SkipButtonContent = styled(Button)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  color: theme.palette.secondary[700],
  cursor: 'pointer'
}));

export const PostButtonContent = styled(Button)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  cursor: 'pointer'
}));

export const ReviewBoxAndButtonContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  textAlign: 'end'
}));

export const ModelDetailsAndButtonContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(7),
  alignItems: 'center'
}));

export const DiagloMainBoxContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const ReviewSubmitBoxContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  width: '100%',
  maxWidth: '205.6px',
  alignItems: 'center',
  textAlign: 'center'
}));

export const TextBoxContent = styled(UIStyledInputText)(({ theme }) => ({
  '@media (min-width: 320px) ': {
    minWidth: '230px'
  },
  '@media (min-width: 375px) ': {
    minWidth: '270px'
  },
  '@media (min-width: 425px) ': {
    minWidth: '320px'
  },
  [theme.breakpoints.up('sm')]: {
    minWidth: '358px'
  },
  '& .MuiInputBase-root': {
    padding: theme.spacing(2)
  }
}));
