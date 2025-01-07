'use client';

import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const UINewSignUpStyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#07030E',
    borderRadius: theme.spacing(1.5)
  },
  '& .MuiDialog-container': {
    backgroundColor: 'linear-gradient(rgba(19, 6, 23, 1)), rgba(7, 3, 14, 1))',
    backdropFilter: 'blur(12px)'
  },
  '& .MuiPaper-root': {
    maxWidth: '1200px',
    borderRadius: theme.spacing(1.5)
  }
}));

export const ModelCreditsUIStyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#07030E',
    borderRadius: theme.spacing(1.5)
  },
  '& .MuiDialog-container': {
    backgroundColor: 'linear-gradient(rgba(19, 6, 23, 1)), rgba(7, 3, 14, 1))',
    backdropFilter: 'blur(12px)'
  },
  '& .MuiPaper-root': {
    maxWidth: 1200,
    height: 784,
    borderRadius: theme.spacing(1.5)
  }
}));

export default UINewSignUpStyledDialog;
