import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import { UIStyledNewFormLableContainer } from 'components/UIComponents/UIStyledNewFormLable';
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
    <UIStyledNewFormLableContainer
      sx={{
        backgroundColor:
          variant === 'outlined'
            ? checked
              ? '#290F1E'
              : theme.palette.primary[700]
            : checked
              ? theme.palette.primary.main
              : theme.palette.secondary.dark,

        color: variant === 'outlined' ? (checked ? '#FF68C0' : '#B7B5B9') : 'secondary.main',
        marginLeft: '0px',
        marginRight: '0px'
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
