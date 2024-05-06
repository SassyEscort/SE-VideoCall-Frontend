import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '85px',
  width: '100%',
  height: '100%',
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    gap: '48px',
    flexDirection: 'column'
  },
  [theme.breakpoints.up('lg')]: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  '&.last-child-box': {
    flex: 'initial',
    alignItems: 'initial',
    justifyContent: 'initial'
  }
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
  display: 'inline',
  fontsize: theme.typography.h1.fontSize,
  fontWeight: 700,
  lineHeight: '64.8px'
}));

export const InlineBox = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  flexFlow: 'column-wrap',
  wordBreak: 'break-word',
  display: 'inline',
  [theme.breakpoints.down('sm')]: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: '50px',
    textAlign: 'center',
    textWrap: 'nowrap'
  },
  [theme.breakpoints.down(330)]: {
    textWrap: 'wrap'
  },
  [theme.breakpoints.only('sm')]: {
    textAlign: 'left'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: 48,
    fontWeight: 700,
    lineHeight: '64.8px'
  }
}));

export const TypographyBox = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  width: '100%',
  color: theme.palette.secondary[100],
  [theme.breakpoints.down('sm')]: {
    maxWidth: '293px',
    fontSize: 14,
    lineHeight: '24px',
    textAlign: '-webkit-center',
    fontWeight: 400
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: 20,
    lineHeight: '32px'
  }
}));

export const Banner = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/images/NewThemeImages/home/banner-bg.webp)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 267,
  justifyContent: 'center',
  width: '100%',
  marginBottom: theme.spacing(7),
  [theme.breakpoints.down('sm')]: {
    height: 450,
    marginBottom: theme.spacing(4)
  }
}));

export const InlineBoxRelative = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  color: theme.palette.primary[600],
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}));

export const HomeExploreBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: 320,
  gap: theme.spacing(1.5),
  [theme.breakpoints.only('sm')]: {
    maxWidth: 385,
    gap: theme.spacing(2)
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: 425,
    gap: theme.spacing(2)
  }
}));
