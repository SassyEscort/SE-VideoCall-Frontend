import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';

export const DirectPurchaseTableHeader = [
  { id: 1, label: <FormattedMessage id="Client" /> },
  { id: 2, label: <FormattedMessage id="Durationn" /> },
  { id: 3, label: <FormattedMessage id="Credits" /> },
  { id: 4, label: <FormattedMessage id="Date" /> },
  { id: 5, label: <FormattedMessage id="AmountEarned" /> }
];

const InvoiceTableHeader = () => {
  const headerToRender = DirectPurchaseTableHeader;

  return (
    <TableHead>
      <TableRow>
        {headerToRender?.map((dp, index) => (
          <TableCell key={index} sx={{ border: 'none', padding: '24px 16px' }}>
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
