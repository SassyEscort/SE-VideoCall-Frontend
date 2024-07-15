import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const CreditsMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const CreditsSubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6)
}));

export const TextMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const FirsTextMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: theme.spacing(1.5)
}));

export const FirsTextSubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: '131px',
  height: '100%',
  maxHeight: '22px'
}));

export const SecondTextSubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '657px',
  height: '100%',
  maxHeight: '96px'
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
  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between'
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
  borderRadius: '8px',
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
  borderRadius: '4px'
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

export const TopTextContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '5%',
  left: '5%',
  paddingBottom: theme.spacing(0.5),
  paddingRight: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  borderRadius: '4px',
  backgroundColor: 'primary.100',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const BuyCreditsText = styled(UINewTypography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
    fontWeight: 400,
    lineHeight: '32px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '48px'
  }
}));

export const CreditCardText = styled(UINewTypography)(({ theme }) => ({
  fontSize: '20px !important',
  fontWeight: '500 !important',
  lineHeight: '24px !important',
  marginLeft: '6px'
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

export const CreditBestValue = styled(UINewTypography)(({ theme }) => ({
  width: '92px',
  height: '30px',
  borderRadius: '4px',
  backgroundColor: '#D12288',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const CreditMostPopular = styled(UINewTypography)(({ theme }) => ({
  width: '110px',
  height: '30px',
  borderRadius: '4px',
  backgroundColor: '#D12288',
  fontSize: '14px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const CancelCreditValue = styled(UINewTypography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 500,
  lineHeight: '28px',
  textDecoration: 'line-through',
  width: '76px',
  height: '29px',
  marginLeft: '20px'
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

export const SecondBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1)
}));
