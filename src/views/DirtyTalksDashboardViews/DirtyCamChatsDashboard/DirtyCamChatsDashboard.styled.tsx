import Box from '@mui/material/Box';
import styled from '@mui/system/styled';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const DirtyCamChartsMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 823,
  width: '100%',
  gap: theme.spacing(9),
  padding: theme.spacing(2),
  marginBlock: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    height: '100%',
    gap: theme.spacing(3)
  },
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(6),
    height: '100%',
    marginBlock: theme.spacing(4)
  }
}));

export const LightCirclesBox = styled(Box)(() => ({
  background: 'rgba(255, 255, 255, 1)',
  width: '87px',
  height: '87px',
  borderRadius: '50%',
  filter: 'blur(30px)',
  position: 'absolute',
  zIndex: '-1',
  top: '-20px',
  left: '-15px'
}));

export const PinkLightCirclesBox = styled(Box)(() => ({
  background: 'rgba(255, 104, 192, 1)',
  width: '87px',
  height: '87px',
  borderRadius: '50%',
  filter: 'blur(30px)',
  position: 'absolute',
  zIndex: '-1',
  top: '-20px',
  right: '-15px'
}));

export const DirtyCamChatsInfoContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '361px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const DirtyCamChatsInfoMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6.875),
  alignItems: 'center'
}));

export const DirtyCamChatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5.6),
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: 687,
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%'
  }
}));

export const DirtyCamChatsTitleTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 800,
  lineHeight: '72px',
  color: theme.palette.white.main,
  [theme.breakpoints.down('md')]: {
    fontSize: '40px',
    lineHeight: '60px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    lineHeight: '50px'
  }
}));

export const DirtyCamChatsSubTitleTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 700,
  lineHeight: '34.4px',
  color: theme.palette.white.main,
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
    lineHeight: '30px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    lineHeight: '28px'
  }
}));

export const DirtyCamChatsSubTitleTypographyContainer = styled(UINewTypography)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: 400,
  lineHeight: '34.4px',
  color: theme.palette.white.main,
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
    lineHeight: '30px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    lineHeight: '28px'
  }
}));

export const DirtyCamChatsDescriptionTitleTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: '27.32px',
  color: theme.palette.white.main,
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
    lineHeight: '24px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    lineHeight: '20px'
  }
}));

export const DirtyCamChatsDescriptionSubTitleTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 300,
  lineHeight: '21.86px',
  color: theme.palette.white.main,
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    lineHeight: '19px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    lineHeight: '17px'
  }
}));
