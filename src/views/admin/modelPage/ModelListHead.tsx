import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Box from '@mui/material/Box';
import { TableCellContent } from './ModelDelete.style';

export default function ModelListHead() {
  return (
    <TableHead sx={{ border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '10px' }}>
      <TableRow>
        <TableCellContent>Name</TableCellContent>
        <TableCellContent>Email</TableCellContent>
        <TableCellContent sx={{ textAlign: 'left' }}>
          Created Date
          <Box component="img" src="/images/icons/vector-icon.svg" marginLeft={0.75} />
        </TableCellContent>
        <TableCellContent sx={{ textAlign: 'left' }}>
          No. of calls
          <Box component="img" src="/images/icons/vector-icon.svg" marginLeft={0.75} />
        </TableCellContent>
        <TableCellContent sx={{ width: '1%' }}>
          Profile views
          <Box component="img" src="/images/icons/vector-icon.svg" marginLeft={0.75} />
        </TableCellContent>
        <TableCellContent sx={{ textAlign: 'center' }}>Status</TableCellContent>
        <TableCellContent sx={{ textAlign: 'center' }}>Action</TableCellContent>
      </TableRow>
    </TableHead>
  );
}
