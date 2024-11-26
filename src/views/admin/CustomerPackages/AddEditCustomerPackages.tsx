'use client';

import LoadingButton from '@mui/lab/LoadingButton';
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
import { useState } from 'react';
import {
  adminCustomerPackagesServices,
  AdminPackagesRes,
  AdminPackageUpdateParams
} from 'services/adminCustomerPackages/adminCustomerPackages.services';
import { useAuthContext } from 'contexts/AuthContext';
import { ErrorMessage } from 'constants/common.constants';
import { toast } from 'react-toastify';

const AddEditCustomerPackages = ({
  open,
  onClose,
  selectedPackages,
  handelFetchPackages
}: {
  open: boolean;
  onClose: () => void;
  selectedPackages: AdminPackagesRes | null;
  handelFetchPackages: () => void;
}) => {
  const { token } = useAuthContext();

  const validationSchema = yup.object({
    amount: yup
      .string()
      .required('Price is required')
      .test('is-greater-than-zero', 'Price must be greater than 0', (value) => parseFloat(value) > 0.0),
    credits: yup.number().required('Credits is required').min(1, 'Credits must be greater than 0')
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (values: AdminPackageUpdateParams) => {
    setIsLoading(true);
    try {
      if (token.token) {
        const res = await adminCustomerPackagesServices.addNewPackage(values, token.token);
        if (res) {
          if (res.code === 200) {
            toast.success('New Package Added Successfully');
            handelFetchPackages();
          } else if (res.code === 400) {
            toast.error('Credits & Amount Should Be greater than 0');
          } else {
            toast.error(ErrorMessage);
          }
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
    onClose();
    setIsLoading(false);
  };

  const handleUpdatePackage = async (values: AdminPackageUpdateParams) => {
    setIsLoading(true);
    try {
      if (token.token && selectedPackages) {
        const res = await adminCustomerPackagesServices.updatePackage(selectedPackages?.id, values, token.token);
        if (res) {
          if (res.code === 200) {
            toast.success('Package Updated Successfully');
            handelFetchPackages();
          }
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
    onClose();
    setIsLoading(false);
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
        <Typography variant="subtitle">{selectedPackages ? 'Edit' : 'Add'} Packages</Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Formik
        initialValues={{
          tag: selectedPackages?.tag || '',
          amount: selectedPackages?.amount?.toString() || '0.0',
          credits: selectedPackages?.credits || 0.0,
          discount: selectedPackages?.discount?.toString() || '0.0'
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const transformedValues = {
            ...values,
            amount: parseFloat(values.amount),
            discount: parseFloat(values.discount)
          };
          selectedPackages ? handleUpdatePackage(transformedValues) : handleFormSubmit(transformedValues);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, setFieldValue, handleBlur, handleSubmit }) => {
          return (
            <Box component="form" onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Stack
                  spacing={2}
                  sx={{
                    '& .MuiFormHelperText-root': {
                      marginLeft: 0
                    }
                  }}
                >
                  <TextField
                    name="tag"
                    label="Add tag"
                    value={values.tag}
                    error={Boolean(touched.tag && errors.tag)}
                    helperText={touched.tag && errors.tag ? errors.tag : ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextField
                    name="credits"
                    label="No. of credits"
                    value={values.credits}
                    error={Boolean(touched.credits && errors.credits)}
                    helperText={touched.credits && errors.credits ? errors.credits : ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextField
                    name="amount"
                    label="Price of packages"
                    value={values.amount}
                    error={Boolean(touched.amount && errors.amount)}
                    helperText={touched.amount && errors.amount ? errors.amount : ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextField
                    name="discount"
                    label="discount"
                    value={values.discount}
                    error={Boolean(touched.discount && errors.discount)}
                    helperText={touched.discount && errors.discount ? errors.discount : ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Stack>
              </DialogContent>
              <DialogActions sx={{ px: 3, py: 2 }}>
                <Button variant="outlined" size="large" onClick={onClose}>
                  Cancel
                </Button>
                <LoadingButton loading={isLoading} size="large" type="submit" variant="contained" color="primary">
                  {selectedPackages ? 'Edit' : 'Add'}
                </LoadingButton>
              </DialogActions>
            </Box>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default AddEditCustomerPackages;
