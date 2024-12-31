/* eslint-disable @typescript-eslint/no-unused-vars */
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { CustomerDetailsPage } from 'services/adminModel/types';
import { DialogContainer } from '../customerPage/CustomerContainer.styled';
import { DetailsDialogContent } from './CallReview.styled';
import { CallReviewDataResponse } from 'services/adminServices/call-review/callReviewService';

const CallReviewModel = ({
  open,
  onClose,
  selectedPayoutData
}: {
  open: boolean;
  onClose: () => void;
  selectedPayoutData: CallReviewDataResponse | null;
}) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogContainer id="responsive-modal-title">
      <Typography variant="subtitle">Call Review</Typography>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </DialogContainer>
    <DetailsDialogContent dividers>
      {selectedPayoutData && (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td>
                <strong>Customer Name</strong>
              </td>
              <td>{selectedPayoutData?.customer_name || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Duration</strong>
              </td>
              <td>{selectedPayoutData?.duration || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Model Name</strong>
              </td>
              <td>{selectedPayoutData?.model_name || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Rejected Reason</strong>
              </td>
              <td>{selectedPayoutData?.rejected_reason || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Review Type</strong>
              </td>
              <td>{selectedPayoutData?.review_type || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Screenshot Count</strong>
              </td>
              <td>{selectedPayoutData?.screenshot_count || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Status</strong>
              </td>
              <td>{selectedPayoutData?.status || '-'}</td>
            </tr>
          </tbody>
        </table>
      )}
    </DetailsDialogContent>
  </Dialog>
);

export default CallReviewModel;
