import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StepTwoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  flexDirection: 'column',
  width: '100%',
  maxWidth: '824px'
}));

export const StepTwoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '24px 16px',
  flexDirection: 'column',
  gap: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
  backgroundColor: theme.palette.secondary[500]
}));

export const StepTwoInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '24px 16px',
  flexDirection: 'column',
  gap: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
  backgroundColor: theme.palette.secondary[500]
}));

export const StepTwoInputOuterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  justifyContent: 'center',
  width: '100%'
}));

export const ActionButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: '#07030E',
  borderRadius: theme.spacing(2),
  position: 'sticky',
  bottom: -1,
  right: 0
}));

export const DateOfBirthMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  flexDirection: 'column',
  width: '100%',
  maxWidth: 390,
  height: '100%',
  maxHeight: 127
}));

export const StepTwoInputOuterMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  justifyContent: 'center',
  width: '100%',
  maxWidth: theme.spacing(48.75),
  height: '100%',
  maxHeight: theme.spacing(16)
}));

export const StepOneContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
  alignItems: 'center',
  paddingTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(4)
  }
}));
