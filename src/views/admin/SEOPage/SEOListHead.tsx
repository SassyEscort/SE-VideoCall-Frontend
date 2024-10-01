import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { UserTitleText } from '../customerPage/CustomerContainer.styled';

export default function SEOListHead() {
  return (
    <TableHead>
      <TableRow>
        <UserTitleText>Model Name</UserTitleText>
        <UserTitleText>Title</UserTitleText>
        <UserTitleText>Keywords</UserTitleText>
        <UserTitleText>Description</UserTitleText>
        <UserTitleText>Action</UserTitleText>
      </TableRow>
    </TableHead>
  );
}
