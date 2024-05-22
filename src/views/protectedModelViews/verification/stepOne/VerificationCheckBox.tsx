import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import { UIStyledFormLabel } from 'components/UIComponents/UIStyledFormLabel';
import { UIStyledRadioGroup } from 'components/UIComponents/UIStyledRadio';
import theme from 'themes/theme';

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (checked: boolean, val: string) => void;
  variant?: string;
  disabled?: boolean;
}

const UINewCheckBox: React.FC<RadioButtonProps> = ({
  label,
  value,
  checked,
  onChange,
  variant = 'outlined',
  disabled
}: RadioButtonProps) => (
  <UIStyledRadioGroup>
    <UIStyledFormLabel
      sx={{
        backgroundColor:
          variant === 'outlined'
            ? checked
              ? '#290F1E'
              : theme.palette.secondary.dark
            : checked
              ? theme.palette.primary.main
              : theme.palette.secondary.dark,

        color: variant === 'outlined' ? (checked ? '#FF68C0' : '#B7B5B9') : 'secondary.main'
      }}
      value={value}
      control={<Radio checked={false} />}
      label={
        <Box
          component="span"
          sx={{
            fontSize: '16px',
            fontWeight: checked ? 700 : 400
          }}
        >
          {label}
        </Box>
      }
      {...(!disabled && {
        onClick: (e) => {
          e.preventDefault();
          onChange(!checked, value);
        }
      })}
    />
  </UIStyledRadioGroup>
);

export default UINewCheckBox;
