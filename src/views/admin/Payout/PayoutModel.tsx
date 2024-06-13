/* eslint-disable @typescript-eslint/no-unused-vars */
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';

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
    <DialogContent
      dividers
      sx={{
        '& td': {
          minWidth: '130px',
          wordBreak: 'break-all',
          verticalAlign: 'top'
        },
        '& th': {
          textAlign: 'left'
        }
      }}
    >
      {selectedPayoutData && (
        <>
          <table>
            <tr style={{ display: 'flex', gap: '37px' }}>
              <td>
                <strong>Affiliate Name</strong>
              </td>
              <td>{selectedPayoutData.name || '-'}</td>
            </tr>
            <tr style={{ display: 'flex', gap: '37px' }}>
              <td>
                <strong>Bank Name</strong>
              </td>
              <td>{selectedPayoutData.bank_name || '-'}</td>
            </tr>

            <tr style={{ display: 'flex', gap: '37px' }}>
              <td>
                <strong>Payout Amount</strong>
              </td>
              <td>{selectedPayoutData.amount ? `€${selectedPayoutData.amount.toFixed(2)}` : '-'}</td>
            </tr>
            <tr style={{ display: 'flex', gap: '37px' }}>
              <td>
                <strong>Status</strong>
              </td>
              <td>{selectedPayoutData.state || '-'}</td>
            </tr>
            <tr style={{ display: 'flex', gap: '37px' }}>
              <td>
                <strong>Created Date</strong>
              </td>
              <td>{selectedPayoutData?.created_at ? moment(selectedPayoutData?.created_at).format('MMMM DD, YYYY hh:mm A') : '-'}</td>
            </tr>
          </table>
        </>
      )}
    </DialogContent>
  </Dialog>
);

export default PayoutModel;
