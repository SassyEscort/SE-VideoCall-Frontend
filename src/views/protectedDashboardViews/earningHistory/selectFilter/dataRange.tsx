import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StyledSelectInputLabel, UIStyledSelect } from 'components/UIComponents/UIStyledSelect';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { AGES } from 'constants/searchConstants';

const DataRange = () => {
  return (
    <FormControl id="age" sx={{ width: '100%', maxWidth: '147px' }}>
      <StyledSelectInputLabel>
        <FormattedMessage id="DataRange" />
      </StyledSelectInputLabel>
      <UIStyledSelect MenuProps={{ disableScrollLock: true }} label="Data range" name="age" labelId="age" IconComponent={ExpandMore}>
        {AGES.map((age, key: number) => {
          return (
            <MenuItem key={key} value={age.id}>
              <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                {age.title}
              </UINewTypography>
            </MenuItem>
          );
        })}
      </UIStyledSelect>
    </FormControl>
  );
};

export default DataRange;
