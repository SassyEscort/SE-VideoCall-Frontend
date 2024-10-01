import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { UserTitleText } from '../customerPage/CustomerContainer.styled';

export default function BoostListHead() {
  return (
    <TableHead>
      <TableRow>
        <UserTitleText sx={{ width: '1%' }}>Name</UserTitleText>
        <UserTitleText>Duration</UserTitleText>
        <UserTitleText>Is Free</UserTitleText>
        <UserTitleText>Is Active</UserTitleText>
        <UserTitleText>Cost</UserTitleText>
        <UserTitleText>Action</UserTitleText>
      </TableRow>
    </TableHead>
  );
}
