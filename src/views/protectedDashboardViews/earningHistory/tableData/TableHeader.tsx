import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const DirectPurchaseTableHeader = [
  { id: 1, label: 'Client' },
  { id: 2, label: 'Duration' },
  { id: 3, label: 'Credits' },
  { id: 4, label: 'Data' },
  { id: 5, label: 'Amount earned' }
];

const InvoiceTableHeader = () => {
  const headerToRender = DirectPurchaseTableHeader;

  return (
    <TableHead>
      <TableRow>
        {headerToRender.map((dp, index) => (
          <TableCell key={index}>
            <UINewTypography variant="buttonLargeMenu" color="text.primary">
              {dp.label}
            </UINewTypography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default InvoiceTableHeader;
