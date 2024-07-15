import ExpandMore from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { StyledEarningSelectInputLabel, UIStyledSelectPastPayout } from 'components/UIComponents/UIStyledSelect';
import { STATUS } from 'constants/searchConstants';
import { FormattedMessage } from 'react-intl';
import { StatusBoxContainer } from './status.styled';

const Status = () => {
  return (
    <FormControl id="status" sx={{ width: '100%', maxWidth: '116px' }}>
      <StyledEarningSelectInputLabel>
        <FormattedMessage id="Status" />
      </StyledEarningSelectInputLabel>
      <UIStyledSelectPastPayout
        MenuProps={{ disableScrollLock: true }}
        label="status"
        name="status"
        labelId="status"
        IconComponent={ExpandMore}
      >
        {STATUS.map((age, key: number) => {
          return (
            <MenuItem key={key} value={age.id}>
              <StatusBoxContainer variant="buttonLargeMenu" color="text.secondary">
                {age.title}
              </StatusBoxContainer>
            </MenuItem>
          );
        })}
      </UIStyledSelectPastPayout>
    </FormControl>
  );
};

export default Status;
