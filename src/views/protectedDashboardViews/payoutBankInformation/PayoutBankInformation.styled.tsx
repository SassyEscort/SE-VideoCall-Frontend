import { Box, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const MainConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: theme.spacing(4),
  gap: theme.spacing(7),
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
}));

export const SecondConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%'
}));

export const ThreeConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: theme.spacing(6)
}));

export const NoBoxInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '484px',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    maxWidth: '296px'
  }
}));

export const AddBoxDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));

export const AddIconAdd = styled(AddIcon)(() => ({
  width: '20px',
  height: '20px'
}));

export const PleaseAddYour = styled(UINewTypography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    fontSize: '14px !important'
  }
}));

export const Payout = styled(UINewTypography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '15px'
  }
}));

export const NoBankInformationAdded = styled(UINewTypography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px !important'
  }
}));
