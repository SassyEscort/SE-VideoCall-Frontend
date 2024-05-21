import { styled } from '@mui/material';
import { UIStyledSelect } from '../UIStyledSelect';

export const UIStyledSelectItemContainer = styled(UIStyledSelect)(({ theme }) => ({
  border: '5px',
  '&.MuiInputBase-root': {
    border: '5px',
    backgroundColor: theme.palette.common.black,
    borderColor: theme.palette.secondary.light,
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.common.white
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.main
    },

    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary[500]
    }
  }
}));
