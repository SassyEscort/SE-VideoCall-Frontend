'use client';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';

export const ModelMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: '760px',
  height: '100%',
  border: '1px solid #07030E80',
  borderRadius: '24px',
  backgroundColor: 'rgba(7, 3, 14, 0.5)',
  backdropFilter: 'blur(24px)',
  padding: '62px 100px 62px 100px',
  gap: theme.spacing(6),
  paddingTop: theme.spacing(7.75),
  paddingRight: theme.spacing(12.5),
  paddingBottom: theme.spacing(7.75),
  paddingLeft: theme.spacing(12.5)
}));

export const ModelInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  gap: theme.spacing(5),
  alignItems: 'center'
}));

export const HeadingTextMainBoxContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

export const JoinForFreeTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 600,
  lineHeight: '64px',
  color: theme.palette.primary[100]
}));

export const GetFreeCallTextTypography = styled(Typography)(() => ({
  fontSize: '48px',
  fontWeight: 500,
  lineHeight: '64px',
  background: 'linear-gradient(90deg, #FFE38C, #CCA633)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}));

export const InputFiledMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const InputFiledInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const ButtonBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center'
}));

export const ButtonInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  textAlign: 'center'
}));

export const LoginTextBoxContainer = styled(Box)(({ theme }) => ({
  fontWeight: 800,
  color: theme.palette.common.white,
  textDecoration: 'underline',
  cursor: 'pointer'
}));

export const FooterMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const BenefitsTextTypography = styled(Typography)(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
  fontWeight: 800,
  lineHeight: '64px',
  whiteSpace: 'nowrap',
  color: '#FFFFFFCC'
}));

export const DescriptionTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3)
}));

export const DescriptionTextInnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  width: '304px'
}));

export const DescriptionTextInner2Box = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  width: '363px'
}));

export const DescriptionTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2)
}));

export const DescriptionTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: '32.7px',
  whiteSpace: 'nowrap',
  color: theme.palette.common.white
}));
