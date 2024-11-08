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
import { Button, CircularProgress } from '@mui/material';
import TablePager from 'components/common/CustomPaginations/TablePager';
import { PAGE_SIZE } from 'constants/pageConstants';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/Delete';
import UINewTypography from 'components/UIComponents/UINewTypography';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { adminUserServices } from 'services/adminUserService/adminUserServices';
import { ErrorMessage } from 'constants/common.constants';
import { toast } from 'react-toastify';

const UserPageContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [UserList, setUserList] = useState([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [totalRecords, setTotalRecords] = useState(0);
  const [filters, setFilters] = useState({
    page: 1,
    pageSize: PAGE_SIZE,
    offset: 0
  });

  const router = useRouter();

  const handelFetchUsers = async () => {
    try {
      if (token.token) {
        const res = await adminUserServices.getUserList(token.token);
        // setUserList(res.data);
        if (res && res.data) console.log(res.data, 'res.data');
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
                        </TableCell>
                      </TableRow>
                    ) : (
                      <TableRow
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 }
                        }}
                      >
                        <TableCell component="th" scope="row">
                          test
                        </TableCell>
                        <TableCell component="th" scope="row">
                          test@yopmail.com
                        </TableCell>
                        <TableCell component="th" scope="row">
                          test
                        </TableCell>

                        <TableCell>
                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <EditIcon />
                            <DeleteOutlineIcon color="error" />
                          </Box>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box sx={{ width: '100%', p: { xs: 1, md: 2 } }}>
                <TablePager
                  page={filters.page}
                  rowsPerPage={filters.pageSize}
                  handleChangePage={handleChangePage}
                  handleChangePageSize={handleChangePageSize}
                  totalRecords={totalRecords}
                />
              </Box>
            </Paper>
          </Card>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default UserPageContainer;
