import ExpandMore from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StyledSelectInputLabel, UIStyledSelectPastPayout } from 'components/UIComponents/UIStyledSelect';
import { AGES } from 'constants/searchConstants';
import { FormattedMessage } from 'react-intl';

const Status = () => {
  return (
    <FormControl id="status" sx={{ width: '100%', maxWidth: '116px' }}>
      <StyledSelectInputLabel>
        <FormattedMessage id="Status" />
      </StyledSelectInputLabel>
      <UIStyledSelectPastPayout
        MenuProps={{ disableScrollLock: true }}
        label="status"
        name="status"
        labelId="status"
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

export default Status;
