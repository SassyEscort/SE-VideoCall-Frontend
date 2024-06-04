import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import theme from 'themes/theme';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '32px',
    paddingRight: '32px'
  }
}));

export const ChildContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6)
}));

export const ImageContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center'
}));

export const TypographyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  justifyContent: 'center',
  textAlign: 'center'
}));

export const TypographyContainer2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  justifyContent: 'center',
  textAlign: 'center'
}));

export const ImageContainerProfile = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '32px',
  marginTop: '56px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '12px',
    marginTop: '32px !important'
  }
}));

export const ProfileCreatedText = styled(UINewTypography)(() => ({
  fontSize: '30px !important',
  lineHeight: '42px !important',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px !important',
    lineHeight: '33.6px !important'
  }
}));

export const ProfileLiveText = styled(UINewTypography)(() => ({
  fontSize: '16px !important',
  lineHeight: '25.6px !important',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px !important',
    lineHeight: '22.4px !important'
  }
}));

export const GoToYourDashboardButton = styled(UINewTypography)(() => ({
  fontSize: '16px !important',
  lineHeight: '19.2px !important'
}));
