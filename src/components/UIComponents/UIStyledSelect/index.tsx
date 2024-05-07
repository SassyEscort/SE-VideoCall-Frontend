import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

export const UIStyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: '4px',
  width: '100%',

  height: '40px',
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
  '& .mui-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
    color: theme.palette.secondary[200]
  }
}));

export const StyledSelectInputLabel = styled(InputLabel)(({ theme }) => ({
  top: '-9px',
  color: theme.palette.secondary[200],
  '&.MuiInputLabel-shrink': { top: 0 }
}));
