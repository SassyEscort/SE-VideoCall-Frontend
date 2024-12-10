import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';

export const NudeChatBanner = styled(Box)(({ theme }) => ({
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

export const NudeChatTextContainerMain = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
}));

export const NudeChatTextContainer = styled(Box)(({ theme }) => ({
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

export const NudeChatSubTitleText = styled(Typography)(({ theme }) => ({
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

export const NudeChatTitleText = styled(Typography)(({ theme }) => ({
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

export const NudeChatBannerImg = styled(Box)(({ theme }) => ({
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

export const NudeChatBannerInnerBox = styled(Box)(({ theme }) => ({
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

export const NudeChatBannerInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center'
}));

export const NudeChatBannerUIThemeShadowButton = styled(UIThemeShadowButton)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: 0
  }
}));
