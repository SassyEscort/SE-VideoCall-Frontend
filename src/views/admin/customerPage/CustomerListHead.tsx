import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

export default function CustomerListHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell sx={{ textAlign: 'left' }}>Created Date</TableCell>
        <TableCell sx={{ textAlign: 'left' }}>User Name</TableCell>
        <TableCell>Email Verified</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}
