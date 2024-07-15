import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const TextContainerMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  Width: '100%',
  maxWidth: 1244,
  textAlign: 'center',
  alignItems: 'center',
  position: 'absolute',
  zIndex: 3,
  top: 64,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    top: 40
  }
}));

export const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(30, 8, 21, 1)',
  overflow: 'hidden',
  width: '100%',
  height: 768,
  alignItems: 'end',
  position: 'relative',
  [theme.breakpoints.only('xs')]: {
    height: 762
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '96px'
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: '120px'
  }
}));

export const BannerImg = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  [theme.breakpoints.down('lg')]: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    position: 'absolute'
  }
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  width: '100%',
  maxWidth: '600px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '41.6px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '57.6px'
  }
}));

export const SubTitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary[100],
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '25.6px',
    paddingLeft: '34px',
    paddingRight: '34px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '32.6px'
  }
}));
