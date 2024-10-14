import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';

export const DialogTitleBox = styled(DialogTitle)(() => ({
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
