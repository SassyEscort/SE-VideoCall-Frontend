import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginPageFirstTextBox = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: 'inherit'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'inherit'
    }
  },
  '& .Mui-focused': {
    '& .MuiInputLabel-root': {
      color: 'black'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black'
      }
    }
  }
}));
