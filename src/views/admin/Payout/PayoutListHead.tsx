import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

export default function PayoutListHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Amount</TableCell>
        <TableCell>Bank Name</TableCell>
        <TableCell>State</TableCell>
        <TableCell>Created At</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}
