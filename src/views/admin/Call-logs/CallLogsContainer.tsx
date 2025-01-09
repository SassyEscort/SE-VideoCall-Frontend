'use client';
import Typography from '@mui/material/Typography';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import moment from 'moment';
import Visibility from '@mui/icons-material/Visibility';
import MoreVert from '@mui/icons-material/MoreVert';
import { useCallback, useEffect, useState } from 'react';
import { PaginationSortByOption } from 'components/common/CustomPaginations/type';
import PaginationSortBy from 'components/common/CustomPaginations/PaginationSortBy';
import { PAGE_SIZE } from 'constants/pageConstants';
import TablePager from 'components/common/CustomPaginations/TablePager';
import { StyledPopover } from './CallLogs.styled';
import CallLogsListHead from './CallLogsListHead';
import CallLogsModel from './CallLogsModel';
import { CallLogDataResponse, CallLogsDetailsService } from 'services/adminServices/call-list/callListDetailsService';
import debounce from 'lodash/debounce';
import { CALL_LOG_ACTION } from 'constants/payoutsConstants';
import Link from 'next/link';
import { formatDuration, formatFullDate } from 'utils/dateAndTime';
import ReportFilters from 'components/Admin/ReportFilters/ReportFilters';
import CircularProgress from '@mui/material/CircularProgress';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { useAuthContext } from 'contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { haveUpdatePermission, isPageAccessiable } from 'utils/Admin/PagePermission';
import { CallLogsPage } from 'constants/adminUserAccessConstants';
import { UserLoaderBox } from '../UsersPage/UpsertPage.styled';
import { FormControl, Grid, Select } from '@mui/material';
import { StyledSelectInputLabel } from 'components/UIComponents/UIStyledSelect';
import { FilterBox } from '../modelPage/ModelPageContainer.styled';

export type PaginationType = {
  page: number;
  offset: number;
  pageSize: number;
  orderField: string;
  sort_order: string;
  search_field: string;
  duration: string;
  fromDate: string;
  toDate: string;
  call_status: string;
  ended_by: string;
};

const Ended_By = [
  { value: '', label: 'All' },
  { value: 'model', label: 'Model' },
  { value: 'customer', label: 'Customer' }
];

const Call_Status = [
  { value: '', label: 'All' },
  { value: 'Ended', label: 'Ended' },
  { value: 'Cancelled', label: 'Cancelled' },
  { value: 'Unanswered', label: 'Unanswered' },
  { value: 'Rejected', label: 'Rejected' }
];

const SORT_BY_OPTIONS: PaginationSortByOption[] = [
  { value: 'id', label: 'Id' },
  { value: 'model_id', label: 'Model Id' },
  { value: 'customer_id', label: 'Customer Id' },
  { value: 'model_name', label: 'Model Name' },
  { value: 'customer_name', label: 'Customer Name' },
  { value: 'status', label: 'Status' },
  { value: 'duration', label: 'Duration' },
  { value: 'credit_used', label: 'Credit Used' },
  { value: 'is_active', label: 'Is Active' },
  { value: 'amount_earned', label: 'Amount Earned' },
  { value: 'created_at', label: 'Created At' },
  { value: 'updated_at', label: 'Updated At' }
];

export default function CallLogsContainer() {
  const router = useRouter();
  const { adminUserPermissions, isAdmin, token } = useAuthContext();
  const UpdatePermission = adminUserPermissions ? haveUpdatePermission(CallLogsPage, adminUserPermissions) : false;

  const currentMoment = moment().format('YYYY/MM/DD');
  const oneMonthAgoMoment = moment().subtract(1, 'day').format('YYYY/MM/DD');

  const [selectedPayoutData, setSelectedPayoutData] = useState<CallLogDataResponse | null>(null);
  const [data, setData] = useState<CallLogDataResponse[]>([]);
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [creditModalOpen, setCreditModalOpen] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [filters, setFilters] = useState<PaginationType>({
    page: 1,
    offset: 0,
    pageSize: PAGE_SIZE,
    orderField: 'created_at',
    sort_order: 'desc',
    search_field: '',
    duration: 'day',
    fromDate: oneMonthAgoMoment,
    toDate: currentMoment,
    call_status: '',
    ended_by: ''
  });

  const handelFetch = async () => {
    setIsLoading(true);
    const res = await CallLogsDetailsService.getCallLogsDetails(
      token.token,
      filters.pageSize,
      filters.offset,
      filters.search_field,
      filters.fromDate,
      filters.toDate,
      filters.sort_order,
      filters.orderField,
      filters.ended_by,
      filters.call_status
    );

    if (res) {
      if (res.code == 200) {
        setData(res?.data?.call_logs);
        setTotalRecords(res?.data?.aggregate?.total_rows);
      }
    }
    setIsLoading(false);
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
    setAnchorEl(null);
  };

  const handleOpenCredit = (value: CallLogDataResponse) => {
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

  const handleChangeOrderBy = useCallback(
    (field: string, type: string) => {
      handleChangeFilter({
        ...filters,
        sort_order: type,
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

  const handleFilterDurationChange = (duration: string, fromDate: string, toDate: string) => {
    handleChangeFilter({ ...filters, duration, fromDate, toDate, page: 1 });
  };

  const handleFilterCallStatusChange = (val: string) => {
    handleChangeFilter({ ...filters, call_status: val, page: 1 });
  };

  const handleFilterEndedByChange = (val: string) => {
    handleChangeFilter({ ...filters, ended_by: val, page: 1 });
  };

  useEffect(() => {
    if (token.token) {
      handelFetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token, filters]);

  useEffect(() => {
    if (adminUserPermissions) {
      const isAccessiable = isPageAccessiable(CallLogsPage, adminUserPermissions) || isAdmin;
      isAccessiable ? '' : router.push('/admin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminUserPermissions, isAdmin]);

  return (
    <MainLayout>
      <>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" gutterBottom>
            Call Logs History
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
        <FilterBox sx={{ justifyContent: 'flex-start' }}>
          <Grid item xs={12} sm={6} md={4} sx={{ width: '100%', maxWidth: { sm: '33%' } }}>
            <FormControl fullWidth>
              <StyledSelectInputLabel sx={{ backgroundColor: 'common.white' }}>Ended By</StyledSelectInputLabel>
              <Select
                name="ended_by"
                labelId="ended_by"
                label="Ended By"
                value={filters.ended_by}
                onChange={(e) => handleFilterEndedByChange(e.target.value as string)}
                sx={{
                  width: '100%'
                }}
              >
                {Ended_By.map((stat) => (
                  <MenuItem key={stat.value} value={stat.value}>
                    {stat.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ width: '100%', maxWidth: { sm: '33%' } }}>
            <FormControl fullWidth>
              <StyledSelectInputLabel sx={{ backgroundColor: 'common.white' }}>Call Status</StyledSelectInputLabel>
              <Select
                name="call_status"
                labelId="call_status"
                label="Call Status"
                value={filters.call_status}
                onChange={(e) => handleFilterCallStatusChange(e.target.value as string)}
                sx={{
                  width: '100%'
                }}
              >
                {Call_Status.map((stat) => (
                  <MenuItem key={stat.value} value={stat.value}>
                    {stat.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </FilterBox>
        <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
          <PaginationSortBy
            sortByOptions={SORT_BY_OPTIONS}
            orderField={filters.orderField}
            orderType={filters.sort_order}
            handleChangeOrderBy={handleChangeOrderBy}
          />
        </Box>
        <Card>
          <Paper sx={{ overflow: 'hidden' }}>
            <TableContainer sx={{ width: '100%' }}>
              <Table>
                <CallLogsListHead isAdmin={isAdmin} UpdatePermission={UpdatePermission} />
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={13}>
                        <UserLoaderBox>
                          <CircularProgress />
                        </UserLoaderBox>
                      </TableCell>
                    </TableRow>
                  ) : data && data?.length ? (
                    data?.map((item, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 }
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            cursor: 'pointer',
                            '&:hover': {
                              color: '#757575de'
                            }
                          }}
                        >
                          <Link href={`/admin/model/details/${item?.model_id}`}>{item?.model_name || '-'}</Link>
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            cursor: 'pointer',
                            '&:hover': {
                              color: '#757575de'
                            }
                          }}
                        >
                          <Link href={`/admin/model/details/${item?.model_id}`}>{item?.model_email || '-'}</Link>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.customer_name || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.customer_email || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.status === CALL_LOG_ACTION.UNANSWERED ? (
                            <Chip label="Unanswered" color="warning" />
                          ) : item?.status === CALL_LOG_ACTION.ENDED ? (
                            <Chip label="Ended" color="success" />
                          ) : item?.status === CALL_LOG_ACTION.CANCELLED ? (
                            <Chip label="Cancelled" color="error" />
                          ) : item?.status === CALL_LOG_ACTION.REJECTED ? (
                            <Chip label="Rejected" color="secondary" sx={{ color: '#000' }} />
                          ) : (
                            '-'
                          )}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {formatFullDate(item.created_at)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.credits_used || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {(Boolean(item?.is_free_call) && 'Free') || 'Paid' || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.credits_per_minute || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item.rate_per_minute ? `€${item.rate_per_minute?.toFixed(2)}` : '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item.amount_earned ? `€${item.amount_earned?.toFixed(2)}` : '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {formatDuration(item?.duration ?? 0)}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.screenshot_interval || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.screenshot_count ?? 0}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.ended_by || '-'}
                        </TableCell>
                        {(isAdmin || UpdatePermission) && (
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
                        )}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={17}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                          <Typography variant="body1">Call logs history not found</Typography>
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
      </StyledPopover>
      <CallLogsModel open={creditModalOpen} onClose={handleCloseCredit} selectedPayoutData={selectedPayoutData} />
    </MainLayout>
  );
}
