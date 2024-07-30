import ExpandMore from '@mui/icons-material/ExpandMore';
import { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { UIStyledSelect } from 'components/UIComponents/UIStyledSelect';
import { useEffect, useState } from 'react';
import { CommonServices } from 'services/commonApi/commonApi.services';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { CountryFilterText, StyledClearIcon } from '../Search.styled';
import theme from 'themes/theme';
import CityCountryLabel from './CityCountryLabel';

interface CountryFilterProps {
  value: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}
type countryType = {
  id: number;
  name: string;
};

const CountryFilter: React.FC<CountryFilterProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
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

  const handleOpen = () => {
    setOpen(!open);
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
        startAdornment={<CityCountryLabel label={value} type="Country" />}
        endAdornment={value && <StyledClearIcon onClick={handleClear} />}
        sx={{ backgroundColor: value ? theme.palette.primary[200] : '' }}
        open={open}
        onClick={handleOpen}
      >
        {countries?.map((country, index) => {
          return (
            <MenuItem key={country?.name} value={country?.name}>
              <CountryFilterText>{country?.name}</CountryFilterText>
            </MenuItem>
          );
        })}
      </UIStyledSelect>
    </FormControl>
  );
};

export default CountryFilter;
