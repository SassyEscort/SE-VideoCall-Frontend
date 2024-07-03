/* eslint-disable @typescript-eslint/no-unused-vars */
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { DetailsDialogContent, DialogContainer } from './CustomerContainer.styled';
import { CustomerDetailsPage } from 'services/adminModel/types';

const CustorModel = ({
  open,
  onClose,
  selectedPayoutData
}: {
  open: boolean;
  onClose: () => void;
  selectedPayoutData: CustomerDetailsPage | null;
}) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogContainer id="responsive-modal-title">
      <Typography variant="subtitle">Customer</Typography>
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
                <strong>Created Date</strong>
              </td>
              <td>{selectedPayoutData?.createdDate || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>User Name</strong>
              </td>
              <td>{selectedPayoutData?.userName || '-'}</td>
            </tr>
          </tbody>
        </table>
      )}
    </DetailsDialogContent>
  </Dialog>
);

export default CustorModel;
