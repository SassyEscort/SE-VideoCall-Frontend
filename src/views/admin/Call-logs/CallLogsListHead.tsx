import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

export default function CallLogsListHead({ isAdmin, UpdatePermission }: { isAdmin: boolean; UpdatePermission: boolean }) {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ width: '1%' }}>Model Name</TableCell>
        <TableCell>Model Email</TableCell>
        <TableCell>Customer Name</TableCell>
        <TableCell>Customer Email</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Call Created Date</TableCell>
        <TableCell>Credits Used</TableCell>
        <TableCell>Call Type (paid/free)</TableCell>
        <TableCell>Call Type</TableCell>
        <TableCell>Credits Per Minute</TableCell>
        <TableCell>Rate Per Minute</TableCell>
        <TableCell>Amount Earned</TableCell>
        <TableCell>Time duration</TableCell>
        <TableCell>Screenshot interval</TableCell>
        <TableCell>Screenshot count</TableCell>
        <TableCell>Ended by</TableCell>
        {(isAdmin || UpdatePermission) && <TableCell>Action</TableCell>}
      </TableRow>
    </TableHead>
  );
}
