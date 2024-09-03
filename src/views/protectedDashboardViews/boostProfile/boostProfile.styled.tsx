import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const FirstBoxContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4)
}));

export const MainChildContainerBoost = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center'
}));

export const BoxMainBoost = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const BoxImageBackgroundBoost = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '94px',
  height: '100%',
  minHeight: '94px',
  border: '1px solid #601244',
  borderRadius: '50%',
  backgroundColor: '#601244',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '72px',
    minHeight: '72px'
  }
}));

export const BoxImageBackgroundChildBoost = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '64px',
  height: '100%',
  minHeight: '64px',
  border: '1px solid #FF68C0',
  borderRadius: '50%',
  backgroundColor: '#FF68C0',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '49px',
    minHeight: '49px'
  }
}));

export const FirstTextBoostTyporaphy = styled(UINewTypography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2)
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(2.75)
  }
}));

export const SeconBoxContainerBoost = styled(Box)(() => ({
  width: '100%',
  maxWidth: '314px'
}));

export const SecondBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(7.75)
}));

export const MainBoostButtonBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBlock: theme.spacing(4)
}));

export const SecondBoostButtonBox = styled(Box)(() => ({
  width: '100%',
  maxWidth: '193px',
  position: 'relative'
}));
