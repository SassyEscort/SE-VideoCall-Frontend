'use client';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';

export const LeftSideMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: '760px',
  height: '100%',
  border: '1px solid #07030E80',
  borderRadius: theme.spacing(3),
  backgroundColor: 'rgba(7, 3, 14, 0.5)',
  backdropFilter: 'blur(24px)',
  paddingTop: theme.spacing(5),
  paddingRight: theme.spacing(8),
  paddingBottom: theme.spacing(5),
  paddingLeft: theme.spacing(8)
}));

export const LeftSideInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  gap: theme.spacing(4),
  alignItems: 'center'
}));

export const HeadingBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  alignItems: 'center'
}));

export const HeadingInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  textAlign: 'center'
}));

export const EarnTaxtTypography = styled(Typography)(() => ({
  fontSize: '48px',
  fontWeight: 500,
  lineHeight: '64px',
  background: 'linear-gradient(90deg, #FFE38C, #CCA633)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}));

export const JoiForFreeTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 600,
  lineHeight: '64px',
  color: theme.palette.primary[100]
}));

export const DescriptionTextTypography = styled(Typography)(() => ({
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '32.78px',
  color: 'white.main',
  whiteSpace: 'normal',
  overflowWrap: 'break-word'
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

export const InputTextFiledBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const FooterMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center'
}));

export const JoinNowButtonContainer = styled(Button)(({ theme }) => ({
  width: '632px',
  height: '60px',
  borderRadius: '12px',
  backgroundColor: theme.palette.primary[100]
}));

export const LoginHereTextBoxContainer = styled(Box)(({ theme }) => ({
  fontWeight: 800,
  color: theme.palette.common.white,
  textDecoration: 'underline',
  cursor: 'pointer'
}));

export const LoginHereTextMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  textAlign: 'center'
}));

export const RightSideMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: theme.spacing(8),
  gap: theme.spacing(4),
  justifyContent: 'center'
}));

export const RightSideMainTitleText = styled(Typography)(() => ({
  fontSize: '40px',
  fontWeight: 800,
  lineHeight: '64px',
  whiteSpace: 'nowrap',
  color: '#FFFFFFCC'
}));

export const RightSideInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const RightSideSubTitleText = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 800,
  lineHeight: '32.7px',
  whiteSpace: 'nowrap',
  color: theme.palette.common.white
}));
