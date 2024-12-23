import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import styled from '@mui/system/styled';

export const HowItWorksMainBoxContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '393px',
  height: '100%',
  backgroundColor: '#FFFDEE'
}));

export const HeadingMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2)
}));

export const HeadingInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.25),
  alignItems: 'center'
}));

export const LevelSystemMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  paddingTop: theme.spacing(4),
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2)
}));

export const RulesToFollowMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  paddingTop: theme.spacing(1.5),
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(2.25)
}));

export const RulesToFollowInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const LevelsComponentMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(2.25),
  paddingRight: theme.spacing(2)
}));

export const Level2MainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const Level2FirstMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  border: '1px solid #FFC9A3',
  borderRadius: '12px',
  alignItems: 'center',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  gap: theme.spacing(2)
}));

export const Level2FirstInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '160px',
  height: '100%',
  minHeight: '58px',
  border: '1px solid #FFC9A3',
  borderRadius: '8px',
  backgroundColor: '#FFC9A3',
  justifyContent: 'center',
  gap: theme.spacing(0.5)
}));

export const Level2ChipMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  alignItems: 'center',
  paddingTop: '22px'
}));

export const Level2TextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 700,
  lineHeight: '48px',
  paddingTop: theme.spacing(1),
  color: theme.palette.common.black
}));

export const Level2ToLevel3InnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  border: '1px solid #FFC9A3',
  borderRadius: '12px',
  alignItems: 'center',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  gap: theme.spacing(2)
}));

export const Level2ToLevel3FirstMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: '160px',
  height: '100%',
  border: '1px solid #FFC9A3',
  borderRadius: '8px',
  backgroundColor: '#FFC9A3',
  padding: theme.spacing(1.25),
  gap: theme.spacing(0.5)
}));

export const Level2ToLevel3ChipMainBoxContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
}));

export const Level2ToLevel3ChipInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5)
}));

export const CallsTextTypography = styled(Typography)(() => ({
  fontSize: '10px',
  fontWeight: 400,
  lineHeight: '16px',
  color: '#00000099'
}));

export const MoreCallsTextTypography = styled(Typography)(() => ({
  fontSize: '10px',
  fontWeight: 500,
  lineHeight: '16px',
  whiteSpace: 'nowrap',
  color: '#00000099'
}));

export const RewardsInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: '160px',
  height: '100%',
  gap: theme.spacing(1)
}));

export const TimmerInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '160px',
  height: '100%',
  minHeight: '24px',
  border: '1px solid #28282880',
  borderRadius: '4px',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(0.5)
}));

export const TimerTextTypography = styled(Typography)(() => ({
  fontSize: '10px',
  fontWeight: 700,
  lineHeight: '16px',
  color: '#28282880'
}));

export const TipsMianBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  border: '1px solid #FFC9A3',
  backgroundColor: '#FFC9A3',
  borderRadius: '12px',
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2)
}));

export const RulesToFollowDescriptionTextTypography = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '18px',
  color: '#00000099'
}));

export const LevelTextTypography = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '28px',
  color: '#00000099'
}));
