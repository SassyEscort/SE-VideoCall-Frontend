import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

export default function BanCustomerList() {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ width: '1%' }}>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Ip Address</TableCell>
        <TableCell>Is Active</TableCell>
        <TableCell>CreatedDate</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}
