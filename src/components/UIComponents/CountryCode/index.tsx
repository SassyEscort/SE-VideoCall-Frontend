import * as React from 'react';
import Box from '@mui/material/Box';
import countries from './countrylist';
import { CountrySelectProps } from './types';
import { CountryCode, CountryCodeTextField } from './countrycode.styled';

const CountryCodeSelect = ({ values, handleChange, error = false, disabled }: CountrySelectProps) => (
  <CountryCode
    id="country-select-demo"
    size="small"
    disabled={disabled}
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
      <CountryCodeTextField
        placeholder="code"
        {...params}
        error={error}
        inputProps={{
          ...params.inputProps,
          autoComplete: 'new-password'
        }}
      />
    )}
  />
);

export default CountryCodeSelect;
