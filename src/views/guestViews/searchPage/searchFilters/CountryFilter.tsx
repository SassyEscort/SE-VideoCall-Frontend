import ExpandMore from '@mui/icons-material/ExpandMore';
import { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { LocatonIcone } from 'components/UIComponents/UIStyledArrivalsButton';
import { UIStyledSelect } from 'components/UIComponents/UIStyledSelect';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CommonServices } from 'services/commonApi/commonApi.services';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { StyledClearIcon } from '../Search.styled';
import theme from 'themes/theme';

interface CountryFilterProps {
  value: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}
type countryType = {
  id: number;
  name: string;
};

const CountryFilter: React.FC<CountryFilterProps> = ({ value, onChange }) => {
  const [countries, setCountries] = useState<countryType[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  let renderValue = value ? value : '';

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data?.id, token: data?.token });
    };
    userToken();
  }, []);

  const countryData = async () => {
    const data = await CommonServices.getCountry(token.token, true);
    setCountries(data.data);
  };
  useEffect(() => {
    countryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClear = () => {
    renderValue = '';
    onChange({ target: { value: '' } } as SelectChangeEvent<unknown>, null);
  };

  const handleChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    renderValue = event.target.value as string;
    onChange(event, child);
  };

  return (
    <FormControl id="country" fullWidth sx={{ width: '100%', maxWidth: '442px' }}>
      <UIStyledSelect
        MenuProps={{ disableScrollLock: true }}
        name="country"
        labelId="country"
        value={renderValue}
        onChange={handleChange}
        IconComponent={ExpandMore}
        startAdornment={
          <LocatonIcone>
            <Image alt="home_model" width={24} height={24} src="/images/home/country-location-img.png" />
          </LocatonIcone>
        }
        endAdornment={value && <StyledClearIcon onClick={handleClear} />}
        sx={{ backgroundColor: value ? theme.palette.primary[200] : '' }}
      >
        {countries?.map((country, index) => {
          return (
            <MenuItem key={country?.name} value={country?.name}>
              <UINewTypography>{country?.name}</UINewTypography>
            </MenuItem>
          );
        })}
      </UIStyledSelect>
    </FormControl>
  );
};

export default CountryFilter;
