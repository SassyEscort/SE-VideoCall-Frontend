import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';

export const CamSexExperienceMainContainer = styled(Box)(() => ({
  backgroundImage: 'url(/images/camtocamDashboard/camTocamBackground.webp)',
  width: '100%'
}));

export const CamSexExperienceGridContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(8)
}));

export const CamSexExperienceInnerContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(3)
}));

export const CamSexExperienceBackgroundImageBox = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/images/camtocamDashboard/camToCamSexExperience.webp)',
  width: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up('xs')]: {
    height: '400px'
  },
  [theme.breakpoints.up('md')]: {
    height: '800px'
  }
}));

export const TypographyTitleBox = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  width: '100%',
  fontSize: 48,
  color: theme.palette.white.main,
  lineHeight: '68.16px'
}));

export const TypographySubtitleBox = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  width: '100%',
  fontSize: 20,
  color: theme.palette.white.main,
  lineHeight: '34.4px'
}));

export const TypographyGradiantSubtitleBox = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: 40,
  lineHeight: '52.8px',
  background: 'linear-gradient(180deg, #FFFFFF 0%, #FF68C0 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}));
