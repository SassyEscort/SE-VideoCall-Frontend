'use client';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ContactContainer = styled(Box)(() => ({
  position: 'relative',
  backgroundImage: 'url(/images/home/blur_bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  justifyContent: 'center',
  width: '100%'
}));

export const ContactUs = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  [theme.breakpoints.up('sm')]: {
    paddingTop: '64px',
    paddingBottom: '64px'
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '68.5px',
    paddingBottom: '67.5px',
    gap: theme.spacing(1)
  }
}));

export const MainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  }
}));

export const MainBoxChildContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '614px'
}));

export const TypographyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(7)
}));

export const ListContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(11)
}));

export const TypoListContainer = styled(Box)(({ theme }) => ({
  padding: 0,
  marginTop: theme.spacing(7.25),
  marginBottom: theme.spacing(4.5)
}));
