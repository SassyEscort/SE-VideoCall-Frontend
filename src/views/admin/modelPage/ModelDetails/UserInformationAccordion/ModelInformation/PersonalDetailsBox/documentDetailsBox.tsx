import UINewTypography from 'components/UIComponents/UINewTypography';
import { PersonalDetailsBoxContainer } from './PersonalDetailsBox.styled';
import Box from '@mui/material/Box';

const DetailBox = ({ label, value }: { label: string; value: string | number }) => {
  return (
    <Box>
      <UINewTypography variant="body">{label}: </UINewTypography>
      <UINewTypography variant="bodyLight" textAlign="end">
        {value}
      </UINewTypography>
    </Box>
  );
};

const DocumentDetailsBox = ({ label, value, isBordor }: { label: string; value: string | number; isBordor?: boolean }) => (
  <PersonalDetailsBoxContainer
    sx={{
      borderBottom: isBordor === false ? 'none' : '1px solid',
      borderBottomColor: 'secondary.light'
    }}
  >
    <DetailBox label="Document Number" value={label} />
    <DetailBox label="Document Type" value={value} />
  </PersonalDetailsBoxContainer>
);

export default DocumentDetailsBox;
