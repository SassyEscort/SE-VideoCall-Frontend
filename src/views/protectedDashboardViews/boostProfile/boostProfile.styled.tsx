import { Box, Dialog, Divider, styled } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const BoostProfileMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  flexDirection: 'column',
  width: '100%',
  maxWidth: '600px',
  alignItems: 'center'
}));

export const BoostProfileTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center'
}));

export const BoostProfileMissedCallTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    gap: theme.spacing(4),
    flexDirection: 'column'
  }
}));

export const BoostProfileMissCallBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  width: '100%',
  maxWidth: '150px',
  alignItems: 'center'
}));

export const BoostProfileDialogConatiner = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.secondary[800],
    borderRadius: '12px',
    maxWidth: '648px',
    height: 'auto',
    border: '1px solid',
    borderColor: theme.palette.primary[700]
  },
  '& .MuiDialog-container': {
    backdropFilter: 'blur(24px)'
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiDialog-paper': {
      backgroundColor: 'transparent'
    }
  }
}));

export const UINewTypographyMissedCall = styled(UINewTypography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 800,
  lineHeight: '21px',
  color: theme.palette.text.primary
}));

export const UINewTypographyMissedCallBox = styled(UINewTypography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '21px',
  color: theme.palette.secondary[700],
  display: 'inline-block',
  position: 'relative',
  right: theme.spacing(1)
}));

export const SupBox = styled('sup')(({ theme }) => ({
  display: 'inline-block',
  width: '13px',
  height: '21px',
  fontSize: '12px',
  fontWeight: 800,
  bottom: '6px',
  position: 'relative',
  color: theme.palette.text.primary
}));

export const DividerMainBox = styled(Divider)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  display: 'block',
  borderColor: theme.palette.primary[700],
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

export const BoostBox = styled(Box)(() => ({
  padding: '32px 24px'
}));

export const BoostProfileBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
  flexDirection: 'column',
  alignItems: 'center',
  padddingRight: theme.spacing(2),
  padddingLeft: theme.spacing(2)
}));

export const BoostProfileModelBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  flexDirection: 'column'
}));

export const UINewTypographySuccessBoost = styled(UINewTypography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 700,
  lineHeight: '43.2px',
  textAlign: 'center'
}));

export const FirstBoxContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4)
}));

export const MainChildContainerBoost = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'row',
  marginTop: theme.spacing(7),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  gap: theme.spacing(1.5)
}));

export const BoxMainBoost = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left'
}));

export const UINewTypographyCondition = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '19.2px',
  whiteSpace: 'nowrap',
  '@media (max-width: 320px)': {
    whiteSpace: 'normal'
  }
}));

export const BoxImageBackgroundBoost = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '64px',
  minHeight: '64px',
  height: '100%',
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
  maxWidth: '44px',
  minHeight: '44px',
  height: '100%',
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
  },
  textAlign: 'left',
  width: '100%'
}));

export const SeconBoxContainerBoost = styled(Box)(() => ({
  width: '100%',
  maxWidth: '314px'
  // textAlign: 'left'
}));

export const SecondBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(7.75)
}));

export const MainBoostButtonBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  paddingLeft: theme.spacing(3),
  marginBlock: theme.spacing(4)
}));

export const SecondBoostButtonBox = styled(Box)(() => ({
  width: '100%',
  maxWidth: '193px',
  position: 'relative'
}));

export const PaidFireImageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(6),
  gap: theme.spacing(2),
  width: '100%'
}));

export const MainBoxBorder = styled(Box)(() => ({
  padding: '40px',
  border: '1px solid #D4D3D63D',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '306px',
  height: '272px',
  textAlign: 'left'
}));

export const PackageTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 500,
  lineHeight: '33.6px',
  color: theme.palette.text.secondary,
  textWrap: 'nowrap'
}));

export const BoostSucessBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: theme.spacing(4),
  flexDirection: 'column',
  alignItems: 'center'
}));

export const BoostSuccessBoxMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  alignItems: 'center'
}));

export const BoostSuccessBoxImage = styled(Box)(() => ({
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  maxWidth: '109px',
  height: 'auto',
  minHeight: '150px'
}));

export const BoostMultipleBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7)
}));

export const BoostMultipleFreeBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7),
  display: 'flex',
  flexDirection: 'column'
}));

export const PackageFreeTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: '30px',
  color: theme.palette.text.secondary
}));
