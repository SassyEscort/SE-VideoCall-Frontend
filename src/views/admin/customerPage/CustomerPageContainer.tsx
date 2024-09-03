'use client';

import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
import { formatFullDate } from 'utils/dateAndTime';
import { PaginationSortByOption } from 'components/common/CustomPaginations/type';
import PaginationSortBy from 'components/common/CustomPaginations/PaginationSortBy';
import { PAGE_SIZE } from 'constants/pageConstants';
import TablePager from 'components/common/CustomPaginations/TablePager';
import MenuItem from '@mui/material/MenuItem';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { adminModelServices } from 'services/adminModel/adminModel.services';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import MainLayout from '../../../views/admin/layouts/AdminLayout/DashboardLayout';
import CustomerListHead from './CustomerListHead';
import { ModelActionPopover, NotFoundBox, SortBox, StackBoxContainer, StackFirstBoxContainer } from './CustomerContainer.styled';
import PaginationSearch from 'components/common/CustomPaginations/PaginationSearch';
import { CustomerDetailsPage } from 'services/adminModel/types';
import CustorModel from './CustomerModel';

export type WorkersPaginationType = {
  page: number;
  offset: number;
  pageSize: number;
  orderField: string;
  orderType: string;
  search_field: string;
  duration: string;
  fromDate: string;
  toDate: string;
  status: string;
  verificationStep: string;
  is_active: string;
};

const SORT_BY_OPTIONS: PaginationSortByOption[] = [
  { value: 'createdDate', label: 'Newest' },
  { value: 'name', label: 'Name' },
  { value: 'email', label: 'Email' }
];

export type TokenIdTypeAdmin = {
  token: string;
};

export default function CustomerPageContainer() {
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState<CustomerDetailsPage>();
  const [modelData, setModelData] = useState<CustomerDetailsPage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [totalRecords, setTotalRecords] = useState(0);
  const [creditModalOpen, setCreditModalOpen] = useState(false);
  const [selectedPayoutData, setSelectedPayoutData] = useState<CustomerDetailsPage | null>(null);

  const currentMoment = moment();
  const oneMonthAgoMoment = moment().subtract(1, 'month');
  const fromDate = oneMonthAgoMoment.format('YYYY/MM/DD');
  const toDate = currentMoment.format('YYYY/MM/DD');
  const [filters, setFilters] = useState<WorkersPaginationType>({
    page: 0,
    pageSize: PAGE_SIZE,
    offset: 0,
    orderField: 'createdDate',
    orderType: 'desc',
    search_field: '',
    duration: 'month',
    fromDate: fromDate,
    toDate: toDate,
    status: '',
    verificationStep: '',
    is_active: ''
  });

  const handleChangeFilter = useCallback((value: WorkersPaginationType) => {
    setFilters(value);
  }, []);

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
  }, []);

  const fetchModelData = async () => {
    setIsLoading(true);
    if (token.token) {
      const filterparams = {
        limit: filters.pageSize,
        offset: filters.offset,
        search_field: filters.search_field,
        sort_order: filters.orderType,
        sort_field: filters.orderField
      };

      const data = await adminModelServices.getCustomerDetails(filterparams, token.token);

      setTotalRecords(data?.data?.aggregate?.total_rows);
      setModelData(data?.data?.customer_info);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchModelData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token, filters]);

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

  const handleChangeOrderBy = useCallback(
    (field: string, type: string) => {
      handleChangeFilter({
        ...filters,
        orderType: type,
        orderField: field,
        page: 1
      });
    },
    [filters, handleChangeFilter]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeSearch = useCallback(
    debounce((val: string) => {
      handleChangeFilter({ ...filters, search_field: val, page: 1 });
    }, 500),
    [filters, handleChangeFilter]
  );

  const handleChangeSearch = (val: string) => {
    debouncedChangeSearch(val);
  };

  const handleCloseMenu = () => {
    setOpen(null);
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenCredit = (value: CustomerDetailsPage) => {
    setSelectedPayoutData(value);
    setCreditModalOpen(true);
  };
  const handleCloseCredit = () => {
    setCreditModalOpen(false);
  };

  return (
    <>
      <MainLayout>
        <Container>
          <StackBoxContainer>
            <Typography variant="h4" gutterBottom>
              Customer
            </Typography>
          </StackBoxContainer>
          <StackFirstBoxContainer>
            <PaginationSearch placeholder="Search..." handleChangeSearch={handleChangeSearch} />
          </StackFirstBoxContainer>

          <SortBox>
            <PaginationSortBy
              sortByOptions={SORT_BY_OPTIONS}
              orderField={filters.orderField}
              orderType={filters.orderType}
              handleChangeOrderBy={handleChangeOrderBy}
            />
          </SortBox>
          <Card>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ width: '100%' }}>
                <Table>
                  <CustomerListHead />

                  <TableBody>
                    {isLoading ? (
                      <TableRow>
                        <TableCell colSpan={10}>
                          <NotFoundBox>
                            <CircularProgress />
                          </NotFoundBox>
                        </TableCell>
                      </TableRow>
                    ) : modelData?.length ? (
                      modelData?.map((item, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 }
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {item?.name || '-'}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {item?.email || '-'}
                          </TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{formatFullDate(item?.createdDate, '-')}</TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{item?.userName}</TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{item?.email_verified === 0 ? 'No' : 'Yes'}</TableCell>
                          <TableCell>
                            <IconButton
                              aria-label="more"
                              id="long-button"
                              aria-controls={open ? 'long-menu' : undefined}
                              aria-expanded={open ? 'true' : undefined}
                              aria-haspopup="true"
                              onClick={(e) => {
                                setSelected(item);
                                handleClick(e);
                              }}
                            >
                              <MoreVertIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={7}>
                          <NotFoundBox>
                            <Typography variant="body1">Customer is not found</Typography>
                          </NotFoundBox>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              {modelData && modelData?.length > 0 && (
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
        </Container>
        <ModelActionPopover
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem
            onClick={() => {
              handleOpenCredit(selected as CustomerDetailsPage);
              handleCloseMenu();
            }}
          >
            <VisibilityIcon sx={{ mr: 2 }} />
            View Details
          </MenuItem>
        </ModelActionPopover>
        <CustorModel open={creditModalOpen} onClose={handleCloseCredit} selectedPayoutData={selectedPayoutData} />
      </MainLayout>
    </>
  );
}
