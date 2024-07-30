import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';

export type TablePagerProps = {
  page: number;
  rowsPerPage: number;
  totalRecords: number;
  handleChangePage: (val: number) => void;
  handleChangePageSize: (val: number) => void;
};

const TablePager = ({ page, rowsPerPage, handleChangePage, handleChangePageSize, totalRecords }: TablePagerProps) => {
  const pagerCount = Math.ceil(totalRecords / rowsPerPage);

  return (
    <Box
      sx={{
        justifyContent: 'right',
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}
    >
      <Pagination count={pagerCount || 1} onChange={(e, val) => handleChangePage(val)} page={page} />
      <Box display="flex" alignItems="center" gap={1}>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Rows per page:</Typography>
        <Select value={rowsPerPage} onChange={(e) => handleChangePageSize(e.target.value as number)} size="small">
          {[10, 25, 50, 100]?.map((row, index) => (
            <MenuItem key={index} value={row}>
              {row}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default TablePager;
