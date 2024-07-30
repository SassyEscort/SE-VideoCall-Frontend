import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableHeadMain } from './PurchaseInvoiceTableBody.styled';
import { TableHederText } from '../payoutsAndInvoicesTable.styled';
import { FormattedMessage } from 'react-intl';

export const DirectPurchaseTableHeader = [
  { id: 1, label: <FormattedMessage id="BankAccount" /> },
  { id: 2, label: <FormattedMessage id="Amount" /> },
  { id: 3, label: <FormattedMessage id="Date" /> },
  { id: 4, label: <FormattedMessage id="Status" /> },
  { id: 5, label: <FormattedMessage id="Invoices" /> }
];

const InvoiceTableHeader = () => {
  const headerToRender = DirectPurchaseTableHeader;

  return (
    <TableHeadMain>
      <TableRow>
        {headerToRender?.map((dp, index) => (
          <TableCell
            align={index === 0 ? 'left' : 'center'}
            key={index}
            sx={{
              '&:last-of-type': {
                borderRight: 'none'
              }
            }}
          >
            <TableHederText>{dp?.label}</TableHederText>
          </TableCell>
        ))}
      </TableRow>
    </TableHeadMain>
  );
};

export default InvoiceTableHeader;
