import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const DirectPurchaseTableHeader = [
  { id: 1, client: 'Rohit Vrikud', duration: '120 mins', credits: '1200', date: '21 April 2024', amount: '$ 12,000' }
];

const TableData = () => {
  const headerToRender = DirectPurchaseTableHeader;
  return (
    <TableBody>
      {headerToRender.map((dp, index) => (
        <TableRow key={index}>
          <TableCell>
            <UINewTypography variant="bodySemiBold" color="text.secondary">
              {dp.client}
            </UINewTypography>
          </TableCell>
          <TableCell>
            <UINewTypography variant="bodySemiBold" color="text.secondary">
              {dp.duration}
            </UINewTypography>
          </TableCell>{' '}
          <TableCell>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Box
                component="img"
                src="/images/workercards/dollar-img.png"
                sx={{
                  width: '20px',
                  height: '20px'
                }}
              />
              <UINewTypography variant="bodySemiBold" color="text.secondary">
                {dp.credits}
              </UINewTypography>
            </Box>
          </TableCell>{' '}
          <TableCell>
            <UINewTypography variant="bodySemiBold" color="text.secondary">
              {dp.date}
            </UINewTypography>
          </TableCell>
          <TableCell>
            <UINewTypography variant="bodySemiBold" color="text.secondary">
              {dp.amount}
            </UINewTypography>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableData;
