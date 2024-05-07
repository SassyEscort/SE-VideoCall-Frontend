import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const UIStyledSelectButton = styled(Button)(({ theme }) => ({
  borderRadius: '4px',
  width: '100%',
  maxWidth: '187px',
  height: '40px',
  backgroundColor: theme.palette.primary[700],
  color: theme.palette.text.primary,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '21.86px',
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary[700]
    }
  }
}));

export const LiveIconFirstBoxWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '24px',
  height: '100%',
  minHeight: '24px',
  border: '1px',
  borderColor: theme.palette.secondary[600],
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary[600],
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
  borderColor: theme.palette.secondary[200],
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary[200]
}));
