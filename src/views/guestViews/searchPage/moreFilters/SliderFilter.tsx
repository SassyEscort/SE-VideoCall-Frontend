import Slider from '@mui/material/Slider';

const SliderFilter = ({
  fromValue,
  toValue,
  minValue,
  maxValue,
  handleChange
}: {
  fromValue: number;
  toValue: number;
  minValue: number;
  maxValue: number;
  handleChange: (event: Event, newValue: number | number[]) => void;
}) => (
  <Slider
    value={[fromValue, toValue]}
    onChange={handleChange}
    valueLabelDisplay="on"
    min={minValue}
    max={maxValue}
    sx={{
      color: 'text.secondary',
      '& .MuiSlider-valueLabel': {
        transform: 'translateY(100%) scale(1) !important',
        backgroundColor: 'transparent',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '160%',
        color: 'text.primary'
      }
    }}
  />
);

export default SliderFilter;
