import UINewTypography from 'components/UIComponents/UINewTypography';
import { PersonalDetailsBoxContainer } from './PersonalDetailsBox.styled';

const PersonalDetailsBox = ({ label, value, isBordor }: { label: string; value: string | number; isBordor?: boolean }) => (
  <PersonalDetailsBoxContainer>
    <UINewTypography variant="bodyLight" color="black.main">
      {label}:
    </UINewTypography>
    <UINewTypography variant="bodyLight" color="black.main">
      {value}
    </UINewTypography>
  </PersonalDetailsBoxContainer>
);

export default PersonalDetailsBox;
