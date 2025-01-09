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
import debounce from 'lodash/debounce';
import { PAYOUT_ACTION } from 'constants/payoutsConstants';
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
import CallReviewListHead from './CallReviewListHead';
import { StyledPopover } from './CallReview.styled';
import CallReviewModel from './CallReviewModel';
import { CallReviewDataResponse, CallReviewService } from 'services/adminServices/call-review/callReviewService';
import Close from '@mui/icons-material/Close';
import Check from '@mui/icons-material/Check';
import { toast } from 'react-toastify';
import { MODEL_ACTION } from 'constants/profileConstants';
import RejectModal from './RejectModal';

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

export default function CallReviewContainer() {
  const router = useRouter();
  const { adminUserPermissions, isAdmin, token } = useAuthContext();
  const UpdatePermission = adminUserPermissions ? haveUpdatePermission(CallLogsPage, adminUserPermissions) : false;

  const currentMoment = moment().format('YYYY/MM/DD');
  const oneMonthAgoMoment = moment().subtract(1, 'day').format('YYYY/MM/DD');

  const [selectedPayoutData, setSelectedPayoutData] = useState<CallReviewDataResponse | null>(null);
  const isPending = selectedPayoutData?.status === PAYOUT_ACTION.PENDING;
  const [data, setData] = useState<CallReviewDataResponse[]>([]);
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
    const res = await CallReviewService.getCallReviewDetails(
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
        setData(res?.data?.calls_review);
        setTotalRecords(res?.data?.aggregate?.total_rows);
      }
    }
    setIsLoading(false);
  };

  const handleApproveClick = async () => {
    try {
      await CallReviewService.reviewAction(
        token.token,
        Number(selectedPayoutData?.call_id),
        MODEL_ACTION.APPROVE,
        Number(selectedPayoutData?.review_id)
      );
      toast.success('Call Review Approved');
    } catch (error) {
      toast.error('error');
    } finally {
      handleCloseMenu();
      handelFetch();
    }
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
    setAnchorEl(null);
  };

  const handleOpenCredit = (value: CallReviewDataResponse) => {
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

  const handleOpenRejectClick = () => {
    setOpenReject(true);
    handleCloseMenu();
  };

  const handleCloseRejectClick = () => {
    setOpenReject(false);
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
            Call Review
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
                <CallReviewListHead isAdmin={isAdmin} UpdatePermission={UpdatePermission} />
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={8}>
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
                        <TableCell component="th" scope="row">
                          {item?.customer_name || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.duration || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.model_name || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.rejected_reason || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {(Boolean(item?.is_free_call) && 'Free') || 'Paid' || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.review_type || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.screenshots_count || '0'}
                        </TableCell>
                        <TableCell sx={{ textAlign: 'left' }}>
                          {item?.status === PAYOUT_ACTION.PENDING ? (
                            <Chip label="Pending" color="warning" />
                          ) : item?.status === PAYOUT_ACTION.APPROVE ? (
                            <Chip label="Approved" color="success" />
                          ) : item?.status === PAYOUT_ACTION.REJECT ? (
                            <Chip label="Rejected" color="error" />
                          ) : (
                            '-'
                          )}
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
                      <TableCell colSpan={8}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                          <Typography variant="body1">Call Review history not found</Typography>
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
        {isPending && (
          <>
            <MenuItem onClick={handleApproveClick}>
              <Check sx={{ mr: 2, color: 'green' }} />
              Approve
            </MenuItem>
            <MenuItem onClick={handleOpenRejectClick}>
              <Close sx={{ mr: 2, color: 'red' }} />
              Reject
            </MenuItem>
          </>
        )}
      </StyledPopover>
      <CallReviewModel open={creditModalOpen} onClose={handleCloseCredit} selectedPayoutData={selectedPayoutData} />
      <RejectModal
        open={openReject}
        handleClose={handleCloseRejectClick}
        selectedId={selectedPayoutData}
        handleCloseMenu={handleCloseMenu}
        handelFetch={handelFetch}
      />
    </MainLayout>
  );
}
