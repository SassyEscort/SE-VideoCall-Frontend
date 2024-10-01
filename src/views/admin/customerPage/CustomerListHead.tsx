import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { Box } from '@mui/material';
import { UserTitleText } from './CustomerContainer.styled';

export default function CustomerListHead() {
  return (
    <TableHead>
      <TableRow>
        <UserTitleText>Name</UserTitleText>
        <UserTitleText>Email</UserTitleText>
        <UserTitleText sx={{ textAlign: 'center', cursor: 'pointer' }}>
          Total Call duration
          <Box component="img" src="/images/icons/vector-icon.svg" marginLeft={0.75} />
        </UserTitleText>
        <UserTitleText sx={{ textAlign: 'center', cursor: 'pointer' }}>
          No. of calls <Box component="img" src="/images/icons/vector-icon.svg" marginLeft={0.75} />
        </UserTitleText>
        <UserTitleText sx={{ textAlign: 'center', cursor: 'pointer' }}>
          Amount spent
          <Box component="img" src="/images/icons/vector-icon.svg" marginLeft={0.75} />
        </UserTitleText>
        <UserTitleText sx={{ textAlign: 'center' }}>Total credit packages purchased</UserTitleText>
      </TableRow>
    </TableHead>
  );
}
