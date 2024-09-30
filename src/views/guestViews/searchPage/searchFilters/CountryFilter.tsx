import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, SelectChangeEvent } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { UIStyledCountrySelect } from 'components/UIComponents/UIStyledSelect';
import { MouseEventHandler, useEffect, useState } from 'react';
import { CommonServices } from 'services/commonApi/commonApi.services';
import { CountryFilterText, StyledClearIcon } from '../Search.styled';
import theme from 'themes/theme';
import CityCountryLabel from './CityCountryLabel';
import { FormControlBox } from './Country.styled';
import { ErrorMessage } from 'constants/common.constants';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';

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
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [loading, setLoading] = useState(true);

  let renderValue = value ? value : '';

  const countryData = async () => {
    setLoading(false);
    try {
      const data = await CommonServices.getCountry(true);
      setCountries(data.data);
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  useEffect(() => {
    if (isApiCalled) {
      countryData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isApiCalled]);

  const handleClear: MouseEventHandler<SVGSVGElement> = (event) => {
    event.stopPropagation();
    renderValue = '';
    onChange({ target: { value: '' } } as SelectChangeEvent<unknown>, null);
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    renderValue = event.target.value as string;
    onChange(event, child);
  };

  const handleOpen = () => {
    if (!isApiCalled) {
      setIsApiCalled(true);
    }
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <FormControlBox id="country" fullWidth>
      <UIStyledCountrySelect
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
        {loading ? (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <CircularProgress size={24} />
          </Box>
        ) : (
          countries?.map((country, index) => {
            return (
              <MenuItem key={country?.name} value={country?.name}>
                <CountryFilterText>{country?.name}</CountryFilterText>
              </MenuItem>
            );
          })
        )}
      </UIStyledCountrySelect>
    </FormControlBox>
  );
};

export default CountryFilter;
