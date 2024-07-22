import { Box, Dialog, DialogContent, DialogTitle, styled } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
export const DialogTitleContainer = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 24px 20px 24px !important',
  [theme.breakpoints.down('sm')]: {
    padding: '20px 0px 20px 0px !important'
  }
}));

export const DialogContentBox = styled(DialogContent)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0)
  }
}));

export const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.625)
  },
  '@media (max-width: 320px)': {
    flexDirection: 'column'
  },
  '@media (max-width: 375px)': {
    flexDirection: 'column'
  }
}));

export const FirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  width: '100%'
}));

export const SecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const ThreeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const ButtonMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5),
    maxWidth: '175px'
  }
}));

export const VideoImage = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(1)
  }
}));

export const VideoCallButton = styled(UIThemeShadowButton)(({ theme }) => ({
  maxWidth: '100%',

  [theme.breakpoints.down('sm')]: {
    '&.MuiButtonBase-root': {
      height: '50px',
      width: '175px'
    }
  },
  [theme.breakpoints.up('sm')]: {
    '&.MuiButtonBase-root': {
      height: '44px'
    }
  }
}));

export const BoxImage = styled('img')(({ theme }) => ({
  height: '24px',
  width: '24',
  [theme.breakpoints.down('sm')]: {
    height: '20px',
    width: '20px'
  }
}));

export const ButtonText = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '19.2px',
  color: theme.palette.common.white,
  [theme.breakpoints.down('sm')]: {
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: '11.8px'
  }
}));

export const DialogBox = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.secondary[800],
    borderRadius: theme.spacing(1.5),
    border: 'solid 1px',
    borderColor: theme.palette.primary[700]
  },
  '& .MuiDialog-container': {
    backgroundColor: '#07030e99 !important',
    backdropFilter: 'blur(24px)'
  },
  '& .MuiPaper-root': {
    maxWidth: '634px'
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiDialog-paper': {
      border: 'solid 0px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiDialog-container': {
      backgroundColor: theme.palette.secondary['800']
    }
  }
}));

export const CreditsMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5)
}));

export const CreditsPriceBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));
