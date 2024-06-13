import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

export const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: '12px 0',
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary[800]
    }
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: '2px solid',
    borderColor: theme.palette.secondary.light
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(1.5, 2.5)
  }
}));

export const StyledSelectInputLabel = styled(InputLabel)(() => ({
  top: '-2px',
  '&.MuiInputLabel-shrink': { top: 0 }
}));

export default StyledSelect;
