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
import { useAuthContext } from 'contexts/AuthContext';
import { ErrorMessage } from 'constants/common.constants';
import { toast } from 'react-toastify';
import { adminAddCreditsServices, CreditAddParams } from 'services/adminAddCredits/adminAddCredit.services';
import { FormControl, MenuItem, Select } from '@mui/material';
import { StyledSelectInputLabel } from 'components/UIComponents/UIStyledSelect';

const AmountType = [
  { value: 'Credit', label: 'Credit' },
  { value: 'Debit', label: 'Debit' }
];

const AdminAddCreditModel = ({
  open,
  user_name,
  user_type,
  user_credit,
  onClose,
  handleFetchData
}: {
  open: boolean;
  user_name: string;
  user_type: string;
  user_credit: number;
  onClose: () => void;
  handleFetchData: () => void;
}) => {
  const { token } = useAuthContext();

  const validationSchema = yup.object({
    amount: yup
      .string()
      .required('Amount is required')
      .test('is-greater-than-zero', 'Amount must be greater than 0', (value) => parseFloat(value) > 0.0)
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (values: CreditAddParams) => {
    setIsLoading(true);
    try {
      if (token.token) {
        const res = await adminAddCreditsServices.addCredits(token.token, values);
        if (res) {
          if (res.code === 200) {
            toast.success('Wallet updated successfully');
            handleFetchData();
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

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        id="AdminCreditModel"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="subtitle">Admin Add Credit</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Formik
        initialValues={{
          name: user_name || '',
          type: user_type || '',
          amount: 0,
          amount_type: 'Credit',
          reason: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleFormSubmit(values);
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
                    name="name"
                    label="User Name"
                    value={values.name}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                  <TextField
                    name="type"
                    label="User Type"
                    value={values.type}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                  <FormControl fullWidth>
                    <StyledSelectInputLabel sx={{ backgroundColor: 'common.white' }}>Amount Type</StyledSelectInputLabel>
                    <Select
                      name="amount_type"
                      labelId="amount_type"
                      label="Amount Type"
                      value={values.amount_type}
                      onChange={(e) => setFieldValue('amount_type', e.target.value as string)}
                      sx={{
                        width: '100%'
                      }}
                    >
                      {AmountType.map((stat) => (
                        <MenuItem key={stat.value} value={stat.value}>
                          {stat.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                      fullWidth
                      name="amount"
                      label="Enter Amount"
                      type="number"
                      value={Number(values.amount)}
                      error={Boolean(touched.amount && errors.amount)}
                      helperText={touched.amount && errors.amount ? errors.amount : ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      fullWidth
                      name="wallet_amount"
                      label="Wallet Amount"
                      value={user_credit}
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </Box>
                  <TextField
                    name="reason"
                    label="Add Reason"
                    value={values.reason}
                    error={Boolean(touched.reason && errors.reason)}
                    helperText={touched.reason && errors.reason ? errors.reason : ''}
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
                  Update
                </LoadingButton>
              </DialogActions>
            </Box>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default AdminAddCreditModel;
