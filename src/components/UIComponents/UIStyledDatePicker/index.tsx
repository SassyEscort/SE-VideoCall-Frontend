import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers';

export const UIStyledDatePicker = styled(DatePicker)(({ theme }) => ({
  width: '100%',
  ':hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '2px solid',
    borderColor: theme.palette.primary[700]
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px'
  },

  '& .MuiSvgIcon-root': {
    color: '#86838A'
  },
  ' .MuiOutlinedInput-input': {
    p: '14px 16px',
    pr: 0
  },
  '& .MuiInputBase-root-MuiOutlinedInput-root': {
    pr: '16px',
    pl: 0
  },
  '& .MuiIconButton-root': {
    color: theme.palette.secondary[700]
  }
}));
