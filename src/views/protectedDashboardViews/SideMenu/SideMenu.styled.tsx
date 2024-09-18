'use client';
import { Switch } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const SiderBarMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: theme.spacing(4),
  width: '100%'
}));

export const SiderBarFirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const SiderBarSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  justifyContent: 'flex-end'
}));

export const SiderBarThiredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const SiderBarCircaleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  border: '1px solid',
  borderRadius: '50%',
  width: '100%',
  minWidth: '64px',
  height: '100%',
  minHeight: '64px',
  backgroundColor: theme.palette.secondary[700],
  borderColor: theme.palette.secondary[700],
  position: 'relative'
}));

export const SiderBarCircaleBoxHeader = styled(Box)(({ theme }) => ({
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

export const SiderBarCircaleTextBox = styled(UINewTypography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 500,
  lineHeight: '38.4px',
  color: theme.palette.common.white,
  position: 'absolute',
  textAlign: 'center'
}));

export const SiderBarCircaleTextBoxHeader = styled(UINewTypography)(({ theme }) => ({
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
  gap: theme.spacing(1)
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

export const SwicthText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const StartView = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginLeft: theme.spacing(-0.5)
}));

export const TextViewStartBottom = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}));
