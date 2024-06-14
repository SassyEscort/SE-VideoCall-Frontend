import { Table, TableContainer } from '@mui/material';
import React from 'react';
import InvoiceTableHeader from './TableHeader';
import TableData from './TableData';

const MainTableLayout = () => {
  return (
    <TableContainer>
      <Table>
        <InvoiceTableHeader />
        <TableData />
      </Table>
    </TableContainer>
  );
};

export default MainTableLayout;
