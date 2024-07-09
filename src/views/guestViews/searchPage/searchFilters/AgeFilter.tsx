import ExpandMore from '@mui/icons-material/ExpandMore';
import { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StyledSelectInputLabel, UIStyledSelect } from 'components/UIComponents/UIStyledSelect';
import { AGES } from 'constants/searchConstants';
import { FormattedMessage } from 'react-intl';
import { StyledClearIcon } from '../Search.styled';
import { useState } from 'react';
import theme from 'themes/theme';
interface AgeFilterProps {
  toAge: string;
  fromAge: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}
const AgeFilter: React.FC<AgeFilterProps> = ({ fromAge, toAge, onChange }) => {
  const [from, setFrom] = useState(fromAge);
  const [to, setTo] = useState(toAge);

  const renderValue = from ? `${from}-${to}` : '';

  const handleClear = () => {
    setFrom('');
    setTo('');
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
    <FormControl id="age" sx={{ width: '100%', maxWidth: { lg: '203px', sm: '235px' } }}>
      <StyledSelectInputLabel>
        <FormattedMessage id="AgeRange" />
      </StyledSelectInputLabel>
      <UIStyledSelect
        value={renderValue}
        onChange={handleChange}
        MenuProps={{ disableScrollLock: true }}
        label="age range"
        name="age"
        labelId="age"
        IconComponent={ExpandMore}
        endAdornment={renderValue && <StyledClearIcon onClick={handleClear} />}
        sx={{ backgroundColor: renderValue ? theme.palette.primary[200] : '' }}
      >
        {AGES.map((age, key: number) => (
          <MenuItem key={key} value={age.title}>
            <UINewTypography>{age.title}</UINewTypography>
          </MenuItem>
        ))}
      </UIStyledSelect>
    </FormControl>
  );
};

export default AgeFilter;
