import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

export default function CallLogsListHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ width: '1%' }}>Model Name</TableCell>
        <TableCell>Model Email</TableCell>
        <TableCell>Customer Name</TableCell>
        <TableCell>Customer Email</TableCell>
        <TableCell>Credits Used</TableCell>
        <TableCell>Call Type</TableCell>
        <TableCell>Credits Per Minute</TableCell>
        <TableCell>Rate Per Minute</TableCell>
        <TableCell>Amount Earned</TableCell>
        <TableCell>Start Time</TableCell>
        <TableCell>End Time</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}