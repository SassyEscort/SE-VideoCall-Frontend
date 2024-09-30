import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { TableCellContent } from '../modelPage/ModelDelete.style';

export default function CallLogsListHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCellContent sx={{ width: '1%' }}>Model Name</TableCellContent>
        <TableCellContent>Model Email</TableCellContent>
        <TableCellContent>Customer Name</TableCellContent>
        <TableCellContent>Customer Email</TableCellContent>
        <TableCellContent>Status</TableCellContent>
        <TableCellContent>Call Created Date</TableCellContent>
        <TableCellContent>Credits Used</TableCellContent>
        <TableCellContent>Call Type</TableCellContent>
        <TableCellContent>Credits Per Minute</TableCellContent>
        <TableCellContent>Rate Per Minute</TableCellContent>
        <TableCellContent>Amount Earned</TableCellContent>
        <TableCellContent>Time duration</TableCellContent>
        <TableCellContent>Action</TableCellContent>
      </TableRow>
    </TableHead>
  );
}
