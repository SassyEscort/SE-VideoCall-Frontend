import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const ParentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export const VerificationStep2MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(4),
  gap: theme.spacing(7),
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
}));

export const VerificationStep2MainContainerSecond = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

export const VerificationStep2MainContainerThree = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  width: '100%',
  maxWidth: '792px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.secondary['500'],
    paddingBottom: theme.spacing(3),
    gap: theme.spacing(2.5),
    borderRadius: '12px'
  }
}));

export const InputTypeBoxOne = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

export const InputTypeBoxSecond = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

export const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '824px',

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export const BackButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  width: '100%',
  maxWidth: '130px'
}));

export const UploaddocumentsButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  width: '100%',
  maxWidth: '133px'
}));

export const UINewTypographyTextMenuItem = styled(UINewTypography)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2),
  width: '100%',
  maxWidth: '390px'
}));

export const VerificationTwoHeaderText = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px !important',
  lineHeight: '25.6px !important'
}));

export const VerificationButtonText = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px !important',
  lineHeight: '19.2px !important'
}));
