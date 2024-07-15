import { Table, TableContainer } from '@mui/material';
import React from 'react';
import InvoiceTableHeader from './TableHeader';
import TableData from './TableData';
import { ModelEarningHistoryPageDetailsRes } from 'services/modelEarningHistory/typs';

const MainTableLayout = ({ modelEarningHistory }: { modelEarningHistory: ModelEarningHistoryPageDetailsRes }) => {
  return (
    <TableContainer>
      <Table>
        <InvoiceTableHeader />
        <TableData modelEarningHistory={modelEarningHistory} />
      </Table>
    </TableContainer>
  );
};

export default MainTableLayout;
