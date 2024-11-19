'use client';
import { useState, useCallback, useEffect } from 'react';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import UserListHead from './UserListHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button, CircularProgress, IconButton, Typography } from '@mui/material';
import TablePager from 'components/common/CustomPaginations/TablePager';
import { PAGE_SIZE } from 'constants/pageConstants';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/Delete';
import UINewTypography from 'components/UIComponents/UINewTypography';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { adminUserServices, UserData } from 'services/adminUserService/adminUserServices';
import { ErrorMessage } from 'constants/common.constants';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../../../context/AuthContext';
import DeleteModal from 'components/UIComponents/DeleteModal';
import { UserLoaderBox } from './UpsertPage.styled';

const UserPageContainer = () => {
  const router = useRouter();
  const { isAdmin } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData>();
  const [UserList, setUserList] = useState<UserData[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [totalRecords, setTotalRecords] = useState(0);
  const [filters, setFilters] = useState({
    page: 1,
    pageSize: PAGE_SIZE,
    offset: 0
  });

  const handelFetchUsers = async () => {
    setIsLoading(true);
    try {
      if (token.token) {
        const res = await adminUserServices.getUserList(token.token);
        if (res && res.data.user_info) {
          setUserList(res.data.user_info);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
    setIsLoading(false);
  };

  const handelUserDelete = async (id: number | undefined) => {
    setOpenDeleteModal(false);
    try {
      if (token.token && id) {
        const res = await adminUserServices.deleteUserById(id, token.token);
        if (res && res.code === 200) {
          toast.success('user delete successfullly');
          handelFetchUsers();
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  const handleChangeFilter = useCallback((value: any) => {
    setFilters(value);
  }, []);

  const handleChangePage = useCallback(
    (value: number) => {
      const offset = (value - 1) * filters.pageSize;
      handleChangeFilter({ ...filters, page: value, offset: offset });
    },
    [filters, handleChangeFilter]
  );

  const handleChangePageSize = useCallback(
    (value: number) => {
      handleChangeFilter({ ...filters, pageSize: value, page: 1 });
    },
    [filters, handleChangeFilter]
  );

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };
    userToken();
  }, []);

  useEffect(() => {
    setIsLoading(false);
    setTotalRecords(10);
  }, []);

  useEffect(() => {
    handelFetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token]);

  useEffect(() => {
    if (isAdmin) {
      isAdmin ? '' : router.push('/admin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  return (
    <MainLayout>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button size="large" variant="contained" startIcon={<AddIcon />} onClick={() => router.push('/admin/users/create-user')}>
            <UINewTypography variant="buttonLargeMenu">Create User</UINewTypography>
          </Button>
        </Box>
        <Box>
          <Card>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ width: '100%' }}>
                <Table>
                  <UserListHead />
                  <TableBody>
                    {isLoading ? (
                      <TableRow>
                        <TableCell colSpan={10}>
                          <UserLoaderBox>
                            <CircularProgress />
                          </UserLoaderBox>
                        </TableCell>
                      </TableRow>
                    ) : UserList && UserList.length ? (
                      UserList.map((item, index) => (
                        <TableRow
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 }
                          }}
                          key={index}
                        >
                          <TableCell component="th" scope="row">
                            {item.id}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {item.email}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {item.permissions}
                          </TableCell>

                          <TableCell>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                              <IconButton onClick={() => router.push(`/admin/users/update-permission/${item.id}`)}>
                                <EditIcon />
                              </IconButton>
                              <IconButton
                                onClick={() => {
                                  setSelectedUser(item);
                                  setOpenDeleteModal(true);
                                }}
                              >
                                <DeleteOutlineIcon color="error" />
                              </IconButton>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={10}>
                          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                            <Typography variant="body1"> User Not Found</Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              {UserList?.length > 0 && (
                <Box sx={{ width: '100%', p: { xs: 1, md: 2 } }}>
                  <TablePager
                    page={filters.page}
                    rowsPerPage={filters.pageSize}
                    handleChangePage={handleChangePage}
                    handleChangePageSize={handleChangePageSize}
                    totalRecords={totalRecords}
                  />
                </Box>
              )}
            </Paper>
          </Card>
        </Box>
      </Box>
      <DeleteModal
        open={openDeleteModal}
        handleClose={() => {
          setOpenDeleteModal(false);
        }}
        handleDeleteClick={() => handelUserDelete(selectedUser?.id)}
      />
    </MainLayout>
  );
};

export default UserPageContainer;
