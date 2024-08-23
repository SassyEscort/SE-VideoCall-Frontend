import Grid from '@mui/material/Grid';
import RadioGroup from '@mui/material/RadioGroup';
import UINewStyleRadioButton from 'components/UIComponents/UINewStyleRadioButton';
import { GENDER } from 'constants/workerVerification';
import { useIntl } from 'react-intl';

const GenderFilter = ({ handleChange, value }: { handleChange: (value: string) => void; value: string }) => {
  const intl = useIntl();

  return (
    <RadioGroup value={value} onChange={(event) => handleChange(event.target.value as string)}>
      <Grid container columnSpacing={1.5}>
        {GENDER?.map((gender, index) => (
          <Grid item key={index} xs={6}>
            <UINewStyleRadioButton label={intl.formatMessage({ id: gender?.name })} value={gender?.id} />
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
};

export default GenderFilter;
