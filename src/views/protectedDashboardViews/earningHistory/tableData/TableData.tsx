import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { ModelEarningHistoryPageDetailsRes } from 'services/modelEarningHistory/typs';
import moment from 'moment';

const TableData = ({ modelEarningHistory }: { modelEarningHistory: ModelEarningHistoryPageDetailsRes }) => {
  return (
    <TableBody>
      {modelEarningHistory?.data?.ledger_details.map((dp, index) => (
        <TableRow key={index}>
          <TableCell>
            <UINewTypography variant="bodySemiBold" color="text.secondary">
              client
            </UINewTypography>
          </TableCell>
          <TableCell>
            <UINewTypography variant="bodySemiBold" color="text.secondary">
              duration
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
              {moment(dp.created_at).format('DD MMMM YYYY')}
            </UINewTypography>
          </TableCell>
          <TableCell>
            <UINewTypography variant="bodySemiBold" color="text.secondary">
              $ {dp.amount}
            </UINewTypography>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableData;
