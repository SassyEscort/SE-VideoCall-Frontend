import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface UIStyledSelectButtonProps extends ButtonProps {
  isClicked: boolean;
}

export const UIStyledArrivalsButton = styled(Button)<UIStyledSelectButtonProps>(({ theme, isClicked }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1),
  width: '100%',
  height: '48px',
  backgroundColor: isClicked ? theme.palette.secondary.main : theme.palette.primary[700],
  color: theme.palette.primary[400],
  fontSize: '16px',
  fontWeight: 700,
  whiteSpace: 'nowrap',
  lineHeight: '21.86px',
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      backgroundColor: isClicked ? theme.palette.secondary.main : theme.palette.secondary[800]
    }
  },
  '@media (max-width: 320px)': {
    whiteSpace: 'normal'
  }
}));

export const StareIcone = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '24px',
  height: '100%',
  minHeight: '24px',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const LocatonIcone = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '24px',
  height: '100%',
  minHeight: '24px',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: theme.spacing(1)
}));
