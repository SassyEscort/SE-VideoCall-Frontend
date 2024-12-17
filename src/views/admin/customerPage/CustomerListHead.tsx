import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

export default function CustomerListHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell sx={{ textAlign: 'left' }}>Created date</TableCell>
        <TableCell> Customer banned </TableCell>
        <TableCell sx={{ textAlign: 'left' }}>User name</TableCell>
        <TableCell>Email verified</TableCell>
        <TableCell>Credits purchased</TableCell>
        <TableCell>Total call duration</TableCell>
        <TableCell>Number of calls</TableCell>
        <TableCell>Amount spent</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}
