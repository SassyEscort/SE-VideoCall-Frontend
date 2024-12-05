import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';

export const DirtyTalksBanner = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(30, 8, 21, 1)',
  overflow: 'hidden',
  width: '100%',
  height: 830,
  alignItems: 'end',
  position: 'relative',
  [theme.breakpoints.only('xs')]: {
    height: 762
  }
}));

export const DirtyTalksTextContainerMain = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
}));

export const DirtyTalksTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  Width: '100%',
  height: '100%',
  maxWidth: 1440,
  textAlign: 'center',
  alignItems: 'center',
  position: 'absolute',
  zIndex: 1,
  width: '100%'
}));

export const DirtyTalksSubTitleText = styled(Typography)(({ theme }) => ({
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
    lineHeight: '24px'
  }
}));

export const DirtyTalksTitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  width: '100%',
  maxWidth: '846px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '41.6px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '55px',
    fontWeight: 700,
    lineHeight: '66px'
  }
}));

export const DirtyTalksBannerImg = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/images/camtocamDashboard/cam-main-new-min.avif)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  [theme.breakpoints.down('lg')]: {
    backgroundRepeat: 'no-repeat',
    position: 'absolute'
  }
}));

export const DirtyTalksBannerInnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  [theme.breakpoints.only('xs')]: {
    marginTop: theme.spacing(4)
  },
  [theme.breakpoints.only('sm')]: {
    marginTop: theme.spacing(5)
  }
}));

export const DirtyTalksBannerInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center'
}));

export const DirtyTalksBannerUIThemeShadowButton = styled(UIThemeShadowButton)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: 0
  }
}));
