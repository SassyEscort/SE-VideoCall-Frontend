import React, { MouseEventHandler, useState } from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StyledSelectInputLabel, UIStyledSelectAgeFilter } from 'components/UIComponents/UIStyledSelect';
import { SEARCH_PRICES } from 'constants/searchConstants';
import { FormattedMessage, useIntl } from 'react-intl';
import { DollarImageContainer, StyledClearIcon } from '../Search.styled';
import theme from 'themes/theme';

interface PriceFilterProps {
  toValue: string;
  fromValue: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}

const Price: React.FC<PriceFilterProps> = ({ fromValue, toValue, onChange }) => {
  const [open, setOpen] = useState(false);
  const intl = useIntl();

  let renderValue = '';
  if (fromValue >= '0') renderValue = toValue === '' && fromValue >= '0' ? '' : `${fromValue}-${toValue}`;

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

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <FormControl id="Credits" fullWidth sx={{ display: 'flex', width: '100%', maxWidth: { lg: '203px', sm: '235px' } }}>
      <StyledSelectInputLabel sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <DollarImageContainer src="/images/workercards/coin-1.png" />
        <FormattedMessage id="Credits" />
      </StyledSelectInputLabel>
      <UIStyledSelectAgeFilter
        MenuProps={{ disableScrollLock: true }}
        value={renderValue}
        onChange={handleChange}
        label="CreditsIcon"
        name="Credits"
        labelId="Credits"
        IconComponent={ExpandMore}
        endAdornment={renderValue && <StyledClearIcon onClick={handleClear} />}
        sx={{ backgroundColor: renderValue ? theme.palette.primary[200] : '', cursor: 'pointer' }}
        open={open}
        onClick={handleClick}
      >
        {SEARCH_PRICES?.map((price, key: number) => (
          <MenuItem key={key} value={price?.id}>
            <UINewTypography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {intl.formatMessage({ id: price.name })}
            </UINewTypography>
          </MenuItem>
        ))}
      </UIStyledSelectAgeFilter>
    </FormControl>
  );
};

export default Price;
