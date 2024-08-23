import ExpandMore from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { StyledEarningSelectInputLabel, UIStyledSelectPastPayout } from 'components/UIComponents/UIStyledSelect';
import { STATUS } from 'constants/searchConstants';
import { FormattedMessage } from 'react-intl';
import { StatusBoxContainer } from './status.styled';
import { SelectChangeEvent } from '@mui/material';

interface StatusFilterProps {
  value: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}

const Status: React.FC<StatusFilterProps> = ({ value, onChange }) => {
  return (
    <FormControl id="status" sx={{ width: { xs: '200px', sm: '130px' } }}>
      <StyledEarningSelectInputLabel>
        <FormattedMessage id="Status" />
      </StyledEarningSelectInputLabel>
      <UIStyledSelectPastPayout
        MenuProps={{ disableScrollLock: true }}
        value={value}
        onChange={onChange}
        label="status"
        name="status"
        labelId="status"
        IconComponent={ExpandMore}
      >
        {STATUS.map((status, key: number) => {
          return (
            <MenuItem
              key={key}
              value={status.id}
              sx={{
                margin: '10px 12px',
                '&. MuiPaper-root': { borderRadius: '16px 0px' }
              }}
            >
              <StatusBoxContainer variant="buttonLargeMenu" color="text.secondary">
                {status.title}
              </StatusBoxContainer>
            </MenuItem>
          );
        })}
      </UIStyledSelectPastPayout>
    </FormControl>
  );
};

export default Status;
