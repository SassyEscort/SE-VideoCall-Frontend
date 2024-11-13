import Box from '@mui/material/Box';
import styled from '@mui/system/styled';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const Cam2CamMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '853px',
  backgroundImage: 'url(/images/camtocamDashboard/camTocamBackground.webp)',
  paddingTop: theme.spacing(6),
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '1000px'
  },
  [theme.breakpoints.down('lg')]: {
    height: '700px'
  },
  [theme.breakpoints.down(425)]: {
    height: '800px'
  }
}));

export const BackGroundContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  backgroundImage: 'url(/images/camtocamDashboard/modalBannerBottom.webp)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'bottom'
}));

export const Cam2CamInnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  width: '100%',
  maxWidth: '933px',
  height: '100%',
  paddingInline: theme.spacing(1.87),
  color: theme.palette.white.main
}));

export const HeadingTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '64px',
  fontWeight: 800,
  background: 'linear-gradient(180deg, #FFFFFF 0%, #FF68C0 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  lineHeight: '84.48px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '60px'
  }
}));

export const SubtitleTypography = styled(UINewTypography)(() => ({
  fontSize: '16px',
  fontWeight: 400,
  lineWeight: '34.4px'
}));

export const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export const CamExperienceBannerInnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));
