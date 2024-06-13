/* eslint-disable @typescript-eslint/no-unused-vars */
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { DetailsDialogContent } from './Payout.styled';

const PayoutModel = ({ open, onClose, selectedPayoutData }: { open: boolean; onClose: () => void; selectedPayoutData: any | null }) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle
      id="responsive-modal-title"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Typography variant="subtitle">Payout History</Typography>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DetailsDialogContent dividers>
      {selectedPayoutData && (
        <>
          <TableContainer>
            <Table sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Model Name</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{selectedPayoutData?.name || '-'}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Bank Name</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{selectedPayoutData?.bank_name || '-'}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Payout Amount</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{selectedPayoutData?.amount ? `€${selectedPayoutData.amount.toFixed(2)}` : '-'}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Status</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{selectedPayoutData?.state || '-'}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Created Date</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {selectedPayoutData?.created_at ? moment(selectedPayoutData.created_at).format('MMMM DD, YYYY hh:mm A') : '-'}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </DetailsDialogContent>
  </Dialog>
);

export default PayoutModel;
