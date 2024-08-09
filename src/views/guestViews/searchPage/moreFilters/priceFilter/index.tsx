import Grid from '@mui/material/Grid';
import RadioGroup from '@mui/material/RadioGroup';
import UINewStyleRadioButton from 'components/UIComponents/UINewStyleRadioButton';
import { SEARCH_PRICES } from 'constants/searchConstants';
import { useIntl } from 'react-intl';

const PriceFilter = ({
  fromValue,
  toValue,
  handleChange
}: {
  fromValue: string;
  toValue: string;
  handleChange: (value: string) => void;
}) => {
  const intl = useIntl();
  const renderValue = toValue === '' && fromValue > '0' ? '1000+' : `${fromValue}-${toValue}`;

  return (
    <RadioGroup value={renderValue} onChange={(event) => handleChange(event.target.value as string)}>
      <Grid container columnSpacing={1.5}>
        {SEARCH_PRICES?.map((price, index) => (
          <Grid item key={index} xs={6}>
            <UINewStyleRadioButton label={intl.formatMessage({ id: price.name })} value={price?.id} />
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
};

export default PriceFilter;
