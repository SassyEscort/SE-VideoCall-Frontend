import { styled } from '@mui/material/styles';
import { CountryType } from './types';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export const CountryCode = styled(Autocomplete<CountryType>)(() => ({
  width: 150,
  '& .MuiAutocomplete-clearIndicator svg': {
    display: 'none'
  },
  '& .MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator svg': {
    display: 'none'
  },
  '& .MuiAutocomplete-inputRoot .MuiAutocomplete-input': {
    width: '100%',
    minWidth: '38px'
  },
  '& .MuiAutocomplete-popupIndicator svg': {
    display: 'none'
  }
}));
export const CountryCodeTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#232027'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#FF68C0'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#FF68C0'
  }
}));
