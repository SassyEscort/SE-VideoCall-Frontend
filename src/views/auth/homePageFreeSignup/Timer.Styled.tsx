'use client';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { Divider } from '@mui/material';
import { BoxProps } from '@mui/system';
import { LANGUAGES_TYPES } from 'constants/languageConstants';

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

export const TimeTypo = styled(UINewTypography)(({ theme }) => ({
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
interface UIStyledDotsProps extends BoxProps {
  language: string;
}

export const Dotes = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'language'
})<UIStyledDotsProps>(({ theme, language }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  border: '1px solid',
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.white,
  position: 'absolute',
  left: '50.5%',
  top: '30%',
  transform: 'translate(-80%, -80%)',
  '@media (max-width: 2560px)': {
    left: '54%',
    top: '90%',
    transform: 'translate(-50%, -93%)'
  },
  '@media (max-width: 1440px)': {
    left: '54%',
    top: '90%',
    transform: 'translate(-50%, -93%)'
  },
  '@media (max-width: 1024px)': {
    left: '54%',
    top: '90%',
    transform: 'translate(-50%, -93%)'
  },
  '@media (max-width: 768px)': {
    left: '50%',
    top: '90%',
    transform: 'translate(-50%, -93%)'
  },
  '@media (max-width: 767px)': {
    left: '50%',
    top: language === LANGUAGES_TYPES.EN ? '32.5%' : '33.5%',
    transform: 'translate(-50%, -93%)'
  },
  '@media (max-width: 425px)': {
    left: '50%',
    top: language === LANGUAGES_TYPES.EN ? '32.5%' : '32.5%',
    transform: 'translate(-50%, -93%)'
  },
  '@media (max-width: 375px)': {
    left: '50%',
    top: language === LANGUAGES_TYPES.EN ? '33.5%' : '36.5%',
    transform: 'translate(-50%, -92%)'
  },
  '@media (max-width: 320px)': {
    left: '50%',
    top: language === LANGUAGES_TYPES.EN ? '33.5%' : '36.5%',
    transform: 'translate(-50%, -90%)'
  }
}));

export const DotesSecond = styled(Box)(({ theme }) => ({
  width: '8px',
  height: '8px',
  color: theme.palette.common.white,
  borderRadius: '50px',
  border: '1px solid',
  backgroundColor: theme.palette.common.white
}));
