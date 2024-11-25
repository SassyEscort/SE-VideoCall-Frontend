import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const LoginPageFirstTextBox = styled(TextField)(() => ({
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
