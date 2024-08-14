import { Box, styled, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const MainConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: theme.spacing(4),
  gap: theme.spacing(7),
  paddingLeft: theme.spacing(3),
  width: '100%',
  maxWidth: '757px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: theme.spacing(6.125),
    paddingRight: theme.spacing(6.125),
    paddingTop: theme.spacing(0),
    gap: theme.spacing(1.375)
  }
}));

export const SecondConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: theme.spacing(17.3125),
  width: '100%',
  maxWidth: '484px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(0)
  }
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
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    maxWidth: '296px'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '484px'
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

export const NoBankInformationAdded = styled(Typography)(({ theme }) => ({
  textWrap: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px !important',
    display: 'flex',
    width: '100%',
    maxWidth: '320px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    whiteSpace: 'normal'
  },
  [theme.breakpoints.up('sm')]: {
    paddingInline: '55px'
  }
}));
