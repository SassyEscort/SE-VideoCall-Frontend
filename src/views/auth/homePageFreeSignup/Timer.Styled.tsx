'use client';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Divider from '@mui/material/Divider';

export const TimeMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  gap: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2)
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(4)
  }
}));

export const TimeDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexDirection: 'column',
  width: '64px',
  position: 'relative'
}));

export const RemianingTime = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FF68C0',
  color: theme.palette.common.white,
  textShadow: '0px 10px 6px rgba(0, 0, 0, 0.5)',
  boxShadow: '0px 0px 20px 4px rgba(255, 104, 192, 0.5)',
  [theme.breakpoints.down('sm')]: {
    height: '44px',
    width: '48px'
  },
  [theme.breakpoints.up('sm')]: {
    height: '59.4px',
    width: '64px'
  }
}));

export const TimeTypo = styled(UINewTypography)(() => ({
  fontSize: '29.09px',
  fontWeight: 800,
  lineHeight: '39.73px',
  zIndex: 1
}));
export const TimerDivider = styled(Divider)(({ theme }) => ({
  position: 'absolute',
  border: '2px solid',
  color: '#40172FBF',
  [theme.breakpoints.down('sm')]: {
    top: '31%',
    width: '48px'
  },
  [theme.breakpoints.up('sm')]: {
    top: '35%',
    width: '64px'
  }
}));

export const TimeTitle = styled(UINewTypography)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 300,
  lineHeight: '16.39px',
  color: theme.palette.common.white,
  textTransform: 'uppercase'
}));
