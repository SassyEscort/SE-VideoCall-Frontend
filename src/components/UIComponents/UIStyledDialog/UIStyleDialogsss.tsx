'use client';

import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const UIStyledDialogg = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    // backgroundColor: '#07030E',
    // borderRadius: theme.spacing(1.5)
  },
  '& .MuiDialog-container': {
    backgroundImage: `url(/images/login-bg-img.webp)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%'
  },
  '& .MuiPaper-root': {
    maxWidth: '1226px',
    borderTopLeftRadius: theme.spacing(3),
    borderBottomLeftRadius: theme.spacing(3),
    background: 'transparent',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    boxShadow: 'none'
  }
}));

export const ModelCreditsUIStyledDialogg = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    // backgroundColor: '#07030E'
    borderRadius: theme.spacing(1.5)
  },
  '& .MuiDialog-container': {
    // backgroundColor: 'linear-gradient(rgba(19, 6, 23, 1)), rgba(7, 3, 14, 1))',
    // backdropFilter: 'blur(12px)'
  },
  '& .MuiPaper-root': {
    maxWidth: 1226,
    height: 880,
    borderRadius: theme.spacing(1.5)
  }
}));

export default UIStyledDialogg;
