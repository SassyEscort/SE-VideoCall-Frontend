import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { UserTitleText } from '../customerPage/CustomerContainer.styled';

export default function PayoutListHead() {
  return (
    <TableHead>
      <TableRow>
        <UserTitleText>Name</UserTitleText>
        <UserTitleText>Email</UserTitleText>
        <UserTitleText>Amount</UserTitleText>
        <UserTitleText>Bank Name</UserTitleText>
        <UserTitleText>State</UserTitleText>
        <UserTitleText>Created At</UserTitleText>
        <UserTitleText>Action</UserTitleText>
      </TableRow>
    </TableHead>
  );
}
