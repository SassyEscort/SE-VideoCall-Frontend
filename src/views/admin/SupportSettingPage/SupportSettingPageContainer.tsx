'use client';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import { Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { AdminSettingResponseData, adminSettingsServices } from 'services/adminSettings/adminSettingsServices';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';

function SupportSettingPageContainer() {
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [data, setData] = useState<AdminSettingResponseData>({} as AdminSettingResponseData);
  //   const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    phone: yup.number().required('Phone is required'),
    maxVideoCallRate: yup.number().required('Max Video Call Rate is required'),
    minVideoCallRate: yup.number().required('Min Video Call Rate is required'),
    totalFreeCredits: yup.number().required('Total Free Credits is required'),
    freeCredisPerCustomer: yup.number().required('Free Credis Per Customer is required'),
    freeCreditsPerExistingCustomer: yup.number().required('Free Credits Per Existing Customer is required'),
    durationForScreenshot: yup.number().required('Duration For Screenshot is required'),
    durationForScreenshotStart: yup.number().required('Duration For Screenshot Start is required')
  });

  const handleGetAdminSettings = async () => {
    if (token.token) {
      const res = await adminSettingsServices.getAdminSettings(token.token);

      if (res) {
        console.log(res);
      }
    }
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    handleGetAdminSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token]);

  return (
    <MainLayout>
      <Formik
        initialValues={{
          email: '',
          phone: '',
          maxVideoCallRate: '',
          minVideoCallRate: '',
          totalFreeCredits: '',
          freeCredisPerCustomer: '',
          freeCreditsPerExistingCustomer: '',
          durationForScreenshot: '',
          durationForScreenshotStart: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Box component="form" onSubmit={handleSubmit}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2 }}
              sx={{ padding: { sm: '0 90px ', lg: '0 90px 0 0', xs: '0 20px' } }}
            >
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Support Email
                </Typography>
                <TextField
                  name="email"
                  label="Support Email"
                  type="string"
                  value={values.email}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email ? errors.email : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: '100%', maxWidth: '500px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Support Phone
                </Typography>
                <TextField
                  name="phone"
                  label="Support phone"
                  type="number"
                  value={values.phone}
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone ? errors.phone : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: '100%', maxWidth: '500px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Max Video Call Rate
                </Typography>
                <TextField
                  name="maxVideoCallRate"
                  label="Max Video Call Rate"
                  type="number"
                  value={values.maxVideoCallRate}
                  error={Boolean(touched.maxVideoCallRate && errors.maxVideoCallRate)}
                  helperText={touched.maxVideoCallRate && errors.maxVideoCallRate ? errors.maxVideoCallRate : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: '100%', maxWidth: '500px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Min Video Call Rate
                </Typography>
                <TextField
                  name="minVideoCallRate"
                  label="Min Video Call Rate"
                  type="number"
                  value={values.minVideoCallRate}
                  error={Boolean(touched.minVideoCallRate && errors.minVideoCallRate)}
                  helperText={touched.minVideoCallRate && errors.minVideoCallRate ? errors.minVideoCallRate : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: '100%', maxWidth: '500px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Total Free Credits
                </Typography>
                <TextField
                  name="totalFreeCredits"
                  label="Total Free Credits"
                  type="number"
                  value={values.totalFreeCredits}
                  error={Boolean(touched.totalFreeCredits && errors.totalFreeCredits)}
                  helperText={touched.totalFreeCredits && errors.totalFreeCredits ? errors.totalFreeCredits : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: '100%', maxWidth: '500px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Free Credis Per Customer
                </Typography>
                <TextField
                  name="freeCredisPerCustomer"
                  label="Free Credis Per Customer"
                  type="number"
                  value={values.freeCredisPerCustomer}
                  error={Boolean(touched.freeCredisPerCustomer && errors.freeCredisPerCustomer)}
                  helperText={touched.freeCredisPerCustomer && errors.freeCredisPerCustomer ? errors.freeCredisPerCustomer : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: '100%', maxWidth: '500px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Free Credits Per Existing Customer
                </Typography>
                <TextField
                  name="freeCreditsPerExistingCustomer"
                  label="Free Credits Per Existing Customer"
                  type="number"
                  value={values.freeCreditsPerExistingCustomer}
                  error={Boolean(touched.freeCreditsPerExistingCustomer && errors.freeCreditsPerExistingCustomer)}
                  helperText={
                    touched.freeCreditsPerExistingCustomer && errors.freeCreditsPerExistingCustomer
                      ? errors.freeCreditsPerExistingCustomer
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: '100%', maxWidth: '500px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Duration For Screenshot
                </Typography>
                <TextField
                  name="durationForScreenshot"
                  label="Duration For Screenshot"
                  type="number"
                  value={values.durationForScreenshot}
                  error={Boolean(touched.durationForScreenshot && errors.durationForScreenshot)}
                  helperText={touched.durationForScreenshot && errors.durationForScreenshot ? errors.durationForScreenshot : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: '100%', maxWidth: '500px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Duration For Screenshot Start
                </Typography>
                <TextField
                  name="durationForScreenshotStart"
                  label="Duration For Screenshot Start"
                  type="number"
                  value={values.durationForScreenshotStart}
                  error={Boolean(touched.durationForScreenshotStart && errors.durationForScreenshotStart)}
                  helperText={
                    touched.durationForScreenshotStart && errors.durationForScreenshotStart ? errors.durationForScreenshotStart : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: '100%', maxWidth: '500px' }}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: { xs: '20px', sm: '100px', xl: '225px' }, mt: '10px' }}>
              <LoadingButton loading={false} size="large" type="submit" variant="contained" color="primary">
                Save
              </LoadingButton>
            </Box>
          </Box>
        )}
      </Formik>
    </MainLayout>
  );
}

export default SupportSettingPageContainer;
