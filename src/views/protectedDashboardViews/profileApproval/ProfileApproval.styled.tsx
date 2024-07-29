'use client';
import { Box, styled, Typography } from '@mui/material';

export const MainContainer = styled(Box)(({ theme }) => ({
  height: '36px',
  backgroundColor: theme.palette.error[300],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5),
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(2.25),
    height: '68px'
  },
  [theme.breakpoints.up('sm')]: {
    height: '30px'
  }
}));
export const ImageBox = styled('img')(({ theme }) => ({
  height: '20px',
  width: '20px'
}));

export const BoxSecond = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: '326px'
  }
}));
export const UINewTypographyText = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '28.8px',
  color: theme.palette.text.secondary,

  textWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    lineHeight: '22.4px'
  },
  '@media (max-width: 320px)': {
    fontSize: '13px'
  },
  '@media (max-width: 799px)': {
    fontSize: '14px'
  }
}));
