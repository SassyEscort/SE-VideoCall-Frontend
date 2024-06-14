'use client';

import { useState, useCallback, useEffect } from 'react';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
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
import Chip from '@mui/material/Chip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DashboardLayout from '../../../views/admin/layouts/AdminLayout/DashboardLayout';
import moment from 'moment';
import ReportFilters from 'components/Admin/ReportFilters/ReportFilters';
import { formatFullDate } from 'utils/dateAndTime';
import ModelListHead from './ModelListHead';
import { PaginationSortByOption } from 'components/common/CustomPaginations/type';
import PaginationSortBy from 'components/common/CustomPaginations/PaginationSortBy';
import { PAGE_SIZE } from 'constants/pageConstants';
import { MODEL_ACTION } from 'constants/profileConstants';
import TablePager from 'components/common/CustomPaginations/TablePager';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { adminModelServices, ModelListing } from 'services/adminModel/adminModel.services';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';

export type WorkersPaginationType = {
  page: number;
  offset: number;
  pageSize: number;
  orderField: string;
  orderType: string;
  filterText: string;
  duration: string;
  fromDate: string;
  toDate: string;
};

const SORT_BY_OPTIONS: PaginationSortByOption[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'status', label: 'Status' },
  { value: 'name', label: 'Name' },
  { value: 'email', label: 'Email' },
  { value: 'mobile', label: 'Mobile' }
];

export type TokenIdTypeAdmin = {
  token: string;
};

export default function ModelPageContainer() {
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState<ModelListing>();
  const [modelData, setModelData] = useState<ModelListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [totalRecords, setTotalRecords] = useState(0);

  const currentMoment = moment();
  const oneMonthAgoMoment = moment().subtract(1, 'month');
  const fromDate = oneMonthAgoMoment.format('YYYY/MM/DD');
  const toDate = currentMoment.format('YYYY/MM/DD');
  const [filters, setFilters] = useState<WorkersPaginationType>({
    page: 0,
    pageSize: PAGE_SIZE,
    offset: 0,
    orderField: 'newest',
    orderType: 'desc',
    filterText: '',
    duration: 'month',
    fromDate: fromDate,
    toDate: toDate
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
    setIsLoading(false);
    if (token.token) {
      const data = await adminModelServices.getModelList(token.token, filters.pageSize, filters.offset);
      setTotalRecords(data?.aggregate?.total_rows);
      setModelData(data?.model_details);
    }
  };

  const handleModelListRefetch = useCallback(() => {
    fetchModelData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  useEffect(() => {
    fetchModelData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token, filters.page, filters.pageSize]);

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

  const handleChangeSearch = useCallback(
    (val: string) => {
      handleChangeFilter({ ...filters, filterText: val, page: 1 });
    },
    [filters, handleChangeFilter]
  );

  const handleCloseMenu = () => {
    setOpen(null);
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterDurationChange = (duration: string, fromDate: string, toDate: string) => {
    handleChangeFilter({ ...filters, duration, fromDate, toDate, page: 1 });
  };

  const handleApproveClick = async () => {
    await adminModelServices.modelAction(token.token, Number(selected?.id), MODEL_ACTION.APPROVE);
    handleModelListRefetch();
    handleCloseMenu();
  };

  const handleRejectClick = async () => {
    await adminModelServices.modelAction(token.token, Number(selected?.id), MODEL_ACTION.REJECT);
    handleModelListRefetch();
    handleCloseMenu();
  };

  return (
    <>
      <DashboardLayout>
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
            <Typography variant="h4" gutterBottom>
              Models
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
              orderType={filters.orderType}
              handleChangeOrderBy={handleChangeOrderBy}
            />
          </Box>
          <Card>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ width: '100%' }}>
                <Table>
                  <ModelListHead />

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
                    ) : modelData?.length ? (
                      modelData?.map((item, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 }
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {item.name || '-'}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {item.email || '-'}
                          </TableCell>
                          <TableCell>{item.country_name || '-'}</TableCell>
                          <TableCell sx={{ textAlign: 'center' }}>
                            {item.profile_status === MODEL_ACTION.PENDING ? (
                              <Chip label="Pending" color="warning" />
                            ) : item.profile_status === MODEL_ACTION.APPROVE ? (
                              <Chip label="Approved" color="success" />
                            ) : item.profile_status === MODEL_ACTION.REJECT ? (
                              <Chip label="Rejected" color="error" />
                            ) : (
                              '-'
                            )}
                          </TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{formatFullDate(item.created_at, '-')}</TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{formatFullDate(item.updated_at, '-')}</TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{item.verification_step}</TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{item.email_verified === 0 ? 'Yes' : 'No'}</TableCell>

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
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              p: 2
                            }}
                          >
                            <Typography variant="body1">Model is not found.</Typography>
                          </Box>
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
        <Popover
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              p: 1,
              width: 170,
              '& .MuiMenuItem-root': {
                px: 1,
                typography: 'body2',
                borderRadius: 0.75
              }
            }
          }}
        >
          <MenuItem>
            <VisibilityIcon sx={{ mr: 2 }} />
            View Details
          </MenuItem>
          {selected?.profile_status === MODEL_ACTION.PENDING && (
            <>
              <MenuItem onClick={handleApproveClick}>
                <CheckIcon sx={{ mr: 2, color: 'success.main' }} />
                Approve
              </MenuItem>
              <MenuItem onClick={handleRejectClick}>
                <CloseIcon sx={{ mr: 2, color: 'error.main' }} />
                Reject
              </MenuItem>
            </>
          )}
        </Popover>
      </DashboardLayout>
    </>
  );
}
