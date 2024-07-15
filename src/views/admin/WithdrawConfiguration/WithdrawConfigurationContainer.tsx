'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import {
  AdminWithdrawResponse,
  withdrawMinAmountServices,
  withdrawParams
} from 'services/adminServices/withdrawconfiguration/withdrawConfiguration.services';
import { getUserDataClient } from 'utils/getSessionData';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { TokenIdType } from 'views/protectedModelViews/verification';

export default function WithdrawConfigurationContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState<AdminWithdrawResponse>({} as AdminWithdrawResponse);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  const validationSchema = yup.object({
    withdrawal_amt: yup.number().required('minimum withdraw amount is required')
  });

  const handleFormSubmit = async (values: withdrawParams) => {
    setIsLoading(true);

    const res = await withdrawMinAmountServices.withdrawMinAmount(values, token.token);
    if (res) {
      if (res.code === 200) {
        toast.success('Success');
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

  useEffect(() => {
    const fetchCommissionAmount = async () => {
      try {
        const response = await withdrawMinAmountServices.modelWithdrawAmountGet(token.token);
        setWithdrawAmount(response);
      } catch (error) {
        toast.error('Error fetching commission amount');
      }
    };
    if (token.token) {
      fetchCommissionAmount();
    }
  }, [token.token]);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
        <Typography variant="h4" gutterBottom>
          Model minimum amount withdraw
        </Typography>
      </Stack>

      <Formik
        enableReinitialize
        initialValues={{
          withdrawal_amt: withdrawAmount?.data?.amount || ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleFormSubmit(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              gap: '1rem'
            }}
          >
            <TextField
              name="withdrawal_amt"
              label="Withdraw Amount"
              type="number"
              value={values.withdrawal_amt}
              error={Boolean(touched.withdrawal_amt && errors.withdrawal_amt)}
              helperText={touched.withdrawal_amt && errors.withdrawal_amt ? errors.withdrawal_amt : ''}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>
              }}
              sx={{ width: '100%', maxWidth: '500px' }}
            />
            <DialogActions>
              <LoadingButton loading={isLoading} size="large" type="submit" variant="contained" color="primary">
                Save
              </LoadingButton>
            </DialogActions>
          </Box>
        )}
      </Formik>
    </>
  );
}
