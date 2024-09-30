import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Box from '@mui/material/Box';
import { TableCellContent } from './ModelDelete.style';
import { PaginationSortByOption } from 'components/common/CustomPaginations/type';
import SouthIcon from '@mui/icons-material/South';

export default function ModelListHead({
  sortByOptions,
  orderField,
  orderType,
  handleChangeOrderBy
}: {
  sortByOptions: PaginationSortByOption[];
  orderField: string;
  orderType: string;
  handleChangeOrderBy: (field: string, type: string) => void;
}) {
  return (
    <TableHead sx={{ border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '10px' }}>
      <TableRow>
        <TableCellContent>Name</TableCellContent>
        <TableCellContent>Email</TableCellContent>
        <TableCellContent
          sx={{ textAlign: 'left', cursor: 'pointer' }}
          onClick={() => handleChangeOrderBy(orderField, orderType === 'asc' ? 'desc' : 'asc')}
        >
          Created Date
          {orderType === 'asc' ? (
            <Box component="img" src="/images/icons/vector-icon.svg" marginLeft={0.75} />
          ) : (
            <Box component="span" marginLeft={0.75}>
              <SouthIcon sx={{ width: '12px', height: '12px' }} />
            </Box>
          )}
        </TableCellContent>
        <TableCellContent sx={{ textAlign: 'left', cursor: 'pointer' }}>
          No. of calls
          <Box component="img" src="/images/icons/vector-icon.svg" marginLeft={0.75} />
        </TableCellContent>
        <TableCellContent sx={{ width: '1%', cursor: 'pointer' }}>
          Profile views
          <Box component="img" src="/images/icons/vector-icon.svg" marginLeft={0.75} />
        </TableCellContent>
        <TableCellContent sx={{ textAlign: 'center' }}>Status</TableCellContent>
        <TableCellContent sx={{ textAlign: 'center' }}>Action</TableCellContent>
      </TableRow>
    </TableHead>
  );
}
