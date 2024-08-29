import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

export default function ModelListHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Country</TableCell>
        <TableCell sx={{ textAlign: 'center' }}>Status</TableCell>
        <TableCell sx={{ textAlign: 'left' }}>Created Date</TableCell>
        <TableCell sx={{ textAlign: 'left' }}>Last Active</TableCell>
        <TableCell sx={{ textAlign: 'left' }}>Last Login</TableCell>
        <TableCell sx={{ width: '1%' }}>Verification Step</TableCell>
        <TableCell sx={{ width: '1%' }}>Email Verified</TableCell>
        <TableCell sx={{ width: '1%' }}>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}
