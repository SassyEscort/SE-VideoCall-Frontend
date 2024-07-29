'use client';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const ReSubmitApplicationMainContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const ReSubmitApplicationMain = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(4),
  width: '100%',
  maxWidth: '769px'
}));

export const ReSubmitApplicationTitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1.5)
}));

export const ReSubmitApplicationDescContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: '#1E0815',
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  borderRadius: theme.spacing(1)
}));
