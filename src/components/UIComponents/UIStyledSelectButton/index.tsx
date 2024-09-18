import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

interface UIStyledSelectButtonProps extends ButtonProps {
  isClicked: boolean;
}

export const UIStyledSelectButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isClicked'
})<UIStyledSelectButtonProps>(({ theme, isClicked }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1),
  width: '100%',
  height: '48px !important',
  backgroundColor: isClicked ? theme.palette.secondary.main : theme.palette.primary[700],
  color: theme.palette.text.primary,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '21.86px',
  paddingInline: theme.spacing(2.15625),
  paddingTop: theme.spacing(1.375),
  paddingBottom: theme.spacing(1.375),
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      backgroundColor: isClicked ? theme.palette.secondary.main : theme.palette.secondary[800]
    }
  },
  textWrap: 'nowrap',
  gap: theme.spacing(1),
  '@media (max-width: 320px)': {
    whiteSpace: 'normal'
  },
  '@media (max-width: 375px)': {
    whiteSpace: 'normal'
  },
  '@media (max-width: 475px)': {
    textWrap: 'balance'
  },
  '@media (max-width: 393px)': {
    width: '100%',
    maxWidth: '176px'
  },
  '@media (max-width: 768px)': {
    width: '100%',
    maxWidth: '190px'
  }
}));

export const LiveIconFirstBoxWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '24px',
  height: '100%',
  minHeight: '24px',
  border: '1px',
  borderColor: theme.palette.secondary[400],
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary[400],
  justifyContent: 'center',
  alignItems: 'center'
}));

export const LiveIconSecBoxWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '16px',
  height: '100%',
  minHeight: '16px',
  border: '1px',
  borderColor: theme.palette.success[100],
  borderRadius: '50%',
  backgroundColor: theme.palette.success[100]
}));
