import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

export const UINewStyleCheckbox = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiCheckbox-root': {
    color: theme.palette.text.primary,
    '&.Mui-checked': {
      color: theme.palette.primary.main
    }
  }
}));
