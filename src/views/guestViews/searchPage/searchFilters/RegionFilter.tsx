import ExpandMore from '@mui/icons-material/ExpandMore';
import { SelectChangeEvent } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { UIStyledCountrySelect } from 'components/UIComponents/UIStyledSelect';
import { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { CommonServices } from 'services/commonApi/commonApi.services';
import { CountryFilterText, StyledClearIcon } from '../Search.styled';
import theme from 'themes/theme';
import { FormControlBox } from './Country.styled';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import RegionLabel from './RegionLabel';

interface CountryFilterProps {
  value: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
  isUserInteracted: boolean;
}
type countryType = {
  id: number;
  region: string;
};

const RegionFilter: React.FC<CountryFilterProps> = ({ value, onChange, isUserInteracted }) => {
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState<countryType[]>([]);
  const [loading, setLoading] = useState(true);

  let renderValue = value ? value : '';

  const handleCountryApiChange = useCallback(() => {
    setLoading(false);
    const countryData = async () => {
      const data = await CommonServices.getRegion(true);
      setRegion(data.data);
    };
    countryData();
  }, []);

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
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (isUserInteracted) {
      handleCountryApiChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserInteracted]);

  return (
    <FormControlBox id="region" fullWidth>
      <UIStyledCountrySelect
        MenuProps={{ disableScrollLock: true }}
        name="region"
        labelId="region"
        value={renderValue}
        onChange={handleChange}
        IconComponent={ExpandMore}
        startAdornment={<RegionLabel label={value} type="Region" />}
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
          region?.map((region, index) => {
            return (
              <MenuItem key={region.region} value={region.region}>
                <CountryFilterText>{region.region}</CountryFilterText>
              </MenuItem>
            );
          })
        )}
      </UIStyledCountrySelect>
    </FormControlBox>
  );
};

export default RegionFilter;
