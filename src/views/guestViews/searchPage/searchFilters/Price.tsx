import ExpandMore from '@mui/icons-material/ExpandMore';
import { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StyledSelectInputLabel, UIStyledSelect } from 'components/UIComponents/UIStyledSelect';
import { SEARCH_PRICES } from 'constants/searchConstants';
import { FormattedMessage } from 'react-intl';

interface PriceFilterProps {
  toValue: string;
  fromValue: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}

const Price: React.FC<PriceFilterProps> = ({ fromValue, toValue, onChange }) => {
  let renderValue = '';
  if (fromValue > '0') renderValue = toValue === '' && fromValue > '0' ? '1000+' : `${fromValue}-${toValue}`;

  return (
    <FormControl id="price" fullWidth sx={{ display: 'flex', width: '100%', maxWidth: { lg: '203px', sm: '235px' } }}>
      <StyledSelectInputLabel>
        <FormattedMessage id="Price" />
      </StyledSelectInputLabel>
      <UIStyledSelect
        MenuProps={{ disableScrollLock: true }}
        value={renderValue}
        onChange={onChange}
        label="price"
        name="price"
        labelId="price"
        IconComponent={ExpandMore}
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
