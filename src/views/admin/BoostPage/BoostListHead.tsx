import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

export default function BoostListHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ width: '1%' }}>Name</TableCell>
        <TableCell>Duration</TableCell>
        <TableCell>Is Free</TableCell>
        <TableCell>Is Active</TableCell>
        <TableCell>Cost</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}
