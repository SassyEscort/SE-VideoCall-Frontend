import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { Divider } from '@mui/material';
import { PaginationButtonBoxContainer, TablePageInnerBoxContainer, TablePageMainBoxContainer } from './CustomPaginations.styled';

export type TablePagerProps = {
  page: number;
  rowsPerPage: number;
  totalRecords: number;
  handleChangePage: (val: number) => void;
  handleChangePageSize: (val: number) => void;
};

const TablePager = ({ page, rowsPerPage, handleChangePage, totalRecords }: TablePagerProps) => {
  const pagerCount = Math.ceil(totalRecords / rowsPerPage);

  const handlePreviousPage = () => {
    if (page > 1) handleChangePage(page - 1);
  };

  const handleNextPage = () => {
    if (page < pagerCount) handleChangePage(page + 1);
  };

  const startRow = (page - 1) * rowsPerPage + 1;
  const endRow = Math.min(page * rowsPerPage, totalRecords);

  const formattedStartRow = String(startRow).padStart(2, '0');
  const formattedEndRow = String(endRow).padStart(2, '0');

  return (
    <TablePageMainBoxContainer>
      <Box>
        <TablePageInnerBoxContainer>
          <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
            Showing {formattedStartRow}-{formattedEndRow} of {totalRecords}
          </Typography>
        </TablePageInnerBoxContainer>
      </Box>
      <PaginationButtonBoxContainer>
        <Box sx={{ marginLeft: '8px' }}>
          <IconButton onClick={handlePreviousPage} disabled={page === 1} size="small">
            <ChevronLeft />
          </IconButton>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(151, 151, 151, 1)' }} />

        <Box>
          <IconButton onClick={handleNextPage} disabled={page === pagerCount} size="small">
            <ChevronRight />
          </IconButton>
        </Box>
      </PaginationButtonBoxContainer>
    </TablePageMainBoxContainer>
  );
};

export default TablePager;
