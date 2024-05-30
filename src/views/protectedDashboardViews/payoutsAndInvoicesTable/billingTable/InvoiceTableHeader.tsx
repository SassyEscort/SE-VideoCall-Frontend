import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UINewTypography from 'components/UIComponents/UINewTypography';

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
    <TableHead>
      <TableRow>
        {headerToRender.map((dp, index) => (
          <TableCell key={index}>
            <UINewTypography variant="SubtitleLargeBold">{dp.label}</UINewTypography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default InvoiceTableHeader;
