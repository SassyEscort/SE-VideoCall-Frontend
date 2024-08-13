'use client';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const StepTwoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  flexDirection: 'column',
  width: '100%',
  maxWidth: '824px',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  },
  [theme.breakpoints.only('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  }
}));

export const StepTwoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '24px 16px',
  flexDirection: 'column',
  gap: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
  backgroundColor: theme.palette.secondary[500]
}));

export const StepTwoInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '24px 16px',
  flexDirection: 'column',
  gap: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
  backgroundColor: theme.palette.secondary[500]
}));

export const StepTwoInputOuterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  justifyContent: 'center',
  width: '100%'
}));

export const ActionButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: '#07030E',
  borderRadius: theme.spacing(2),
  position: 'sticky',
  bottom: -1,
  right: 0
}));

export const DateOfBirthMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  flexDirection: 'column',
  width: '100%',
  maxWidth: 390,
  height: '100%',
  maxHeight: 127
}));

export const StepTwoInputOuterMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  justifyContent: 'flex-start',
  width: '100%',
  maxWidth: theme.spacing(48.75),
  height: '100%',
  maxHeight: theme.spacing(16)
}));

export const StepOneContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(4)
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(4)
  }
}));

export const VerificationUITypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '20px !important',
  lineHeight: '28px !important'
}));

export const VerificationHeaderText = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px !important',
  lineHeight: '25.6px !important'
}));

export const StepTwoMainConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2.5),
    flexDirection: 'column'
  }
}));

export const FooterBtnConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '824px',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  },
  [theme.breakpoints.only('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  }
}));

export const EditVerificationBtnBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  cursor: 'pointer',
  flexDirection: 'row',
  '@media (max-width:320px)': {
    flexDirection: 'column'
  }
}));
