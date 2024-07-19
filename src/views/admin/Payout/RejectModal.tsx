import Close from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { payoutDetailsService } from 'services/adminServices/payout/payoutDetailsService';
import { RejectParams } from '../modelPage/type';

const RejectModal = ({
  open,
  handleClose,
  selectedId,
  handleRefetch,
  handleCloseMenu
}: {
  open: boolean;
  handleClose: () => void;
  selectedId: Number;
  handleRefetch: () => void;
  handleCloseMenu: () => void;
}) => {
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
  }, []);

  const validationSchema = yup.object({
    rejection_reason: yup.string().required('Remark is required')
  });

  const handleRejectClick = async (values: RejectParams) => {
    setLoading(true);
    await payoutDetailsService.payoutAction(token.token, Number(selectedId), true, values.rejection_reason);
    handleRefetch();
    handleCloseMenu();
    handleClose();
    setLoading(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle
        id="responsive-modal-title"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="subtitle">Reject Payout</Typography>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <Formik
        initialValues={{
          rejection_reason: ''
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          handleRejectClick(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Box component="form" onSubmit={handleSubmit}>
            <DialogContent dividers>
              <TextField
                name="rejection_reason"
                label="Remark"
                value={values.rejection_reason}
                multiline
                rows={3}
                fullWidth
                error={Boolean(touched.rejection_reason && errors.rejection_reason)}
                helperText={touched.rejection_reason && errors.rejection_reason ? errors.rejection_reason : ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2 }}>
              <Button variant="outlined" size="large" onClick={handleClose}>
                Cancel
              </Button>
              <LoadingButton loading={loading} size="large" type="submit" variant="contained" color="primary">
                Reject
              </LoadingButton>
            </DialogActions>
          </Box>
        )}
      </Formik>
    </Dialog>
  );
};

export default RejectModal;
