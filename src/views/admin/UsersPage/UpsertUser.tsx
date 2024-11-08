'use client';
import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import Box from '@mui/material/Box';
import {
  Button,
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

const UpsertUser = () => {
  const router = useRouter();
  const { id: userId } = useParams();
  const [moduleList, setModuleList] = useState<ModuleListResponseData[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [userData, setUserData] = useState<getUserByIdData>();
  const [open, setOpen] = useState(false);
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
  };

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
    if (userId) {
      handelFetchUserData(Number(userId));
    }
    fetchModuleList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token]);

  return (
    <MainLayout>
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
          <Box component="form" onSubmit={handleSubmit}>
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
                  type="password"
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
                        <IconButton onClick={() => setOpen(true)}>
                          <EditIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
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
                          value={values.permission ? values.permission[index]?.permission : 'None'}
                          onChange={(e) => {
                            setFieldValue(`permission[${index}].module_id`, module.id);
                            setFieldValue(`permission[${index}].permission`, e.target.value);
                          }}
                          defaultValue="None"
                        >
                          <FormControlLabel value="None" control={<Radio />} label="None" />
                          <FormControlLabel value="Read" control={<Radio />} label="Read" />
                          <FormControlLabel value="Update" control={<Radio />} label="Read & Update" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                ))}
            </Grid>

            {userId ? (
              <Button size="large" variant="contained" type="submit">
                Update User
              </Button>
            ) : (
              <Button size="large" variant="contained" type="submit">
                Create User
              </Button>
            )}
          </Box>
        )}
      </Formik>
      <UpdateUserPassword open={open} onClose={handleClose} userId={Number(userId)} />
    </MainLayout>
  );
};

export default UpsertUser;
