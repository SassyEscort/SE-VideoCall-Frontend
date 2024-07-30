import Grid from '@mui/material/Grid';
import RadioGroup from '@mui/material/RadioGroup';
import UINewStyleRadioButton from 'components/UIComponents/UINewStyleRadioButton';
import { MultipleOptionString } from 'views/protectedModelViews/verification/stepOne/VerificationStepOne';

const LanguageFilter = ({
  value,
  handleChange,
  languages
}: {
  value: string;
  handleChange: (value: string) => void;
  languages: MultipleOptionString[];
}) => (
  <RadioGroup value={value} onChange={(event) => handleChange(event.target.value as string)}>
    <Grid container columnSpacing={1.5}>
      {languages?.map((lang, index) => (
        <Grid item key={index} xs={6}>
          <UINewStyleRadioButton label={lang?.name} value={lang?.name} />
        </Grid>
      ))}
    </Grid>
  </RadioGroup>
);

export default LanguageFilter;
