import ExpandMore from '@mui/icons-material/ExpandMore';
import { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StyledSelectInputLabelAge, UIStyledSelectAgeFilter } from 'components/UIComponents/UIStyledSelect';
import { AGES } from 'constants/searchConstants';
import { FormattedMessage } from 'react-intl';
import { StyledClearIcon } from '../Search.styled';
import theme from 'themes/theme';
import { MouseEventHandler, useState } from 'react';
interface AgeFilterProps {
  toAge: string;
  fromAge: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}
const AgeFilter: React.FC<AgeFilterProps> = ({ fromAge, toAge, onChange }) => {
  const [open, setOpen] = useState(false);
  let renderValue = fromAge ? `${fromAge}-${toAge}` : '';

  const handleClear: MouseEventHandler<SVGSVGElement> = (event) => {
    event.stopPropagation();
    renderValue = '';
    onChange({ target: { value: '' } } as SelectChangeEvent<unknown>, null);
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    const selectedValue = event.target.value as string;
    const [fromdata, todata] = selectedValue.split('-');

    renderValue = fromdata ? `${fromdata}-${todata}` : '';
    onChange(event, child);
  };

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <FormControl id="age" sx={{ width: '100%', maxWidth: { lg: '203px', sm: '235px' } }}>
      <StyledSelectInputLabelAge>
        <FormattedMessage id="AgeRange" />
      </StyledSelectInputLabelAge>
      <UIStyledSelectAgeFilter
        value={renderValue}
        onChange={handleChange}
        MenuProps={{ disableScrollLock: true }}
        label="age range"
        name="age"
        labelId="age"
        IconComponent={ExpandMore}
        endAdornment={renderValue && <StyledClearIcon onClick={handleClear} />}
        sx={{ backgroundColor: renderValue ? theme.palette.primary[200] : '', cursor: 'pointer' }}
        open={open}
        onClick={handleOpen}
      >
        {AGES.map((age, key: number) => (
          <MenuItem key={key} value={age?.title}>
            <UINewTypography>{age?.title}</UINewTypography>
          </MenuItem>
        ))}
      </UIStyledSelectAgeFilter>
    </FormControl>
  );
};

export default AgeFilter;
