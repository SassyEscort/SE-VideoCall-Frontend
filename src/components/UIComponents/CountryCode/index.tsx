import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import countries from './countrylist';

import { CountrySelectProps } from './types';

const CountryCodeSelect = ({ values, handleChange, error = false }: CountrySelectProps) => (
  <Autocomplete
    id="country-select-demo"
    size="small"
    sx={{
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
    }}
    options={countries}
    autoHighlight
    value={values}
    onChange={(event, value) => handleChange(value)}
    getOptionLabel={(option) => option.phone}
    renderOption={(props, option) => {
      const { ...optionProps } = props;
      return (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...optionProps}>
          <Box
            component="img"
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.phone}
        </Box>
      );
    }}
    renderInput={(params) => (
      <TextField
        placeholder="code"
        {...params}
        error={error}
        inputProps={{
          ...params.inputProps,
          autoComplete: 'new-password',
          sx: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#232027'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#FF68C0'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#FF68C0'
            }
          }
        }}
      />
    )}
  />
);

export default CountryCodeSelect;
