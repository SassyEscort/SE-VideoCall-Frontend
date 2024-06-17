'use client';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const HeaderMainBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  minWidth: '217px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '& .MuiMenuItem-root ': { width: '100%' },
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(0.875),
  paddingBottom: theme.spacing(0.875)
}));
