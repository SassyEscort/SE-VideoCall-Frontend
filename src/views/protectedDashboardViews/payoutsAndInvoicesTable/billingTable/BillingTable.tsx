import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import InvoiceTableHeader from './InvoiceTableHeader';
import PurchaseInvoiceTableBodyV2 from './PurchaseInvoiceTableBody';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';

export type sampleInvoiceType = {
  id: number;
  bankName: string;
  accountNumber: string;
  amount: number;
  date: string;
  status: string;
};

const BillingTable = () => {
  const sampleInvoices: sampleInvoiceType[] = [
    {
      id: 1,
      bankName: 'To Silicon Valley bank',
      accountNumber: '**** **** **43 3214',
      amount: 12000,
      date: '21 April 2024',
      status: 'Pending'
    },
    {
      id: 2,
      bankName: 'To Chase Bank',
      accountNumber: '**** **** **12 3456',
      amount: 15000,
      date: '22 April 2024',
      status: 'Completed'
    },
    {
      id: 3,
      bankName: 'To Bank of America',
      accountNumber: '**** **** **78 9101',
      amount: 18000,
      date: '23 April 2024',
      status: 'Cancelled'
    }
  ];
  return (
    <>
      <>
        <TableContainer sx={{ pb: 4, '& th': { py: 1 }, '& td': { py: 1.25 } }}>
          <Table>
            <InvoiceTableHeader />
            <PurchaseInvoiceTableBodyV2 sampleInvoices={sampleInvoices} />
          </Table>
        </TableContainer>
      </>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <UITheme2Pagination />
      </Box>
    </>
  );
};

export default BillingTable;
