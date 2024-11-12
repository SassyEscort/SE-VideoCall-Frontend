import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

export default function SEOListHead({ isAdmin, UpdatePermission }: { isAdmin: boolean; UpdatePermission: boolean }) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Model Name</TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Keywords</TableCell>
        <TableCell>Description</TableCell>
        {(isAdmin || UpdatePermission) && <TableCell>Action</TableCell>}
      </TableRow>
    </TableHead>
  );
}
