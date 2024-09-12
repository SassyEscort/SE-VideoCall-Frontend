'use client';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const InstructionMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '627.39px',
  height: '100%',
  gap: theme.spacing(4)
}));

export const HeaderTextContainer = styled(UINewTypography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary
}));

export const InstructionSubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(8)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(6)
  }
}));

export const FirstBoxMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(4)
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    gap: theme.spacing(12)
  }
}));

export const FirstBoxFirstContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '266px',
  gap: theme.spacing(3),
  flexDirection: 'column',
  alignItems: 'center'
}));

export const FirstBoxSecondContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '238px',
  height: '100%',
  maxHeight: '96px',
  gap: theme.spacing(2),
  textAlign: 'center',
  alignItems: 'center'
}));

export const FirstImageBlur = styled('img')(() => ({
  height: '100%',
  maxHeight: '179.41px',
  borderRadius: '8px',
  filter: 'blur(3px)'
}));

export const FirstImageWithoutBlur = styled('img')(() => ({
  height: '100%',
  maxHeight: '179.41px',
  borderRadius: '8px'
}));

export const SecondImage = styled('img')(() => ({
  width: '100%',
  maxWidth: '32px',
  height: '100%',
  maxHeight: '32px'
}));

export const TypographyBox = styled(Box)(() => ({
  display: 'flex',
  height: '100%',
  maxHeight: '48px'
}));

export const SomeInstructionsUI = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px !important',
  lineHeight: '19.2px !important',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center'
  },
  '@media (max-width: 320px)': {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

export const TextDetailsBoxContainer = styled(Box)(({ theme }) => ({
  '@media (max-width: 320px)': {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));
