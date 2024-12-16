'use client';

import React, { useCallback, useEffect, useState } from 'react';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import {
  ModelActionPopoverBanModel,
  NotFoundBox,
  SortBox,
  StackBoxContainer,
  StackFirstBoxContainer
} from '../customerPage/CustomerContainer.styled';
import Typography from '@mui/material/Typography';
import PaginationSearch from 'components/common/CustomPaginations/PaginationSearch';
import debounce from 'lodash/debounce';
import { PAGE_SIZE } from 'constants/pageConstants';
import moment from 'moment';
import PaginationSortBy from 'components/common/CustomPaginations/PaginationSortBy';
import { PaginationSortByOption } from 'components/common/CustomPaginations/type';
import Card from '@mui/material/Card';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { IconButton, MenuItem, Paper, TableCell } from '@mui/material';
import Box from '@mui/system/Box';
import TablePager from 'components/common/CustomPaginations/TablePager';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircularProgress from '@mui/material/CircularProgress';
import { formatFullDate } from 'utils/dateAndTime';
import { BanCustomerDetails, BanCustomerDetailsRes, CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import BanCustomerList from './BanCustomerListHead';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import DeleteModal from 'components/UIComponents/DeleteModal';
import BanCustomerModel from './BanCustomerModel';
import { useAuthContext } from 'contexts/AuthContext';
import { haveUpdatePermission } from 'utils/Admin/PagePermission';
import { BanCustomerPage } from 'constants/adminUserAccessConstants';

const SORT_BY_OPTIONS: PaginationSortByOption[] = [
  { value: 'createdDate', label: 'Newest' },
  { value: 'name', label: 'Name' },
  { value: 'email', label: 'Email' }
];

export type BanCustomerFilters = {
  sort_order: string;
  sort_field: string;
  customer_id: number;
  email: string;
  is_active: number;
  limit: number;
  offset: number;
  page: number;
  pageSize: number;
  orderField: string;
  orderType: string;
  search_field: string;
  fromDate: string;
  toDate: string;
};

const BanCustomer = () => {
  const { adminUserPermissions, isAdmin, token } = useAuthContext();
  const UpdatePermission = (adminUserPermissions ? haveUpdatePermission(BanCustomerPage, adminUserPermissions) : false) || isAdmin;

  const currentMoment = moment().format('YYYY/MM/DD');
  const oneMonthAgoMoment = moment().subtract(1, 'month').format('YYYY/MM/DD');

  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [totalRecords, setTotalRecords] = useState(0);
  const [banCustomerDetails, setBanCustomerDetails] = useState<BanCustomerDetailsRes>();
  const [creditModalOpen, setCreditModalOpen] = useState(false);
  const [selectedPayoutData, setSelectedPayoutData] = useState<BanCustomerDetails | null>(null);
  const [selected, setSelected] = useState<BanCustomerDetails>();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [filters, setFilters] = useState<BanCustomerFilters>({
    page: 0,
    pageSize: PAGE_SIZE,
    offset: 0,
    orderField: 'createdDate',
    orderType: 'desc',
    search_field: '',
    fromDate: oneMonthAgoMoment,
    toDate: currentMoment,
    is_active: 0,
    sort_order: '',
    sort_field: '',
    customer_id: 0,
    email: '',
    limit: 0
  });

  const handleChangeFilter = useCallback((value: BanCustomerFilters) => {
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

  const banCustomerData = async () => {
    setIsLoading(true);
    if (token.token) {
      const params = {
        sort_order: filters.sort_order,
        sort_field: filters.sort_field,
        is_active: filters.is_active,
        customer_id: filters.customer_id,
        email: filters.email,
        limit: filters.pageSize,
        offset: filters.offset
      };
      const data = await CustomerDetailsService.banCustomerDetails(params, token.token);
      setBanCustomerDetails(data);
      if (data?.data?.aggregate?.total_rows) {
        setTotalRecords(data.data.aggregate.total_rows);
      }
    }
    setIsLoading(false);
  };

  const handelDeleteBanCustomer = async (id: number) => {
    try {
      if (token.token && id) {
        const res = await CustomerDetailsService.deleteBanCustomer(id, token.token);
        if (res) {
          if (res.code === 200) {
            toast.success('Unbanned Successfully');
            banCustomerData();
            setOpenDeleteModal(false);
          }
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  const handleCloseCredit = () => {
    setCreditModalOpen(false);
  };

  const handleOpenCredit = (value: BanCustomerDetails) => {
    setSelectedPayoutData(value);
    setCreditModalOpen(true);
  };

  useEffect(() => {
    banCustomerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token, filters]);

  return (
    <>
      <MainLayout>
        <>
          <StackBoxContainer>
            <Typography variant="h4" gutterBottom>
              Banned Customer
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
                  <BanCustomerList />

                  <TableBody>
                    {isLoading ? (
                      <TableRow>
                        <TableCell colSpan={10}>
                          <NotFoundBox>
                            <CircularProgress />
                          </NotFoundBox>
                        </TableCell>
                      </TableRow>
                    ) : banCustomerDetails?.data?.ban_customers.length ? (
                      banCustomerDetails?.data?.ban_customers?.map((item, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 }
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {item?.name || '-'}
                          </TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{item?.email || '-'}</TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{item?.ip_address}</TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{item?.is_active ? 'No' : 'Yes'}</TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{formatFullDate(item?.createdDate, '-')}</TableCell>
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
                            <Typography variant="body1">Banned Customer is not found</Typography>
                          </NotFoundBox>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              {banCustomerDetails?.data?.ban_customers.length && banCustomerDetails?.data?.ban_customers.length ? (
                <Box sx={{ width: '100%', p: { xs: 1, md: 2 } }}>
                  <TablePager
                    page={filters.page}
                    rowsPerPage={filters.pageSize}
                    handleChangePage={handleChangePage}
                    handleChangePageSize={handleChangePageSize}
                    totalRecords={totalRecords}
                  />
                </Box>
              ) : (
                ''
              )}
            </Paper>
          </Card>
        </>

        <ModelActionPopoverBanModel
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem
            onClick={() => {
              handleOpenCredit(selected as BanCustomerDetails);
              handleCloseMenu();
            }}
          >
            <VisibilityIcon sx={{ mr: 2 }} />
            View Details
          </MenuItem>
          {UpdatePermission && (
            <MenuItem
              onClick={() => {
                handleCloseMenu();
                setOpenDeleteModal(true);
              }}
            >
              <NotInterestedIcon sx={{ mr: 2 }} />
              Unban Customer
            </MenuItem>
          )}
        </ModelActionPopoverBanModel>
        <BanCustomerModel open={creditModalOpen} onClose={handleCloseCredit} selectedPayoutData={selectedPayoutData} />
        <DeleteModal
          open={openDeleteModal}
          handleClose={() => {
            setOpenDeleteModal(false);
          }}
          handleDeleteClick={() => selected && handelDeleteBanCustomer(selected?.customer_id)}
          ban={false}
          unban={true}
        />
      </MainLayout>
    </>
  );
};

export default BanCustomer;
