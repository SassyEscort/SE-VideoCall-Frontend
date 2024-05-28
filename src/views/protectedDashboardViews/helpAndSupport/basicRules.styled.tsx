import { Dialog, DialogTitle, styled } from '@mui/material';

export const DialogTitleBox = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end'
}));

export const DialogBoxContainer = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.secondary[800],
    borderRadius: '12px',
    maxWidth: '920px',
    height: '1147px'
  },
  '& .MuiDialog-container': {
    backdropFilter: 'blur(24px)'
  }
}));
