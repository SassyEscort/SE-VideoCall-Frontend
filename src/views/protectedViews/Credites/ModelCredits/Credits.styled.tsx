import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const CreditsMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const CreditsSubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const HeadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  justifyContent: 'space-between'
}));

export const CreditsCloseIconContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end'
}));

export const NewUIIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'absolute',
  top: '22px',
  padding: '0',
  right: '20px'
}));

export const BalanceInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  paddingRight: theme.spacing(4.375)
}));

export const BalanceInfoBoxV2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(1.875)
}));

export const LoaderBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const ImagMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  gap: theme.spacing(3),
  flexWrap: 'wrap',
  overflow: 'hidden',
  marginTop: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between'
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(4)
  }
}));

export const ImagSubContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '299px',
  height: 'auto',
  minHeight: '325px',
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
  borderRadius: theme.spacing(0.5)
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

export const CreditCardText = styled(UINewTypography)(({ theme }) => ({
  fontSize: '20px !important',
  fontWeight: '500 !important',
  lineHeight: '24px !important',
  marginLeft: theme.spacing(0.75)
}));

export const CreditCardImage = styled('img')(() => ({
  display: 'flex',
  width: '100%',
  height: '16px',
  maxWidth: '16px'
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

export const OutOfCreditBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  width: '100%',
  paddingLeft: theme.spacing(2)
}));

export const OutOfCreditInnerBox = styled(Box)(() => ({
  width: '100%',
  maxWidth: '407px',
  textAlign: 'center'
}));
