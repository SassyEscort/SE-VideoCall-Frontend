import { Box, Dialog, DialogTitle, Divider, styled } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const AddBankDetailsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(4),
  paddingRight: theme.spacing(3),
  gap: theme.spacing(8),
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '0px',
    paddingRight: '0px'
  }
}));

export const AddBankDetailsSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  width: '100%',
  maxWidth: '390px'
}));

export const InputMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const InputSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  [theme.breakpoints.down('sm')]: {
    backgroundColor: theme.palette.secondary['500'],
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderRadius: '12px'
  }
}));

export const InputBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5)
}));

export const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(6),
  paddingBottom: theme.spacing(2)
}));

export const PayoutText = styled(UINewTypography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '14px'
  }
}));

export const AddBankDetail = styled(UINewTypography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0)
  }
}));

export const DialogContentMain = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.secondary[800],
    borderRadius: theme.spacing(1.5),
    maxWidth: '419px',
    width: '100%',
    margin: theme.spacing(-4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },

  '& .MuiDialog-container': {
    backdropFilter: 'blur(24px)'
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiDialog-paper': {
      backgroundColor: 'transparent',
      width: '100%'
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
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0)
  }
}));

export const DividerBox = styled(Divider)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.primary[700],
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));
