'use client';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const UINewTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-h1': {
    [theme.breakpoints.down('md')]: {
      fontSize: '36px',
      lineHeight: '140%',
      letterSpacing: '-0.5px'
    }
  },
  '&.MuiTypography-h2': {
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
      lineHeight: '130%',
      letterSpacing: '-0.5px'
    }
  },
  '&.MuiTypography-h3': {
    [theme.breakpoints.down('md')]: {
      fontSize: '26px',
      lineHeight: '140%',
      letterSpacing: '-0.5px'
    }
  },
  '&.MuiTypography-h5': {
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '19.2px',
      fontWeight: '700',
      letterSpacing: '0.5px'
    }
  },

  '&.MuiTypography-h6': {
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      lineHeight: '140%',
      letterSpacing: '0.5px'
    }
  },
  '&.MuiTypography-h6Mob': {
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '160%',
      fontWeight: '400',
      letterSpacing: '0.5px'
    }
  },
  '&.MuiTypography-bodySemiBold': {
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '16.8px',
      fontWeight: '600',
      letterSpacing: '0.5px',
      textWrap: 'no-wrap'
    }
  },
  '&.MuiTypography-newTitle': {
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '19.2px',
      fontWeight: '600',
      letterSpacing: '0.5px'
    }
  },
  '&.MuiTypography-SubtitleSmallMedium': {
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '19.6px',
      fontWeight: '500',
      letterSpacing: '0.5px'
    }
  },
  '&.MuiTypography-buttonLargeBold': {
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '16.8px',
      fontWeight: '700',
      letterSpacing: '0.5px'
    }
  },
  '&.MuiTypography-MediumSemiBold': {
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: '43.2px'
    }
  },
  '&.MuiTypography-subtitle': {
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '25.6px'
    }
  }
}));

export default UINewTypography;
