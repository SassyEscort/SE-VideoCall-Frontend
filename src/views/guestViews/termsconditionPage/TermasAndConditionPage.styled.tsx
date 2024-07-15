'use client';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from '@mui/system/Box';

export const FirstTextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '25.6px'
}));

export const TermsAndConditionMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(7)
}));

export const FirstBoxMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5),
  [theme.breakpoints.down('lg')]: {
    paddingLeft: theme.spacing(1.75),
    paddingRight: theme.spacing(1.75)
  }
}));
