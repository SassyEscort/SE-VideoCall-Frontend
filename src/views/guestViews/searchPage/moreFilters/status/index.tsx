import Grid from '@mui/material/Grid';
import RadioGroup from '@mui/material/RadioGroup';
import UINewStyleRadioButton from 'components/UIComponents/UINewStyleRadioButton';
import { FILTER_STATUS } from 'constants/searchConstants';
import { useIntl } from 'react-intl';

const StatusFilter = ({ handleChange, value }: { handleChange: (value: string) => void; value: string }) => {
  const intl = useIntl();

  return (
    <RadioGroup value={value} onChange={(event) => handleChange(event.target.value as string)}>
      <Grid container columnSpacing={1.5}>
        {FILTER_STATUS?.map((price, index) => (
          <Grid item key={index} xs={6}>
            <UINewStyleRadioButton label={intl.formatMessage({ id: price?.name })} value={price?.id} />
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
};

export default StatusFilter;
