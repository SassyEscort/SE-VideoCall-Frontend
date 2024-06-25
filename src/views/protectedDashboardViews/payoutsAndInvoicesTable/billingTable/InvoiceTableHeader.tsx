import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { TableHeadMain } from './PurchaseInvoiceTableBody.styled';

export const DirectPurchaseTableHeader = [
  { id: 1, label: 'Bank Account' },
  { id: 2, label: 'Amount' },
  { id: 3, label: 'Date' },
  { id: 4, label: 'Status' },
  { id: 5, label: 'Invoices' }
];

const InvoiceTableHeader = () => {
  const headerToRender = DirectPurchaseTableHeader;

  return (
    <TableHeadMain>
      <TableRow>
        {headerToRender.map((dp, index) => (
          <TableCell
            align={index === 0 ? 'left' : 'center'}
            key={index}
            sx={{
              '&:last-of-type': {
                borderRight: 'none'
              }
            }}
          >
            <UINewTypography variant="SubtitleLargeBold" color="text.primary">
              {dp.label}
            </UINewTypography>
          </TableCell>
        ))}
      </TableRow>
    </TableHeadMain>
  );
};

export default InvoiceTableHeader;
