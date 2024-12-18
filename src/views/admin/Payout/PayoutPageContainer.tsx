'use client';
import Typography from '@mui/material/Typography';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import PayoutListHead from './PayoutListHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';
import Visibility from '@mui/icons-material/Visibility';
import MoreVert from '@mui/icons-material/MoreVert';
import { useCallback, useEffect, useState } from 'react';
import { payoutDataResponse, payoutDetailsService } from 'services/adminServices/payout/payoutDetailsService';
import PayoutModel from './PayoutModel';
import { PAGE_SIZE } from 'constants/pageConstants';
import TablePager from 'components/common/CustomPaginations/TablePager';
import { StyledPopover } from './Payout.styled';
import { PAYOUT_ACTION } from 'constants/payoutsConstants';
import RejectModal from './RejectModal';
import debounce from 'lodash/debounce';
import CircularProgress from '@mui/material/CircularProgress';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import { useAuthContext } from 'contexts/AuthContext';
import { haveUpdatePermission, isPageAccessiable } from 'utils/Admin/PagePermission';
import { PayoutPage } from 'constants/adminUserAccessConstants';
import { FormControl, Grid, Select } from '@mui/material';
import { StyledSelectInputLabel } from 'components/UIComponents/UIStyledSelect';
import { StatusOfPlan } from '../modelPage/ModelPageContainer';
import ReportFilters from 'components/Admin/ReportFilters/ReportFilters';

export type PaginationType = {
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
};

export default function PayoutPageContainer() {
  const router = useRouter();
  const { adminUserPermissions, isAdmin, token } = useAuthContext();
  const UpdatePermission = adminUserPermissions ? haveUpdatePermission(PayoutPage, adminUserPermissions) : false;

  const currentMoment = moment().format('YYYY/MM/DD');
  const oneMonthAgoMoment = moment().subtract(1, 'day').format('YYYY/MM/DD');

  const [selectedPayoutData, setSelectedPayoutData] = useState<payoutDataResponse | null>(null);
  const [data, setData] = useState<payoutDataResponse[]>([]);
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [creditModalOpen, setCreditModalOpen] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [openReject, setOpenReject] = useState(false);
  const [filters, setFilters] = useState<PaginationType>({
    page: 1,
    offset: 0,
    pageSize: PAGE_SIZE,
    orderField: 'newest',
    orderType: 'desc',
    search_field: '',
    duration: 'day',
    fromDate: oneMonthAgoMoment,
    toDate: currentMoment,
    status: ''
  });

  const handelFetch = async () => {
    setIsLoading(true);
    const res = await payoutDetailsService.getPayoutDetails(
      token.token,
      filters.pageSize,
      filters.offset,
      filters.search_field,
      filters.fromDate,
      filters.toDate,
      filters.status
    );

    if (res) {
      if (res.code == 200) {
        setData(res?.data?.payout_details);
        setTotalRecords(res?.data?.aggregate?.total_rows);
      }
    }
    setIsLoading(false);
  };

  const handleRefetch = useCallback(() => {
    if (token.token) handelFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
    setAnchorEl(null);
  };

  const handleOpenCredit = (value: payoutDataResponse) => {
    setSelectedPayoutData(value);
    setCreditModalOpen(true);
  };

  const handleCloseCredit = () => {
    setCreditModalOpen(false);
  };

  const handleChangeFilter = useCallback((value: PaginationType) => {
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

  const handelChangeStatus = async (value: boolean) => {
    await payoutDetailsService.payoutAction(token.token, Number(selectedPayoutData?.id), value);
    handleRefetch();
    handleCloseMenu();
  };

  const handleOpenRejectClick = () => {
    setOpenReject(true);
  };

  const handleCloseRejectClick = () => {
    setOpenReject(false);
  };

  const handleFilterDurationChange = (duration: string, fromDate: string, toDate: string) => {
    handleChangeFilter({ ...filters, duration, fromDate, toDate, page: 1 });
  };

  const handleChangeStatus = useCallback(
    (val: string) => {
      handleChangeFilter({ ...filters, status: val, page: 1 });
    },
    [filters, handleChangeFilter]
  );

  useEffect(() => {
    if (token.token) {
      handelFetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token, filters]);

  useEffect(() => {
    if (adminUserPermissions) {
      const isAccessiable = isPageAccessiable(PayoutPage, adminUserPermissions) || isAdmin;
      isAccessiable ? '' : router.push('/admin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminUserPermissions, isAdmin]);

  return (
    <MainLayout>
      <>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" gutterBottom>
            Payout History
          </Typography>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" mb={1}>
          <ReportFilters
            duration={filters.duration}
            fromDate={filters.fromDate}
            toDate={filters.toDate}
            onFilterDurationChange={handleFilterDurationChange}
            handleChangeSearch={handleChangeSearch}
          />
        </Stack>
        <Grid item xs={12} sm={6} md={4} sx={{ width: '100%', maxWidth: { sm: '33%' } }}>
          <FormControl fullWidth>
            <StyledSelectInputLabel sx={{ backgroundColor: 'common.white' }}>Profile Status</StyledSelectInputLabel>
            <Select
              name="status"
              labelId="status"
              label="Profile Status"
              value={filters.status}
              onChange={(e) => handleChangeStatus(e.target.value as string)}
              sx={{ width: '100%' }}
            >
              {StatusOfPlan?.map((stat) => (
                <MenuItem key={stat?.value} value={stat?.value}>
                  {stat?.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Card sx={{ mt: 4 }}>
          <Paper sx={{ overflow: 'hidden' }}>
            <TableContainer sx={{ width: '100%' }}>
              <Table>
                <PayoutListHead />
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={10}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                          <CircularProgress />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ) : data?.length ? (
                    data?.map((item, index) => (
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
                        <TableCell sx={{ textAlign: 'left' }}>{item?.amount ? `$${item?.amount?.toFixed(2)}` : '-'}</TableCell>

                        <TableCell component="th" scope="row">
                          {item?.bank_name || '-'}
                        </TableCell>
                        <TableCell sx={{ textAlign: 'left' }}>
                          {item?.state === PAYOUT_ACTION.PENDING ? (
                            <Chip label="Pending" color="warning" />
                          ) : item?.state === PAYOUT_ACTION.APPROVE ? (
                            <Chip label="Approved" color="success" />
                          ) : item?.state === PAYOUT_ACTION.REJECT ? (
                            <Chip label="Rejected" color="error" />
                          ) : (
                            '-'
                          )}
                        </TableCell>

                        <TableCell>{item?.created_at ? moment(item?.created_at).format('MMMM DD, YYYY') : '-'}</TableCell>
                        <TableCell>
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={(e) => {
                              setSelectedPayoutData(item);
                              handleOpenMenu(e);
                            }}
                          >
                            <MoreVert />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={10}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                          <Typography variant="body1">Payout history not found</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {data && data.length > 0 && (
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
      </>
      <StyledPopover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          onClick={() => {
            if (!selectedPayoutData) return;
            handleOpenCredit(selectedPayoutData);
            handleCloseMenu();
          }}
        >
          <Visibility sx={{ mr: 2 }} />
          View Details
        </MenuItem>
        {(UpdatePermission || isAdmin) && selectedPayoutData?.state === PAYOUT_ACTION.PENDING && (
          <>
            <MenuItem onClick={() => handelChangeStatus(false)}>
              <CheckIcon sx={{ mr: 2, color: 'success.main' }} />
              Approve
            </MenuItem>
            <MenuItem onClick={handleOpenRejectClick}>
              <CloseIcon sx={{ mr: 2, color: 'error.main' }} />
              Reject
            </MenuItem>
          </>
        )}
      </StyledPopover>
      <PayoutModel open={creditModalOpen} onClose={handleCloseCredit} selectedPayoutData={selectedPayoutData} />
      <RejectModal
        open={openReject}
        handleClose={handleCloseRejectClick}
        selectedId={selectedPayoutData?.id as number}
        handleRefetch={handleRefetch}
        handleCloseMenu={handleCloseMenu}
      />
    </MainLayout>
  );
}
