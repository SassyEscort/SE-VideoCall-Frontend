import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const UIStyledInputText = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary[800]
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary[700],
    '&:hover': {
      borderColor: theme.palette.primary[800]
    }
  },
  '& .MuiInputBase-root': {
    borderRadius: theme.spacing(1),
    height: '100%',
    minHeight: '50px',
    padding: '12px 16px ',
    '& .MuiOutlinedInput-input': {
      padding: 0
    }
  },
  '& label': {
    left: '5px',
    lineHeight: 'initial',
    '&.MuiInputLabel-shrink': {
      left: 0,
      lineHeight: '1.5em'
    }
  }
}));
