import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

export const UIStyledSelect = styled(Select)(({ theme }) => ({
  display: 'flex',
  borderRadius: '8px',
  width: '100%',
  height: '48px',
  backgroundColor: theme.palette.primary[700],
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary[700]
    }
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(1, 2),
    display: 'flex',
    gap: theme.spacing(1)
  },
  '& .MuiSvgIcon-root': {
    color: 'rgba(183, 181, 185, 1)'
  }
}));

export const StyledSelectInputLabel = styled(InputLabel)(({ theme }) => ({
  top: '-9px',
  color: theme.palette.secondary[200],
  '&.MuiInputLabel-shrink': { top: 0 }
}));
