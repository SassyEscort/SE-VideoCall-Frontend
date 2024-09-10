import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const DeleteModal = ({
  open,
  handleClose,
  handleDeleteClick
}: {
  open: boolean;
  handleClose: () => void;
  handleDeleteClick: () => void;
}) => (
  <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">Are you sure, you want to delete?</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} size="large">
        No
      </Button>
      <Button onClick={handleDeleteClick} size="large">
        Yes
      </Button>
    </DialogActions>
  </Dialog>
);

export default DeleteModal;
