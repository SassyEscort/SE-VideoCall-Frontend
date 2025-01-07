'use client';

import LoadingButton from '@mui/lab/LoadingButton';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';

export const InputFiledMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const InputFiledInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.25)
}));

export const InputTextFiledBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5)
}));

export const RightSideMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  justifyContent: 'center',
  backgroundImage: `linear-gradient(to bottom, #00000000, #000000), url(/images/new-signup-img.webp)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  minWidth: '600px'
}));

export const RightSideInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  paddingLeft: theme.spacing(10),
  paddingTop: theme.spacing(48)
}));

export const RightSideSubTitleText = styled(Box)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 800,
  lineHeight: '24px',
  whiteSpace: 'nowrap',
  color: theme.palette.common.white
}));

export const NewSignUpModelMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: '600px',
  height: '100%',
  minHeight: '700px',
  backgroundImage: 'linear-gradient(to bottom, #07030E, #290F1E)',
  paddingTop: theme.spacing(7.5),
  paddingRight: theme.spacing(10),
  paddingLeft: theme.spacing(10),
  paddingBottom: theme.spacing(4)
}));

export const HeadingMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5)
}));

export const HeadingInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  textAlign: 'center'
}));

export const HeadingTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 900,
  lineHeight: '60px',
  color: theme.palette.common.white
}));

export const HeadingDescriptionTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: 400,
  lineHeight: '32px',
  color: theme.palette.common.white
}));

export const ButtonMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center'
}));

export const ReferralTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 800,
  lineHeight: '24px',
  textDecoration: 'underline',
  cursor: 'pointer'
}));

export const FooterMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(8.75),
  gap: theme.spacing(0.5),
  alignItems: 'center'
}));

export const FooterInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5)
}));

export const HaveAnAccountAlreadyTextTypography = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '24px',
  color: '#FFFFFF99'
}));

export const ImageAndTextSpacingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center'
}));

export const JoinNowButtonContainer = styled(LoadingButton)(({ theme }) => ({
  borderRadius: '100px',
  width: '100%',
  maxWidth: '440px',
  height: '100%',
  minHeight: '48px',
  backgroundColor: theme.palette.primary[100]
}));

export const JoinNowTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 800,
  lineHeight: '24px',
  color: theme.palette.common.white
}));
