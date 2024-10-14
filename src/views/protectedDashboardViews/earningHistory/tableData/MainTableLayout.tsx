import React from 'react';
import InvoiceTableHeader from './TableHeader';
import TableData from './TableData';
import { ModelEarningHistoryPageDetailsRes } from 'services/modelEarningHistory/typs';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';

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
