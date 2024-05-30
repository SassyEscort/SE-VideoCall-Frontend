import { Box, styled } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const AddBankDetailsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(4),
  gap: theme.spacing(8),
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '0px'
  }
}));

export const AddBankDetailsSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  width: '100%',
  maxWidth: '390px',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '14px',
    paddingRight: '14px'
  }
}));

export const InputMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const InputSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  [theme.breakpoints.down('sm')]: {
    backgroundColor: theme.palette.secondary['500'],
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderRadius: '12px'
  }
}));

export const InputBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(6)
}));

export const PayoutText = styled(UINewTypography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '14px'
  }
}));

export const AddBankDetail = styled(UINewTypography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0)
  }
}));
