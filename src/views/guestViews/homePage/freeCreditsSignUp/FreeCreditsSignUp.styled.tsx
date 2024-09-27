import { Dialog, DialogTitle, styled, Typography } from '@mui/material';
import Box from '@mui/system/Box';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';

export const DialogTitleBox = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  height: '100%',
  maxHeight: '274px'
}));

export const DialogContentMain = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundImage: 'url(/images/home/free-credit-signup-img.webp)',
    borderRadius: '12px',
    border: 'solid 1px #FF68C0A3',
    width: '100%',
    maxWidth: '665px',
    height: '100%',
    maxHeight: '485px',
    position: 'relative',
    zIndex: 5
  },
  '& .MuiDialog-container': {
    backgroundColor: '#07030e99 !important',
    backdropFilter: 'blur(24px)'
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiDialog-paper': {
      border: 'solid 0px'
    },
    '& .MuiDialog-container': {
      backgroundColor: '#07030E'
    }
  }
}));

export const FreeCreditSignupMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  position: 'relative'
}));

export const ImageBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  position: 'relative',
  top: -'26px'
}));

export const HeaderCloseButtonBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'end',
  position: 'absolute'
}));

export const TextMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

export const TextInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  alignItems: 'center'
}));

export const TitleTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  alignItems: 'center'
}));

export const TitleTextInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center'
}));

export const DescriptionTextBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '332px',
  textAlign: 'center'
}));

export const ButtonContainer = styled(UIThemeShadowButton)(({ theme }) => ({
  width: '100%',
  maxWidth: '232px',
  whiteSpace: 'nowrap',
  '&.MuiButtonBase-root': {
    height: '51px'
  }
}));

export const HeaderTextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: '700',
  lineHeight: '44.8px',
  background: 'linear-gradient(90deg, #FBA631, #FFFFFF)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
}));
