/* eslint-disable @typescript-eslint/no-unused-vars */
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { BanCustomerDetails } from 'services/customerDetails/customerDetails.services';
import { DialogContainer } from '../customerPage/CustomerContainer.styled';
import { DetailsDialogContent } from '../BoostPage/Boost.styled';

const BanCustomerModel = ({
  open,
  onClose,
  selectedPayoutData
}: {
  open: boolean;
  onClose: () => void;
  selectedPayoutData: BanCustomerDetails | null;
}) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogContainer id="responsive-modal-title">
      <Typography variant="subtitle">Banned Customer</Typography>
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
                <strong>Name</strong>
              </td>
              <td>{selectedPayoutData?.name || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Email</strong>
              </td>
              <td>{selectedPayoutData?.email || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>IP Address</strong>
              </td>
              <td>{selectedPayoutData?.ip_address || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Device Signature</strong>
              </td>
              <td>{selectedPayoutData?.device_signature || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Created Date</strong>
              </td>
              <td>{selectedPayoutData?.createdDate || '-'}</td>
            </tr>
          </tbody>
        </table>
      )}
    </DetailsDialogContent>
  </Dialog>
);

export default BanCustomerModel;
