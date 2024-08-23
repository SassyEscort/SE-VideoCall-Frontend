import React, { MouseEventHandler, useState } from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StyledSelectInputLabel, UIStyledSelectAgeFilter } from 'components/UIComponents/UIStyledSelect';
import { FormattedMessage, useIntl } from 'react-intl';
import { StyledClearIcon } from '../Search.styled';
import theme from 'themes/theme';
import { GENDER } from 'constants/workerVerification';

interface GenderFilterProps {
  Value: string;

  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}

const GenderFilter: React.FC<GenderFilterProps> = ({ Value, onChange }) => {
  const [open, setOpen] = useState(false);
  const intl = useIntl();

  let renderValue = Value;

  const handleClear: MouseEventHandler<SVGSVGElement> = (event) => {
    event.stopPropagation();
    renderValue = '';
    onChange({ target: { value: '' } } as SelectChangeEvent<unknown>, null);
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    const selectedValue = event.target.value as string;

    renderValue = selectedValue;
    onChange(event, child);
  };

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <FormControl id="Gender" fullWidth sx={{ display: 'flex', width: '100%', maxWidth: { lg: '203px', sm: '235px' } }}>
      <StyledSelectInputLabel sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <FormattedMessage id="Gender" />
      </StyledSelectInputLabel>
      <UIStyledSelectAgeFilter
        MenuProps={{ disableScrollLock: true }}
        value={renderValue}
        onChange={handleChange}
        label="Gender"
        name="Gender"
        labelId="Gender"
        IconComponent={ExpandMore}
        endAdornment={renderValue && <StyledClearIcon onClick={handleClear} />}
        sx={{ backgroundColor: renderValue ? theme.palette.primary[200] : '', cursor: 'pointer' }}
        open={open}
        onClick={handleClick}
      >
        {GENDER?.map((gender, key: number) => (
          <MenuItem key={key} value={gender?.id}>
            <UINewTypography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {intl.formatMessage({ id: gender.name })}
            </UINewTypography>
          </MenuItem>
        ))}
      </UIStyledSelectAgeFilter>
    </FormControl>
  );
};

export default GenderFilter;
