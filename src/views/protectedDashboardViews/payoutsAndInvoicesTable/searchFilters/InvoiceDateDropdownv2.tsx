import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import { dateDurationTypes } from 'constants/dateRange';
import { UINewStyledSelect } from 'components/UIComponents/UINewSelectTab';
import { FormControlBox } from 'views/protectedDashboardViews/earningOverview/EarningOverview.styled';

const InvoiceDateDropdownV2 = ({ periodType, handleChange }: { periodType: string; handleChange: (value: string) => void }) => {
  return (
    <FormControlBox>
      <UINewStyledSelect
        onChange={(e) => handleChange(e.target.value as string)}
        value={periodType}
        IconComponent={() => <ExpandMoreIcon sx={{ position: 'absolute', right: '10px' }} />}
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
            {data.name}
          </MenuItem>
        ))}
      </UINewStyledSelect>
    </FormControlBox>
  );
};

export default InvoiceDateDropdownV2;
