import { Clear } from '@mui/icons-material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StyledSelectInputLabel, UIStyledSelect } from 'components/UIComponents/UIStyledSelect';
import { SEARCH_PRICES } from 'constants/searchConstants';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

interface PriceFilterProps {
  toValue: string;
  fromValue: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}

const Price: React.FC<PriceFilterProps> = ({ fromValue, toValue, onChange }) => {
  const [from, setFrom] = useState(fromValue);
  const [to, setTo] = useState(toValue);

  let renderValue = '';
  if (from > '0') renderValue = to === '' && from > '0' ? '1000+' : `${from}-${to}`;

  const handleClear = () => {
    setFrom('');
    setTo('');
    // Optionally call onChange with the cleared values
    onChange({ target: { value: '' } } as SelectChangeEvent<unknown>, null);
  };
  const handleChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    const selectedValue = event.target.value as string;
    const [fromdata, todata] = selectedValue.split('-');
    setFrom(fromdata);
    setTo(todata || '');
    onChange(event, child);
  };

  return (
    <FormControl id="price" fullWidth sx={{ display: 'flex', width: '100%', maxWidth: { lg: '203px', sm: '235px' } }}>
      <StyledSelectInputLabel>
        <FormattedMessage id="Price" />
      </StyledSelectInputLabel>
      <UIStyledSelect
        MenuProps={{ disableScrollLock: true }}
        value={renderValue}
        onChange={handleChange}
        label="price"
        name="price"
        labelId="price"
        IconComponent={ExpandMore}
        // endAdornment={<Clear onClick={handleClear} sx={{ cursor: 'pointer' }} />}
        endAdornment={renderValue && <Clear onClick={handleClear} sx={{ cursor: 'pointer', height: '20px', width: '20px' }} />}
        sx={{
          '.MuiSelect-icon': renderValue ? { display: 'none' } : {}
        }}
      >
        {SEARCH_PRICES.map((price, key: number) => {
          return (
            <MenuItem key={key} value={price.id}>
              <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                {price.name}
              </UINewTypography>
            </MenuItem>
          );
        })}
      </UIStyledSelect>
    </FormControl>
  );
};

export default Price;
