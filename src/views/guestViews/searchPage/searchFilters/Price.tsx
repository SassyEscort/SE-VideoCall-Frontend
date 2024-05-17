import ExpandMore from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StyledSelectInputLabel, UIStyledSelect } from 'components/UIComponents/UIStyledSelect';
import { PRICE } from 'constants/searchConstants';

const Price = () => {
  return (
    <FormControl id="price" fullWidth sx={{ display: 'flex', width: '100%', maxWidth: { lg: '203px', sm: '235px' } }}>
      <StyledSelectInputLabel>Price</StyledSelectInputLabel>
      <UIStyledSelect MenuProps={{ disableScrollLock: true }} label="price" name="price" labelId="price" IconComponent={ExpandMore}>
        {PRICE.map((price, key: number) => {
          return (
            <MenuItem key={key} value={price.id}>
              <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                {price.title}
              </UINewTypography>
            </MenuItem>
          );
        })}
      </UIStyledSelect>
    </FormControl>
  );
};

export default Price;
