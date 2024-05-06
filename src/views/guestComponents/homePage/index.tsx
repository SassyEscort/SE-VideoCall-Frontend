'use client';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

import { StyledSelectInputLabel, UIStyledSelect } from 'components/UIComponents/UIStyledSelect';

const HomeContainer = () => {
  return (
    <FormControl fullWidth>
      <StyledSelectInputLabel>Country</StyledSelectInputLabel>
      <UIStyledSelect label="Country" size="small" IconComponent={ExpandMore}>
        <MenuItem>Ten</MenuItem>
        <MenuItem>Twenty</MenuItem>
        <MenuItem>Thirty</MenuItem>
      </UIStyledSelect>
    </FormControl>
  );
};

export default HomeContainer;
