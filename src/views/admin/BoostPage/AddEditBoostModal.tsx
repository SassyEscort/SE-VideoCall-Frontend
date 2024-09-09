import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {
  AdminBoostProfileData,
  AdminBoostProfileParam,
  adminBoostProfilePlanServices
} from 'services/adminBoostProfilePlan/adminBoostProfilePlan.services';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { ErrorMessage } from 'constants/common.constants';

// import { AdminCampaign } from '@/types/api/admin/auth/Campaign/AdminCampaignResponse';
// import { CampaignPaginationType } from './CampaignPageContainer';
// import useAddNewCampaign from '@/services/admin/hooks/AdminCampaign/useAddNewCampaign';
// import { AddNewCampaignParams } from '@/types/api/admin/campaigns/AddCampaign';
// import useEditCampaign from '@/services/admin/hooks/AdminCampaign/useEditCampaign';

const AddEditBoostModal = ({
  open,
  onClose,
  selectedBoost
  // handleChangeFilter
}: {
  open: boolean;
  onClose: () => void;
  selectedBoost: AdminBoostProfileData | null;
  // handleChangeFilter: (value: CampaignPaginationType) => void;
}) => {
  const validationSchema = yup.object({
    duration: yup.string().required('Code is required'),
    name: yup.string().required('Name is required'),
    cost: yup.string().required('URL is required'),
    is_free: yup.string().required('Is free is required')
  });

  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  const handleFormSubmit = async (values: AdminBoostProfileParam) => {
    setIsLoading(true);
    const res = await adminBoostProfilePlanServices.adminAddBoostProfile(values, token.token);
    if (res) {
      if (res.code === 200) {
        toast.success('Boost added successfully');
        onClose();
      } else {
        toast.error(ErrorMessage);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  const handleFormEdit = async (values: AdminBoostProfileParam) => {
    setIsLoading(true);
    const res = await adminBoostProfilePlanServices.adminUpdateBoostProfile(values, Number(selectedBoost?.id), token.token);
    if (res) {
      if (res.code === 200) {
        toast.success('Boost edit successfully');
        onClose();
      } else {
        toast.error(ErrorMessage);
      }
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        id="responsive-modal-title"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="subtitle">{selectedBoost ? 'Edit' : 'Add'} Boost</Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Formik
        initialValues={{
          id: selectedBoost?.id || 0,
          name: selectedBoost?.name || '',
          duration: selectedBoost?.duration || 0,
          cost: selectedBoost?.cost || 0,
          is_free: selectedBoost?.is_free ?? false
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          if (selectedBoost) await handleFormEdit(values);
          else await handleFormSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Box component="form" onSubmit={handleSubmit}>
            <DialogContent dividers>
              <Stack spacing={2}>
                <TextField
                  name="name"
                  label="Name"
                  value={values.name}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name ? errors.name : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  name="duration"
                  label="Duration"
                  value={values.duration}
                  error={Boolean(touched.duration && errors.duration)}
                  helperText={touched.duration && errors.duration ? errors.duration : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  name="cost"
                  label="Cost"
                  value={values.cost}
                  error={Boolean(touched.cost && errors.cost)}
                  helperText={touched.cost && errors.cost ? errors.cost : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Is free</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="is_free"
                    id="demo-simple-select"
                    value={values.is_free}
                    label="Is free"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={0}>No</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2 }}>
              <Button variant="outlined" size="large" onClick={onClose}>
                Cancel
              </Button>
              <LoadingButton loading={isLoading} size="large" type="submit" variant="contained" color="primary">
                Add
              </LoadingButton>
            </DialogActions>
          </Box>
        )}
      </Formik>
    </Dialog>
  );
};

export default AddEditBoostModal;
