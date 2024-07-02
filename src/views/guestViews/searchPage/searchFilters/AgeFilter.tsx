import ExpandMore from '@mui/icons-material/ExpandMore';
import { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { StyledSelectInputLabel, UIStyledSelect } from 'components/UIComponents/UIStyledSelect';
import { AGES } from 'constants/searchConstants';
import { FormattedMessage } from 'react-intl';
interface AgeFilterProps {
  toAge: string;
  fromAge: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}
const AgeFilter: React.FC<AgeFilterProps> = ({ fromAge, toAge, onChange }) => {
  let renderValue = '';
  if (fromAge > '0') renderValue = toAge === '' && fromAge > '0' ? '1000+' : `${fromAge}-${toAge}`;

  return (
    <FormControl id="age" sx={{ width: '100%', maxWidth: { lg: '203px', sm: '235px' } }}>
      <StyledSelectInputLabel>
        <FormattedMessage id="AgeRange" />
      </StyledSelectInputLabel>
      <UIStyledSelect
        value={renderValue}
        onChange={onChange}
        MenuProps={{ disableScrollLock: true }}
        label="age range"
        name="age"
        labelId="age"
        IconComponent={ExpandMore}
      >
        {AGES.map((age, key: number) => {
          return (
            <MenuItem key={key} value={age.name}>
              <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                {age.name}
              </UINewTypography>
            </MenuItem>
          );
        })}
      </UIStyledSelect>
    </FormControl>
  );
};

export default AgeFilter;
