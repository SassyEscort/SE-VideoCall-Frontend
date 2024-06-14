'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';

export const FAQTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    lineHeight: '32px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '24px',
    lineHeight: '30px'
  }
}));

export const HelpAndSupportMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(7)
}));

export const HelpAndSupportSubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(7)
}));

export const HeaderTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '433px',
  height: '100%',
  maxHeight: '48px'
}));

export const TextFirstBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '362px',
  height: '100%',
  maxHeight: '135px',
  borderRadius: theme.spacing(1),
  padding: '31px 24px',
  backgroundColor: theme.palette.secondary[500]
}));

export const TextSecondBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '222px',
  height: '100%',
  maxHeight: '72px',
  gap: theme.spacing(0.5)
}));

export const ButtonContainer = styled(UIThemeButton)(({ theme }) => ({
  width: '100%',
  maxWidth: '153px',
  height: '100%',
  maxHeight: '48px',
  borderRadius: theme.spacing(1),
  padding: '12px 32px'
}));

export const MobileBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row'
  }
}));
