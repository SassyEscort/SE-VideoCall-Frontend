'use client';
import { Dialog, styled } from '@mui/material';

const UIStyledDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#07030E',
    borderRadius: '12px'
  },
  '& .MuiDialog-container': {
    backgroundColor: 'linear-gradient(rgba(19, 6, 23, 1)), rgba(7, 3, 14, 1))',
    backdropFilter: 'blur(12px)'
  },
  '& .MuiPaper-root': {
    maxWidth: 920,
    borderRadius: '12px'
  }
}));

export const ModelCreditsUIStyledDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#07030E',
    borderRadius: '12px'
  },
  '& .MuiDialog-container': {
    backgroundColor: 'linear-gradient(rgba(19, 6, 23, 1)), rgba(7, 3, 14, 1))',
    backdropFilter: 'blur(12px)'
  },
  '& .MuiPaper-root': {
    maxWidth: 977,
    height: 823,
    borderRadius: '12px'
  }
}));

export default UIStyledDialog;
