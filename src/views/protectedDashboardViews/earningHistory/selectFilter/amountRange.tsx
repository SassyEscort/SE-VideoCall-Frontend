import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StyledEarningSelectInputLabel, UIStyledSelectPastPayout } from 'components/UIComponents/UIStyledSelect';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { AGES } from 'constants/searchConstants';

const AmountRange = () => {
  return (
    <FormControl id="amount" sx={{ width: '100%', maxWidth: '171px' }}>
      <StyledEarningSelectInputLabel>
        <FormattedMessage id="AmountRange" />
      </StyledEarningSelectInputLabel>
      <UIStyledSelectPastPayout
        MenuProps={{ disableScrollLock: true }}
        label="Amount range"
        name="amount"
        labelId="amount"
        IconComponent={ExpandMore}
      >
        {AGES.map((age, key: number) => {
          return (
            <MenuItem key={key} value={age.id}>
              <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                {age.title}
              </UINewTypography>
            </MenuItem>
          );
        })}
      </UIStyledSelectPastPayout>
    </FormControl>
  );
};

export default AmountRange;
