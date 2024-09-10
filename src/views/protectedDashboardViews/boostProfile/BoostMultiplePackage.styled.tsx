import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const BoostPackageMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const ImagSubContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '310px',
  height: 'auto',
  maxHeight: '325px',
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    flexBasis: 'calc(33.333% - 16px)'
  }
}));

export const MainImagContainer = styled('img')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  borderRadius: theme.spacing(1),
  border: '1px solid',
  borderColor: theme.palette.secondary[900],
  width: '100%',
  minWidth: '306px'
}));

export const BoxFirstTextContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row'
  }
}));

export const HighlyAvailableButtonBoxBoost = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginTop: '-16px',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export const HighlyAvailableBoxBoost = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center'
  },
  width: '100%',
  position: 'relative'
}));

export const BoostProfileWorksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse'
  }
}));

export const PackageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  gap: theme.spacing(3),
  flexWrap: 'wrap',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between'
  }
}));
