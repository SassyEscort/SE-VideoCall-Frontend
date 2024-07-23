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
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import { getUserDataClient } from 'utils/getSessionData';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import {
  AdminCommissionResponse,
  commissionParams,
  modelCommissionAmountServices
} from 'services/adminServices/modelCommission/modelCommission.services';
import { TokenIdType } from 'views/protectedModelViews/verification';
import WithdrawConfigurationContainer from '../WithdrawConfiguration/WithdrawConfigurationContainer';
import ModelVideoCallContainer from '../ModelVideoCallPrice/ModelVideoCallContainer';
import ModelVideoMaxCallContainer from '../ModelVideoCallMaxPrice/ModelVideoMaxCallContainer';

export default function ModelCommissionContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [commissionAmount, setCommissionAmount] = useState<AdminCommissionResponse>({} as AdminCommissionResponse);

  const validationSchema = yup.object({
    percentage: yup.number().required('minimum commission amount is required')
  });

  const handleFormSubmit = async (values: commissionParams) => {
    setIsLoading(true);
    const res = await modelCommissionAmountServices.modelCommissionMinAmount(values, token.token);
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
        const response = await modelCommissionAmountServices.modelCommissionMinAmountGet(token.token);
        setCommissionAmount(response);
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
      <MainLayout>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" gutterBottom>
            Model commission percentage
          </Typography>
        </Stack>

        <Formik
          enableReinitialize
          initialValues={{
            percentage: commissionAmount?.data?.percentage || ''
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
                name="percentage"
                label="Model Commission"
                type="number"
                value={values.percentage}
                error={Boolean(touched.percentage && errors.percentage)}
                helperText={touched.percentage && errors.percentage ? errors.percentage : ''}
                onChange={handleChange}
                onBlur={handleBlur}
                InputProps={{
                  startAdornment: <InputAdornment position="start">%</InputAdornment>
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
        <Box mt={5}>
          <WithdrawConfigurationContainer />
        </Box>
        <Box mt={5}>
          <ModelVideoCallContainer />
        </Box>
        <Box mt={5}>
          <ModelVideoMaxCallContainer />
        </Box>
      </MainLayout>
    </>
  );
}
