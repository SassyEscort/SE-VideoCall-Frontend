import { Box, Button, DialogTitle, Drawer, styled } from '@mui/material';

import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';

export const DialogTitleBox = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}));

export const DialogContentSecondBox = styled(Box)(({ theme }) => ({
  gap: theme.spacing(1.25),
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}));

export const DialogContentBoxQuestion = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  paddingLeft: theme.spacing(2)
}));

export const DialogContentBoxButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '302px',
  height: '100%',
  maxHeight: '44px'
}));

export const DialogContentBoxUIThemeButton = styled(UIThemeButton)(() => ({
  width: '100%',
  maxWidth: '231px',
  backgroundColor: '#D4D3D6 !important'
}));

export const DialogContentMain = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    borderRadius: '12px',
    width: '100%',
    maxWidth: '346px',
    height: 'auto',
    background: 'linear-gradient(90deg, #FECD3D 0%, #FFF1C6 44%, #FF68C0 100%)',
    scrollbarWidth: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  '& .MuiDrawer-container': {
    backgroundColor: '#07030e99 !important',
    backdropFilter: 'blur(24px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiDrawer-paper': {
      border: 'solid 0px',
      width: '90%',
      maxWidth: '346px',
      margin: 'auto',
      background: 'linear-gradient(90deg, #FECD3D 0%, #FFF1C6 44%, #FF68C0 100%)'
    },
    '& .MuiDrawer-container': {
      backgroundColor: '#07030E',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
}));

export const UINewTypographyDollar = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '30px',
  color: theme.palette.text.secondary
}));
export const UINewTypographyAmount = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '30px',
  color: theme.palette.text.secondary
}));

export const UINewTypographyWithDrawButtonText = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '19.2px',
  color: theme.palette.primary[200]
}));

export const UINewTypographyWithDrawRecentWithdrawls = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '17.5px',
  color: theme.palette.secondary[200]
}));

export const UINewTypographyWithDrawButtonText2 = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '19.2px',
  color: theme.palette.text.disabled,
  backgroundColor: theme.palette.primary[700],
  borderColor: theme.palette.primary[700]
}));

export const UINewTypographyFREECredits = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '44.8px',
  background: 'linear-gradient(90deg, #333333 0%, #775F17 50%, #530633 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  textAlign: 'center',
  '@media (max-width: 320px)': {
    fontSize: '23px'
  }
}));
export const UINewTypographyFREE = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '32px',
  lineHeight: '44.8px',
  background: 'linear-gradient(90deg, #333333 0%, #775F17 50%, #530633 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  '@media (max-width: 320px)': {
    fontSize: '23px'
  }
}));

export const UINewTypographyJoin = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '21.86px',
  textAlign: 'center',
  color: theme.palette.secondary.light,
  '@media (max-width: 320px)': {
    fontSize: '14px'
  }
}));

export const UINewTypographySign = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '19.2px',
  color: theme.palette.common.white,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  textWrap: 'nowrap',
  '@media (max-width: 320px)': {
    fontSize: '12px'
  }
}));

export const UINewTypographyOffer = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 400,
  fontStyle: 'italic',
  fontSize: '14px',
  lineHeight: '19.6px',
  letterSpacing: '0.3px',
  color: '#7C7C7CB2',
  textAlign: 'center'
}));

export const UINewTypographyOfferBox = styled(UINewTypography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.3),
  paddingBottom: theme.spacing(4.65875)
}));

export const ButtonBox = styled(Button)(({ theme }) => ({
  width: '100%',
  maxWidth: '232px',
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.primary['500'],
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary['500'],
    color: 'white'
  },
  '&.MuiButtonBase-root': {
    padding: '0px 0px'
  }
}));

export const JoinNowAndEnjoyAEREEVideoCallMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(3)
}));

export const ImageFirst = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '100px'
}));

export const ImageSecond = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '25.95px',
  height: '100%',
  maxHeight: '24.37px'
}));
