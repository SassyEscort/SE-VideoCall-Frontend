import UINewTypography from 'components/UIComponents/UINewTypography';
import { PersonalDetailsBoxContainer } from './PersonalDetailsBox.styled';

const PersonalDetailsBox = ({ label, value, isBordor }: { label: string; value: string | number; isBordor?: boolean }) => (
  <PersonalDetailsBoxContainer
    sx={{
      borderBottom: isBordor === false ? 'none' : '1px solid',
      borderBottomColor: 'secondary.light'
    }}
  >
    <UINewTypography variant="bodyLight">{label}</UINewTypography>
    <UINewTypography variant="body" textAlign="end">
      {value}
    </UINewTypography>
  </PersonalDetailsBoxContainer>
);

export default PersonalDetailsBox;
