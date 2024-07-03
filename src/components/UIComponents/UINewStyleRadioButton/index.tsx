import CheckCircle from '@mui/icons-material/CheckCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const UINewStyleRadioButton = ({ label, value }: { label: string; value: number | string }) => (
  <FormControlLabel
    value={value}
    control={
      <Radio
        checkedIcon={<CheckCircle color="primary" />}
        sx={{
          color: '#B7B5B9 !important'
        }}
      />
    }
    label={label}
  />
);

export default UINewStyleRadioButton;
