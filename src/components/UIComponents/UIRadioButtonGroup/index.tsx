import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import CheckCircle from '@mui/icons-material/CheckCircle';
import UINewTypography from '../UINewTypography';

export type MultipleOptions = {
  id: number | string;
  name: string;
};

interface RadioButtonsGroupProps {
  label?: string;
  options: MultipleOptions[];
  defaultValue?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function UINewRadioButtonsGroup({ label, options, defaultValue, onChange, disabled }: RadioButtonsGroupProps) {
  return (
    <FormControl sx={{ gap: '16px' }}>
      <FormLabel sx={{ color: '#E9E8EB !important' }}>{label}</FormLabel>
      <RadioGroup
        value={defaultValue}
        onChange={(event) => onChange(event.target.value)}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          flexDirection: 'row'
        }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.id}
            value={option.id}
            control={
              <Radio
                disabled={disabled}
                checkedIcon={<CheckCircle />}
                sx={{
                  color: option.id == defaultValue ? 'primary.400' : 'secondary.200',
                  width: '24px',
                  height: '24px'
                }}
              />
            }
            label={
              <UINewTypography
                variant="bodyRegular"
                sx={{
                  fontWeight: option.id == defaultValue ? 'bold !important' : 'normal !important'
                }}
              >
                {option.name}
              </UINewTypography>
            }
            sx={{
              backgroundColor: option.id == defaultValue ? 'primary.200' : '#232027 !important',
              color: option.id == defaultValue ? '#FF68C0 !important' : '#B7B5B9 !important',
              width: '188.75px',
              height: '46px',
              m: 0,
              padding: '10px 12px',
              gap: '6px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: '#232027',
              fontWeight: option.id == defaultValue ? 'bold !important' : 'normal !important'
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
