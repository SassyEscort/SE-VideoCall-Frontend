import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';
interface MainImagContainerProps {
  src: string;
}

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

export const MainImagContainer = styled(Box)<MainImagContainerProps>(({ theme, src }) => ({
  display: 'flex',
  height: '100%',
  borderRadius: theme.spacing(1),
  border: '1px solid',
  borderColor: theme.palette.secondary[900],
  width: '100%',
  background: `linear-gradient(rgba(7, 3, 14, 0.56), rgba(7, 3, 14, 0.56)), url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '325px',
  '@media (max-width: 320px)': {
    minWidth: '290px'
  },
  '& .mui-1dcp0mw-MuiGrid-root>.MuiGrid-item': {
    padding: 0
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '300px'
  },
  [theme.breakpoints.up('sm')]: {
    minWidth: '305px'
  }
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
  zIndex: 1,
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

export const BoostFireImagContainer = styled('img')(({ theme }) => ({
  zIndex: 10,
  left: '18px',
  position: 'absolute',
  bottom: '-96px',
  '@media (min-width: 320px)': {
    left: '0px'
  },
  '@media (min-width: 375px)': {
    left: '20px'
  },
  '@media (min-width: 425px)': {
    left: '40px'
  },
  '@media (min-width: 768px)': {
    left: '20px'
  },
  [theme.breakpoints.up('md')]: {
    left: '10px'
  },
  [theme.breakpoints.up('lg')]: {
    left: '0px'
  }
}));

export const FreeBoostTextBoxContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '-72px',
  left: '50px',
  '@media (min-width: 320px)': {
    left: '30px'
  },
  '@media (min-width: 375px)': {
    left: '50px'
  },
  '@media (min-width: 425px)': {
    left: '70px'
  },
  '@media (min-width: 768px)': {
    left: '50px'
  },
  [theme.breakpoints.up('md')]: {
    left: '40px'
  },
  [theme.breakpoints.up('lg')]: {
    left: '30px'
  }
}));
