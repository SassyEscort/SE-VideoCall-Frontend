import { StyledSliderBar } from './MoreFilters.styled';

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
}) => <StyledSliderBar value={[fromValue, toValue]} onChange={handleChange} valueLabelDisplay="on" min={minValue} max={maxValue} />;

export default SliderFilter;
