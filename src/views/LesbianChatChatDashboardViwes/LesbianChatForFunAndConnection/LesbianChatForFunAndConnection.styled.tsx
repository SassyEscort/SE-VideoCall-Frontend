import Box from '@mui/material/Box';
import styled from '@mui/system/styled';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const LesbianAndConnectionMainContainer = styled(Box)(({ theme }) => ({
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

export const SexyChatAtFingertipsRotateChipContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary[400],
  borderRadius: theme.spacing(1.5),
  rotate: '356deg',
  width: 'fit-content',
  paddingBlock: theme.spacing(0.5),
  paddingInline: theme.spacing(1.25)
}));

export const LesbianAndConnectionInfoContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '361px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const LesbianAndConnectionInfoMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6.875),
  alignItems: 'center'
}));

export const SexyChatAtFingertipsTitleStyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.25),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'start',
    flexDirection: 'row'
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'start',
    flexDirection: 'column'
  }
}));

export const LesbianAndConnectionContainer = styled(Box)(({ theme }) => ({
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

export const LesbianAndConnectionTitleTypography = styled(UINewTypography)(({ theme }) => ({
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

export const LesbianAndConnectionSubTitleTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '20px',
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

export const ChatSubTitlePointTypographySubTitlePointTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: '34.4px',
  color: theme.palette.white.main,
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    lineHeight: '30px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
    lineHeight: '28px'
  }
}));

export const LesbianAndConnectionDescriptionTitleTypography = styled(UINewTypography)(({ theme }) => ({
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

export const LesbianAndConnectionDescriptionSubTitleTypography = styled(UINewTypography)(({ theme }) => ({
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
