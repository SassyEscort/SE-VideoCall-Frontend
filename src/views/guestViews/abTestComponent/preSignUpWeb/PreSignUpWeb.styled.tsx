import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const PreSignUpWebMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse'
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column'
  }
}));

export const PreSignUpWebInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  width: '100%',
  height: '100%'
}));

export const PreSignUpMobileBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(4)
  }
}));

export const HeadingTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const HeadingTextTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
    fontWeight: 900,
    lineHeight: '36px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '100px',
    fontWeight: 900,
    lineHeight: '120px'
  }
}));

export const DescriptionTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '32px',
  color: theme.palette.common.white
}));

export const ButtonBoxContainer = styled(Button)(({ theme }) => ({
  borderRadius: '100px',
  width: '400px',
  height: '72px',
  gap: theme.spacing(1),
  backgroundColor: theme.palette.primary[100]
}));

export const ButtonTextTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    fontWeight: 800,
    lineHeight: '32px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '24px',
    fontWeight: 800,
    lineHeight: '32px'
  }
}));

export const ModelImageMainSwiperContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: '1240px'
  },
  [theme.breakpoints.up('sm')]: {
    width: '1240px !important'
  }
}));

export const ModelDetailsSwiperMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  alignItems: 'flex-start'
}));

export const TrendingBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5)
}));

export const TrendingNowTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '42px',
  color: theme.palette.common.white
}));

export const ModelDetailsSwiperInnerContainer = styled(Box)(() => ({
  display: 'flex',
  width: '1280px'
}));

export const SignUpTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 800,
  lineHeight: '32px',
  color: theme.palette.common.white
}));

export const SignupButtonBoxContainer = styled(Button)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  minWidth: '376px',
  height: '100%',
  minHeight: '72px',
  borderRadius: '100px',
  border: '2px solid #611441'
}));
