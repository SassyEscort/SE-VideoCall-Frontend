'use client';
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
  lineHeight: '38.4px',
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
