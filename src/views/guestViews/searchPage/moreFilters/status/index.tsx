import Grid from '@mui/material/Grid';
import RadioGroup from '@mui/material/RadioGroup';
import UINewStyleRadioButton from 'components/UIComponents/UINewStyleRadioButton';
import { FILTER_STATUS } from 'constants/searchConstants';

const StatusFilter = ({ handleChange, value }: { handleChange: (value: string) => void; value: string }) => {
  return (
    <RadioGroup value={value} onChange={(event) => handleChange(event.target.value as string)}>
      <Grid container columnSpacing={1.5}>
        {FILTER_STATUS?.map((price, index) => (
          <Grid item key={index} xs={6}>
            <UINewStyleRadioButton label={price?.name} value={price?.id} />
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
};

export default StatusFilter;
