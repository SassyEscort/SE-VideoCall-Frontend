'use client';
import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import Box from '@mui/material/Box';
import { Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import { adminUserServices, ModuleListResponseData, UserRegistrationParames } from 'services/adminUserService/adminUserServices';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { useRouter } from 'next/navigation';

const UpsertUser = () => {
  const router = useRouter();

  const [moduleList, setModuleList] = useState<ModuleListResponseData[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  const fetchModuleList = async () => {
    try {
      if (token.token) {
        const res = await adminUserServices.getModuleList(token.token);
        setModuleList(res.data);
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  const handelUserRegistration = async (values: UserRegistrationParames) => {
    try {
      if (token.token) {
        if (values && values.email && values.password && values.permission && values.permission.length > 0) {
          const res = await adminUserServices.userRegistration({ ...values, role: 'user' }, token.token);
          if (res && res.code === 200) {
            toast.success('User created successfully');
            router.push('/admin/users');
          }
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
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
    fetchModuleList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token]);

  return (
    <MainLayout>
      <Formik
        initialValues={{
          email: '',
          password: '',
          permission: moduleList.map((module) => ({ module_id: module.id, permission: 'None' })) || []
        }}
        enableReinitialize
        onSubmit={(values) => {
          handelUserRegistration(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Email
                </Typography>
                <TextField
                  name="email"
                  type="string"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  sx={{ width: '100%', maxWidth: '500px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Password
                </Typography>
                <TextField
                  name="password"
                  type="string"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  sx={{ width: '100%', maxWidth: '500px' }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6">Modules</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">permissions</Typography>
              </Grid>
              {moduleList &&
                moduleList.length > 0 &&
                moduleList.map((module, index) => (
                  <Grid container key={index}>
                    <Grid item xs={6}>
                      <Typography variant="h6">{module.module_name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl>
                        <RadioGroup
                          row
                          value={values.permission[index]?.permission || ''}
                          onChange={(e) => {
                            setFieldValue(`permission[${index}].module_id`, module.id);
                            setFieldValue(`permission[${index}].permission`, e.target.value);
                          }}
                        >
                          <FormControlLabel value="None" control={<Radio />} label="None" />
                          <FormControlLabel value="Read" control={<Radio />} label="Read" />
                          <FormControlLabel value="Write" control={<Radio />} label="Read & Write" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                ))}
            </Grid>
            <Button size="large" variant="contained" type="submit">
              Create User
            </Button>
          </Box>
        )}
      </Formik>
    </MainLayout>
  );
};

export default UpsertUser;
