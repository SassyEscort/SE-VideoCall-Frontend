import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

export default function CallReviewListHead({ isAdmin, UpdatePermission }: { isAdmin: boolean; UpdatePermission: boolean }) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Customer Name</TableCell>
        <TableCell>Duration</TableCell>
        <TableCell>Model Name</TableCell>
        <TableCell>Rejected Reason</TableCell>
        <TableCell>Review Type</TableCell>
        <TableCell>Screenshot Count</TableCell>
        <TableCell>Status</TableCell>
        {(isAdmin || UpdatePermission) && <TableCell>Action</TableCell>}
      </TableRow>
    </TableHead>
  );
}
