import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const UIStyledArrivalsButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  borderRadius: '8px',
  width: '100%',
  height: '48px',
  backgroundColor: theme.palette.primary[700],
  color: theme.palette.primary[400],
  fontSize: '16px',
  fontWeight: 700,
  whiteSpace: 'nowrap',
  lineHeight: '21.86px',
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      backgroundColor: theme.palette.secondary[800]
    }
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
