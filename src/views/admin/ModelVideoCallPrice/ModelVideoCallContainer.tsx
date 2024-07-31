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
import { getUserDataClient } from 'utils/getSessionData';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { TokenIdType } from 'views/protectedModelViews/verification';
import {
  AdminVideoCallResponse,
  videoCallAmountServices,
  videoCallParams
} from 'services/adminServices/videoCallConfiguration/videoCallConfiguration.services';
import { DetailsBox } from './ModelVideo.styled';

export default function ModelVideoCallContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [videoCallAmount, setVideoCallAmount] = useState<AdminVideoCallResponse>({} as AdminVideoCallResponse);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  const validationSchema = yup.object({
    min_price: yup
      .number()
      .moreThan(0.01, 'Minimum video call amount must be greater than 0.01')
      .required('Minimum video call amount is required')
  });

  const handleFormSubmit = async (values: videoCallParams) => {
    setIsLoading(true);

    const res = await videoCallAmountServices.withdrawMinAmount(values, token.token);
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
        const response = await videoCallAmountServices.modelVideoCallAmountGet(token.token);
        setVideoCallAmount(response);
      } catch (error) {
        toast.error('Error fetching video call amount');
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
          Model minimum video call price
        </Typography>
      </Stack>

      <Formik
        enableReinitialize
        initialValues={{
          min_price: videoCallAmount?.data?.min_price || '',
          max_price: videoCallAmount?.data?.max_price || ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleFormSubmit(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Box component="form" onSubmit={handleSubmit}>
            <DetailsBox>
              <TextField
                name="min_price"
                label="Video call Amount"
                type="number"
                value={values.min_price}
                error={Boolean(touched.min_price && errors.min_price)}
                helperText={touched.min_price && errors.min_price ? errors.min_price : ''}
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
            </DetailsBox>
          </Box>
        )}
      </Formik>
    </>
  );
}
