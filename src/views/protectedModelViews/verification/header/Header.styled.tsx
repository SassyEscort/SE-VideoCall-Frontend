import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const VerificationHeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: theme.spacing(9),
  paddingTop: '21px',
  paddingBottom: '21px',
  [theme.breakpoints.up('md')]: {
    paddingTop: '15px',
    paddingBottom: '17px'
  }
}));

export const UINewTypographyBox = styled(Box)(({ theme }) => ({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const ImageBox = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '40px'
  },
  [theme.breakpoints.up('sm')]: {
    height: '40px'
  }
}));
