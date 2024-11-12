'use client';
import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import Box from '@mui/material/Box';
import {
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import { Formik } from 'formik';
import {
  adminUserServices,
  getUserByIdData,
  ModuleListResponseData,
  UserRegistrationParames
} from 'services/adminUserService/adminUserServices';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { useParams, usePathname, useRouter } from 'next/navigation';
import EditIcon from '@mui/icons-material/Edit';
import UpdateUserPassword from './UpdateUserPassword';
import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import { LoadingButton } from '@mui/lab';

const UpsertUser = () => {
  const router = useRouter();
  const { id: userId } = useParams();
  const [moduleList, setModuleList] = useState<ModuleListResponseData[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [userData, setUserData] = useState<getUserByIdData>();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const isCreatePage = usePathname().includes('update-permission');

  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = () =>
    yup.object({
      email: yup.string().required('Email is required').email('Enter a valid email'),
      password: !isCreatePage
        ? yup.string().required('New Password Is Required').min(8, 'Password Must Be 8 character long').matches(PASSWORD_PATTERN, {
            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
            excludeEmptyString: true
          })
        : yup.string()
    });

  const handelFetchUserData = async (id: number) => {
    setIsLoading(true);
    try {
      if (token.token) {
        const res = await adminUserServices.getUserById(id, token.token);
        if (res && res.data) {
          setUserData(res.data);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
    setIsLoading(false);
  };

  const fetchModuleList = async () => {
    try {
      setIsLoading(true);
      if (token.token) {
        const res = await adminUserServices.getModuleList(token.token);
        setModuleList(res.data);
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
    setIsLoading(false);
  };

  const handelUserRegistration = async (values: UserRegistrationParames) => {
    try {
      if (token.token) {
        if (values && values.email && values.password && values.permissions && values.permissions.length > 0) {
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
  const handelUpdateUser = async (id: number, values: UserRegistrationParames) => {
    try {
      if (token.token) {
        if (values && values.email && values.password && values.permissions && values.permissions.length > 0) {
          const res = await adminUserServices.updateUser(id, { permissions: values.permissions }, token.token);
          if (res && res.code === 200) {
            toast.success('User Updated successfully');
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
    if (userId) {
      handelFetchUserData(Number(userId));
    }
    fetchModuleList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token]);

  return (
    <MainLayout>
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Formik
          initialValues={{
            email: userData?.email || '',
            password: userData?.password || '',
            permission: userId
              ? userData?.module_permissions.map((user) => ({ module_id: user.id, permission: user.permission || 'None' }))
              : moduleList.map((module) => ({ module_id: module.id, permission: 'None' }))
          }}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(values) => {
            if (values) {
              // handelUserRegistration(values);
              const userRegistrationParams: UserRegistrationParames = {
                ...values,
                permissions: values.permission || []
              };

              if (userId) {
                handelUpdateUser(Number(userId), userRegistrationParams);
              } else handelUserRegistration(userRegistrationParams);
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: '60px', alignItems: 'center' }}
            >
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom>
                    Email
                  </Typography>
                  <TextField
                    name="email"
                    type="string"
                    disabled={userId ? true : false}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    sx={{ width: '100%', maxWidth: '500px' }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom>
                    Password
                  </Typography>

                  <TextField
                    name="password"
                    type={showNewPassword ? 'text' : 'password'}
                    disabled={userId ? true : false}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    sx={{ width: '100%', maxWidth: '500px' }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          !userId ?
                          <IconButton onClick={() => setOpen(true)}>
                            <EditIcon />
                          </IconButton>
                          :
                          <Box sx={{ cursor: 'pointer', display: 'flex' }} onClick={() => setShowNewPassword(!showNewPassword)}>
                            {showNewPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                          </Box>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container rowGap={3}>
                <Grid item xs={6}>
                  <Typography variant="h6">Modules</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">Permissions</Typography>
                </Grid>

                <Grid item xs={12}>
                  {moduleList &&
                    moduleList.length > 0 &&
                    moduleList.map((module, index) => (
                      <Grid container key={index} rowGap={1}>
                        <Grid item xs={3} sm={6}>
                          <Typography variant="h6">{module.module_name}</Typography>
                        </Grid>
                        <Grid item xs={9} sm={6}>
                          <FormControl>
                            <RadioGroup
                              row
                              value={values.permission ? values.permission[index]?.permission : 'None'}
                              onChange={(e) => {
                                setFieldValue(`permission[${index}].module_id`, module.id);
                                setFieldValue(`permission[${index}].permission`, e.target.value);
                              }}
                              defaultValue="None"
                            >
                              <FormControlLabel value="None" control={<Radio />} label="None" sx={{ mr: { xs: 1, sm: 4 } }} />
                              <FormControlLabel value="Read" control={<Radio />} label="Read" sx={{ mr: { xs: 1, sm: 4 } }} />
                              <FormControlLabel value="Update" control={<Radio />} label="Read & Update" sx={{ mr: { xs: 1, sm: 4 } }} />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                      </Grid>
                    ))}
                </Grid>
                <Grid item xs={11}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="outlined" onClick={() => router.push('/admin/users')}>
                      Back
                    </Button>
                    {userId ? (
                      <LoadingButton loading={isLoading} size="large" variant="contained" type="submit" sx={{ width: 'fit-content' }}>
                        Update User
                      </LoadingButton>
                    ) : (
                      <LoadingButton loading={isLoading} size="large" variant="contained" type="submit" sx={{ width: 'fit-content' }}>
                        Create User
                      </LoadingButton>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </Formik>
      )}
      <UpdateUserPassword open={open} onClose={handleClose} userId={Number(userId)} />
    </MainLayout>
  );
};

export default UpsertUser;
