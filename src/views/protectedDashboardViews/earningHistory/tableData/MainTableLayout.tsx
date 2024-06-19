import { Table, TableContainer } from '@mui/material';
import React from 'react';
import InvoiceTableHeader from './TableHeader';
import TableData from './TableData';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import { EarningHistoryPagination } from '../EarningHistory.styled';
import { ModelEarningHistoryPageDetailsRes } from 'services/modelEarningHistory/typs';

const MainTableLayout = ({ modelEarningHistory }: { modelEarningHistory: ModelEarningHistoryPageDetailsRes }) => {
  return (
    <TableContainer>
      <Table>
        <InvoiceTableHeader />
        <TableData modelEarningHistory={modelEarningHistory} />
      </Table>
      <EarningHistoryPagination>
        <UITheme2Pagination />
      </EarningHistoryPagination>
    </TableContainer>
  );
};

export default MainTableLayout;
