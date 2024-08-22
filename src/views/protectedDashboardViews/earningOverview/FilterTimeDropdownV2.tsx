import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import { dateDurationTypes } from 'constants/dateRange';
import { UINewStyledEarningSelect } from 'components/UIComponents/UINewSelectTab';
import { FormControlBox } from './EarningOverview.styled';
import { useIntl } from 'react-intl';

const FilterTimeDropdownV2 = ({ periodType, handleChange }: { periodType: string; handleChange: (value: string) => void }) => {
  const intl = useIntl();

  return (
    <FormControlBox>
      <UINewStyledEarningSelect
        onChange={(e) => handleChange(e.target.value as string)}
        value={periodType}
        IconComponent={ExpandMore}
        sx={{
          '& .MuiSvgIcon-root': { color: 'text.primary' }
        }}
      >
        {dateDurationTypes?.map((data, index) => (
          <MenuItem
            key={index}
            value={data.id}
            sx={{
              margin: '10px 12px',
              '&. MuiPaper-root': { borderRadius: '16px 0px' }
            }}
          >
            {intl.formatMessage({ id: data.name })}
          </MenuItem>
        ))}
      </UINewStyledEarningSelect>
    </FormControlBox>
  );
};

export default FilterTimeDropdownV2;
