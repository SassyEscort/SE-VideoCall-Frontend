'use client';
import { Switch } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const SideBarMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: theme.spacing(4),
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: theme.spacing(1)
}));

export const SideBarFirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const SideBarSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const MainBoxAvailability = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1.5)
}));

export const MainBoxSwitch = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(0.75)
}));

export const SideBarThirdBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const SideBarCircleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  border: '1px solid',
  borderRadius: '50%',
  width: '100%',
  minWidth: '48px',
  height: '100%',
  minHeight: '48px',
  backgroundColor: theme.palette.secondary[700],
  borderColor: theme.palette.secondary[700],
  position: 'relative'
}));

export const SideBarCircleBoxHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  border: '1px solid',
  borderRadius: '50%',
  width: '100%',
  minWidth: '24px',
  height: '100%',
  minHeight: '24px',
  backgroundColor: theme.palette.secondary[700],
  borderColor: theme.palette.secondary[700],
  position: 'relative'
}));

export const SideBarCircleTextBox = styled(UINewTypography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 500,
  lineHeight: '38.4px',
  color: theme.palette.common.white,
  position: 'absolute',
  textAlign: 'center'
}));

export const SiderBarCircleTextBoxHeader = styled(UINewTypography)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '14.4px',
  color: theme.palette.common.white,
  position: 'absolute',
  textAlign: 'center'
}));

export const SiderBarSecondTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '104px',
  heightL: '100%',
  maxHeight: '52px',
  gap: theme.spacing(2)
}));

export const SwitchBox = styled(Switch)(({ theme }) => ({
  width: 30,
  height: 19,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    transitionDuration: '300ms',
    '& .MuiTouchRipple-root': {
      height: 1.5,
      width: 1.5,
      left: '2px',
      top: '1.5px'
    },
    '&.Mui-checked': {
      border: 'none',
      transform: 'translateX(12px)',
      '& + .MuiSwitch-track': {
        border: 'none',
        backgroundColor: '#79E02833',
        opacity: 1
      },
      '&.MuiSwitch-switchBase .MuiSwitch-thumb': {
        boxShadow: 'none',
        height: 12,
        width: 12,
        backgroundColor: theme.palette.success[100]
      }
    }
  },
  '& .MuiSwitch-thumb': {
    position: 'relative',
    backgroundColor: theme.palette.text.primary,
    marginLeft: '-4px',
    bottom: '6px',
    width: 12,
    height: 12
  },
  '& .MuiSwitch-track': {
    border: '3px solid',
    borderColor: theme.palette.text.disabled,
    borderRadius: theme.spacing(1.5),
    backgroundColor: 'secondary.light',
    opacity: 1
  }
}));

export const SwitchText = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const StartView = styled(Box)(({ theme }) => ({
  display: 'flex'
}));

export const TextViewStartBottom = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}));
