'use client';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
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
import { modelCommissionAmountServices } from 'services/adminServices/modelCommission/modelCommission.services';

export default function ModelCommissionContainer() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');

  const validationSchema = yup.object({
    percentage: yup.number().required('minimum commission amount is required')
  });

  const handleFormSubmit = async (values: any) => {
    setIsLoading(true);

    const res = await modelCommissionAmountServices.modelCommissionMinAmount(values, token);
    if (res) {
      if (res.code === 200) {
        setData(values.percentage);
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
      setToken(data.token);
    };

    userToken();
  }, []);

  return (
    <>
      <MainLayout>
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
            <Typography variant="h4" gutterBottom>
              Model Commission
            </Typography>
          </Stack>

          <Formik
            enableReinitialize
            initialValues={{
              percentage: parseFloat(data) || ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleFormSubmit(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2} width={'100%'}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      name="percentage"
                      label="Min Withdraw Amount"
                      type="number"
                      value={values.percentage}
                      error={Boolean(touched.percentage && errors.percentage)}
                      helperText={touched.percentage && errors.percentage ? errors.percentage : ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">€</InputAdornment>
                      }}
                      sx={{ width: '100%' }}
                    />
                  </Grid>
                </Grid>
                <DialogActions sx={{ px: 3, py: 2 }}>
                  <LoadingButton loading={isLoading} size="large" type="submit" variant="contained" color="primary">
                    Save
                  </LoadingButton>
                </DialogActions>
              </Box>
            )}
          </Formik>
        </Container>
      </MainLayout>
    </>
  );
}
