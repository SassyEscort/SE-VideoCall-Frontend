import Grid from '@mui/material/Grid';
import RadioGroup from '@mui/material/RadioGroup';
import UINewStyleRadioButton from 'components/UIComponents/UINewStyleRadioButton';
import { AGES } from 'constants/searchConstants';

const AgeFilter = ({ fromAge, toAge, handleChange }: { fromAge: string; toAge: string; handleChange: (value: string) => void }) => {
  const renderValue = fromAge ? `${fromAge}-${toAge}` : '';

  return (
    <RadioGroup value={renderValue} onChange={(event) => handleChange(event.target.value as string)}>
      <Grid container columnSpacing={1.5}>
        {AGES?.map((age, index) => (
          <Grid item key={index} xs={6}>
            <UINewStyleRadioButton label={age.title} value={age.id} />
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
};

export default AgeFilter;
