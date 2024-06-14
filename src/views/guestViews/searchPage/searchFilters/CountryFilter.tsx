import ExpandMore from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StareIcone } from 'components/UIComponents/UIStyledArrivalsButton';
import { UIStyledSelect } from 'components/UIComponents/UIStyledSelect';
import { COUNTRIES } from 'constants/searchConstants';
import Image from 'next/image';

const CountryFilter = () => {
  return (
    <FormControl id="country" fullWidth sx={{ width: '100%', maxWidth: '442px' }}>
      <UIStyledSelect
        MenuProps={{ disableScrollLock: true }}
        name="country"
        labelId="country"
        IconComponent={ExpandMore}
        startAdornment={
          <StareIcone>
            <Image alt="home_model" width={24} height={24} src="/images/home/country-location-img.png" />
          </StareIcone>
        }
      >
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
