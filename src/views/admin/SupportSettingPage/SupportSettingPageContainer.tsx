'use client';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import { Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { adminSettingsServices } from 'services/adminSettings/adminSettingsServices';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';

export type AdminSettingData = {
  id: number;
  category: string;
  label: string;
  content: string;
};

function SupportSettingPageContainer() {
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [data, setData] = useState<AdminSettingData[]>([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [getInitialValues, setInitialValues] = useState({
  //     Email: '',
  //     Phone: '',
  //     Max_Video_CallRate: '',
  //     Min_Video_CallRate: '',
  //     Total_Free_Credits: '',
  //     Free_Credis_Per_Customer: '',
  //     Free_Credits_Per_Existing_Customer: '',
  //     Duration_For_Screenshot: '',
  //     Duration_For_Screenshot_Start: ''
  //   });

  //   const validationSchema = yup.object({
  //     email: yup.string().email('Enter a valid email').required('Email is required'),
  //     phone: yup.number().required('Phone is required'),
  //     maxVideoCallRate: yup.number().required('Max Video Call Rate is required'),
  //     minVideoCallRate: yup.number().required('Min Video Call Rate is required'),
  //     totalFreeCredits: yup.number().required('Total Free Credits is required'),
  //     freeCredisPerCustomer: yup.number().required('Free Credis Per Customer is required'),
  //     freeCreditsPerExistingCustomer: yup.number().required('Free Credits Per Existing Customer is required'),
  //     durationForScreenshot: yup.number().required('Duration For Screenshot is required'),
  //     durationForScreenshotStart: yup.number().required('Duration For Screenshot Start is required')
  //   });

  const handleGetAdminSettings = async () => {
    if (token.token) {
      const res = await adminSettingsServices.getAdminSettings(token.token);

      if (res && Array.isArray(res.data)) {
        setData(res.data);
        console.log(res.data);
        // res.data.map((item) => {
        //     item.category===
        // });
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
          Email: '',
          Phone: '',
          Max_Video_CallRate: '',
          Min_Video_CallRate: '',
          Total_Free_Credits: '',
          Free_Credis_Per_Customer: '',
          Free_Credits_Per_Existing_Customer: '',
          Duration_For_Screenshot: '',
          Duration_For_Screenshot_Start: ''
        }}
        // validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '1300px' }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2 }}
              sx={{ padding: { sm: '0 90px ', lg: '0 90px 0 0', xs: '0 20px' } }}
            >
              {data.map((item) => (
                <Grid item xs={12} sm={6} key={item.id}>
                  <Typography variant="h6" gutterBottom>
                    {item.label}
                  </Typography>
                  <TextField
                    name={item.category}
                    // label={item.label}
                    type="string"
                    value={values[item.category as keyof typeof values]}
                    error={Boolean(touched[item.category as keyof typeof touched] && errors[item.category as keyof typeof errors])}
                    helperText={
                      touched[item.category as keyof typeof touched] && errors[item.category as keyof typeof errors]
                        ? errors[item.category as keyof typeof errors]
                        : ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{ width: '100%', maxWidth: '500px' }}
                  />
                </Grid>
              ))}
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
