import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

export default function UserListHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Sr.no</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Permission</TableCell>
        <TableCell sx={{ width: '15%' }}>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}
