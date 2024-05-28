import { Dialog, DialogContent, DialogTitle, styled } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const MianDailogConatiner = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.secondary['800'],
    borderRadius: '12px'
  },
  '& .MuiDialog-container': {
    backdropFilter: 'blur(24px)'
  }
}));

export const DialogtitleContainer = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end'
}));

export const DialogContentSecondBox = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  alignItems: 'center'
}));

export const CheckYourInbox = styled(UINewTypography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '25px !important'
  }
}));

export const AVerificationLink = styled(UINewTypography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '11px'
  }
}));

export const EmailText = styled(UINewTypography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '11px !important',
    fontWeight: '400 !important'
  }
}));
