import ExpandMore from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StyledSelectInputLabel, UIStyledSelect } from 'components/UIComponents/UIStyledSelect';
import { COUNTRIES } from 'constants/searchConstants';

const CountryFilter = () => {
  return (
    <FormControl id="country" fullWidth>
      <StyledSelectInputLabel>Country</StyledSelectInputLabel>
      <UIStyledSelect MenuProps={{ disableScrollLock: true }} label="country" name="country" labelId="country" IconComponent={ExpandMore}>
        {COUNTRIES.map((country, key: number) => {
          return (
            <MenuItem key={key} value={country.id}>
              <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                {country.title}
              </UINewTypography>
            </MenuItem>
          );
        })}
      </UIStyledSelect>
    </FormControl>
  );
};

export default CountryFilter;
