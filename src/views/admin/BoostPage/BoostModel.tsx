/* eslint-disable @typescript-eslint/no-unused-vars */
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { DetailsDialogContent } from './Boost.styled';
import { AdminBoostProfileData } from 'services/adminBoostProfilePlan/adminBoostProfilePlan.services';

const BoostModel = ({
  open,
  onClose,
  selectedBoostData
}: {
  open: boolean;
  onClose: () => void;
  selectedBoostData: AdminBoostProfileData | null;
}) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle id="responsive-modal-title" display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
      <Typography variant="subtitle">Boost Details</Typography>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DetailsDialogContent dividers>
      {selectedBoostData && (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td>
                <strong>Name</strong>
              </td>
              <td>{selectedBoostData?.name || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>duration</strong>
              </td>
              <td>{selectedBoostData?.duration || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Is Free</strong>
              </td>
              <td>{selectedBoostData?.is_free ?? '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Is active</strong>
              </td>
              <td>{selectedBoostData?.is_active || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Cost</strong>
              </td>
              <td>{selectedBoostData?.cost || '-'}</td>
            </tr>
          </tbody>
        </table>
      )}
    </DetailsDialogContent>
  </Dialog>
);

export default BoostModel;
