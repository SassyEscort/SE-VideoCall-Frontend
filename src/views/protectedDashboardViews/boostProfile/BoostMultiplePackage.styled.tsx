import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const BoostPackageMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const ImagSubContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '310px',
  height: 'auto',
  maxHeight: '325px',
  [theme.breakpoints.up('md')]: {
    flexBasis: 'calc(33.333% - 16px)'
  }
}));

export const MainImagContainer = styled('img')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  borderRadius: theme.spacing(1),
  border: '1px solid',
  borderColor: theme.palette.secondary[900]
}));

export const BoxFirstTextContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '75%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  paddingRight: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  borderRadius: theme.spacing(0.5),
  gap: theme.spacing(1)
}));

export const BoxSecondTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  paddingRight: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  borderRadius: theme.spacing(0.5),
  gap: theme.spacing(0.5)
}));

export const CreditCardImage = styled('img')(() => ({
  display: 'flex',
  width: '100%',
  height: '26px',
  maxWidth: '26px'
}));

export const DollarCreditText = styled(UINewTypography)(({ theme }) => ({
  fontSize: '40px',
  fontWeight: 800,
  lineHeight: '48px'
}));

export const CreditBuyText = styled(UINewTypography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center'
}));

export const FirstBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row'
  }
}));
