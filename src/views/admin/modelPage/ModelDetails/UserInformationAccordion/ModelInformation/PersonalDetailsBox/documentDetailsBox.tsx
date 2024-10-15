import UINewTypography from 'components/UIComponents/UINewTypography';
import { PersonalDetailsBoxContainer } from './PersonalDetailsBox.styled';
import Box from '@mui/material/Box';

const DocumentDetailsBox = ({ label, value, isBordor }: { label: string; value: string | number; isBordor?: boolean }) => (
  <PersonalDetailsBoxContainer
    sx={{
      borderBottom: isBordor === false ? 'none' : '1px solid',
      borderBottomColor: 'secondary.light'
    }}
  >
    <Box>
      <UINewTypography variant="body">Document Number: </UINewTypography>
      <UINewTypography variant="bodyLight">{label}</UINewTypography>
    </Box>
    <Box>
      <UINewTypography variant="body">Document Type: </UINewTypography>
      <UINewTypography variant="bodyLight" textAlign="end">
        {value}
      </UINewTypography>
    </Box>
  </PersonalDetailsBoxContainer>
);

export default DocumentDetailsBox;
