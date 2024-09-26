/* eslint-disable @typescript-eslint/no-unused-vars */
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { DetailsDialogContent } from './SEO.styled';
import { AdminSEOProfileData } from 'services/adminSEOProfilePlan/adminSEOProfilePlan.services';

const SEOModel = ({
  open,
  onClose,
  selectedSEOData
}: {
  open: boolean;
  onClose: () => void;
  selectedSEOData: AdminSEOProfileData | null;
}) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle id="responsive-modal-title" display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
      <Typography variant="subtitle">Boost Details</Typography>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DetailsDialogContent dividers>
      {selectedSEOData && (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td>
                <strong>Model Name</strong>
              </td>
              <td>{selectedSEOData?.model_name || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Title</strong>
              </td>
              <td>{selectedSEOData?.title || '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>Keywords</strong>
              </td>
              <td>{selectedSEOData?.keywords ?? '-'}</td>
            </tr>
            <tr>
              <td>
                <strong>description</strong>
              </td>
              <td>{selectedSEOData?.description || '-'}</td>
            </tr>
          </tbody>
        </table>
      )}
    </DetailsDialogContent>
  </Dialog>
);

export default SEOModel;
