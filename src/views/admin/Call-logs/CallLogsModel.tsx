/* eslint-disable @typescript-eslint/no-unused-vars */
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { DetailsDialogContent } from './CallLogs.styled';
import { callLogDataResponse } from 'services/adminServices/call-list/callListDetailsService';
import { formatDuration } from 'utils/dateAndTime';

const CallLogsModel = ({
  open,
  onClose,
  selectedPayoutData
}: {
  open: boolean;
  onClose: () => void;
  selectedPayoutData: callLogDataResponse | null;
}) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle id="responsive-modal-title" display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
      <Typography variant="subtitle">Call Logs History</Typography>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DetailsDialogContent dividers>
      {selectedPayoutData && (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td>
                <strong>Model Name</strong>
              </td>
              <td>{selectedPayoutData?.model_name || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Model Email</strong>
              </td>
              <td>{selectedPayoutData?.model_email || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Customer Name</strong>
              </td>
              <td>{selectedPayoutData?.customer_name || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Customer Email</strong>
              </td>
              <td>{selectedPayoutData?.customer_email || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Status</strong>
              </td>
              <td>{selectedPayoutData?.status || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Credits Used</strong>
              </td>
              <td>{selectedPayoutData?.credits_used || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Call Type</strong>
              </td>
              <td>{selectedPayoutData?.call_type || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Credits Per Minute</strong>
              </td>
              <td>{selectedPayoutData?.credits_per_minute || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Rate Per Minute</strong>
              </td>
              <td>{selectedPayoutData?.rate_per_minute || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Amount Earned</strong>
              </td>
              <td>{selectedPayoutData?.amount_earned || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Time Duration</strong>
              </td>
              <td>
                <td>{formatDuration(selectedPayoutData?.duration || '-')}</td>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </DetailsDialogContent>
  </Dialog>
);

export default CallLogsModel;
