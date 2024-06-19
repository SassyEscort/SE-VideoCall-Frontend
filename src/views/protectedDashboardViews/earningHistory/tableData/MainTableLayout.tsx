import { Table, TableContainer } from '@mui/material';
import React from 'react';
import InvoiceTableHeader from './TableHeader';
import TableData from './TableData';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import { EarningHistoryPagination } from '../EarningHistory.styled';
import { ModelEarningHistoryResponse } from 'views/protectedModelViews/verification/verificationTypes';

const MainTableLayout = ({ modelEarningHistory }: { modelEarningHistory: ModelEarningHistoryResponse }) => {
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
