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
      fontSize: '22px',
      lineHeight: '140%',
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
  }
}));

export default UINewTypography;
