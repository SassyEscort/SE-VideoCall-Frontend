import RadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';

export const UIStyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
  color: theme.palette.secondary[800],
  '& .MuiButtonBase-root': {
    padding: 0,
    marginRight: theme.spacing(1),
    ':hover': {
      color: theme.palette.primary.main
    }
  }
}));
