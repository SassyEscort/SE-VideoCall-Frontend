'use client';

import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce'; // Import lodash debounce
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
import moment from 'moment';
import ReportFilters from 'components/Admin/ReportFilters/ReportFilters';
import { formatFullDate } from 'utils/dateAndTime';
import ModelListHead from './ModelListHead';
import { PaginationSortByOption } from 'components/common/CustomPaginations/type';
import PaginationSortBy from 'components/common/CustomPaginations/PaginationSortBy';
import { PAGE_SIZE } from 'constants/pageConstants';
import { MODEL_ACTION } from 'constants/profileConstants';
import TablePager from 'components/common/CustomPaginations/TablePager';
import MenuItem from '@mui/material/MenuItem';
import { adminModelServices, ModelListing } from 'services/adminModel/adminModel.services';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { useRouter } from 'next/navigation';
import MainLayout from '../../../views/admin/layouts/AdminLayout/DashboardLayout';
import FormControl from '@mui/material/FormControl';
import { StyledSelectInputLabel } from 'components/UIComponents/StyleSelect';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { FilterBox, ModelActionPopover, NotFoundBox, SortBox } from './ModelPageContainer.styled';
import { RiEyeOffLine, RiEyeLine } from 'components/common/customRemixIcons';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import Link from 'next/link';
import HideSourceOutlinedIcon from '@mui/icons-material/HideSourceOutlined';

export type WorkersPaginationType = {
  page: number;
  offset: number;
  pageSize: number;
  orderField: string;
  orderType: string;
  filter_Text: string;
  duration: string;
  fromDate: string;
  toDate: string;
  status: string;
  verificationStep: string;
  is_active: string;
};

const SORT_BY_OPTIONS: PaginationSortByOption[] = [
  { value: 'created_at', label: 'Newest' },
  { value: 'name', label: 'Name' },
  { value: 'email', label: 'Email' },
  { value: 'last_active', label: 'Last active' },
  { value: 'last_login', label: 'Last login' }
];

const StatusOfPlan = [
  { value: '', label: 'All' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Approved', label: 'Approved' },
  { value: 'Rejected', label: 'Rejected' }
];

const IS_ACTIVE = [
  { value: '', label: 'All' },
  { value: 'true', label: 'True' },
  { value: 'false', label: 'False' }
];

const verification_step = [
  { value: '', label: 'All' },
  { value: 'Basic_Details', label: 'Basic Details' },
  { value: 'Upload_Documents', label: 'Upload Documents' },
  { value: 'Upload_Photos', label: 'Upload Photos' },
  { value: 'Onboarded', label: 'Onboarded' },
  { value: 'In_Review', label: 'In Review' },
  { value: 'Verified', label: 'Verified' }
];

export type TokenIdTypeAdmin = {
  token: string;
};

export default function ModelPageContainer({ handlePayoutStep }: { handlePayoutStep?: () => void }) {
  const router = useRouter();
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState<ModelListing>();
  const [modelData, setModelData] = useState<ModelListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [totalRecords, setTotalRecords] = useState(0);

  const currentMoment = moment();
  const oneMonthAgoMoment = moment().subtract(1, 'day');
  const fromDate = oneMonthAgoMoment.format('YYYY/MM/DD');
  const toDate = currentMoment.format('YYYY/MM/DD');
  const [filters, setFilters] = useState<WorkersPaginationType>({
    page: 1,
    pageSize: PAGE_SIZE,
    offset: 0,
    orderField: 'created_at',
    orderType: 'desc',
    filter_Text: '',
    duration: 'day',
    fromDate: fromDate,
    toDate: toDate,
    status: '',
    verificationStep: '',
    is_active: ''
  });

  const handleModelDetailsRefetch = useCallback(() => {
    fetchModelData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleModelDetailsDelete = async (id: number) => {
    try {
      if (token.token) {
        const data = await adminModelServices.modelDetailsDelete(token.token, id);
        handleCloseMenu();
        if (data.code === 200) {
          handleModelDetailsRefetch();
          toast.success('Success');
          if (handlePayoutStep) {
            handlePayoutStep();
          }
        } else {
          toast.error(data?.error);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

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
        token: token.token,
        limit: filters.pageSize,
        offset: filters.offset,
        filter_text: filters.filter_Text,
        from_date: filters.fromDate,
        to_date: filters.toDate,
        sort_order: filters.orderType,
        sort_field: filters.orderField,
        verification_step: filters.verificationStep,
        profile_status: filters.status,
        is_active: filters.is_active
      };

      const data = await adminModelServices.getModelList(filterparams);
      setTotalRecords(data?.aggregate?.total_rows);
      setModelData(data?.model_details);
    }
    setIsLoading(false);
  };

  const handleModelListRefetch = useCallback(() => {
    fetchModelData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, filters.filter_Text]);

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
      handleChangeFilter({ ...filters, filter_Text: val, page: 1 });
    }, 500),
    [filters, handleChangeFilter]
  );

  const handleChangeSearch = (val: string) => {
    debouncedChangeSearch(val);
  };

  const handleChangeStatus = useCallback(
    (val: string) => {
      handleChangeFilter({ ...filters, status: val, page: 1 });
    },
    [filters, handleChangeFilter]
  );
  const handleChangeVerificationStep = useCallback(
    (val: string) => {
      handleChangeFilter({ ...filters, verificationStep: val, page: 1 });
    },
    [filters, handleChangeFilter]
  );
  const handleChangeIsActive = useCallback(
    (val: string) => {
      handleChangeFilter({ ...filters, is_active: val, page: 1 });
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

  const handelViewDetails = async () => {
    router.push(`/admin/model/details/${selected?.id}`);
  };

  const handleHideModel = async () => {
    await adminModelServices.modelAction(token.token, Number(selected?.id), String(selected?.profile_status), false);
    handleModelListRefetch();
    handleCloseMenu();
  };

  const handleShowModel = async () => {
    await adminModelServices.modelAction(token.token, Number(selected?.id), String(selected?.profile_status), true);
    handleModelListRefetch();
    handleCloseMenu();
  };

  const handleModelDetailsIsOffline = async (id: number) => {
    try {
      if (token.token) {
        const data = await adminModelServices.modelDetailsStatusOffline(token.token, id);
        handleCloseMenu();
        if (data.code === 200) {
          handleModelListRefetch();
          toast.success('Success');
        } else {
          toast.error(data?.error);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  return (
    <>
      <MainLayout>
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
          <FilterBox>
            <Grid item xs={12} sm={6} md={4} sx={{ width: '100%' }}>
              <FormControl fullWidth>
                <StyledSelectInputLabel sx={{ backgroundColor: 'common.white' }}>Is deleted</StyledSelectInputLabel>
                <Select
                  name="is_active"
                  labelId="is_active"
                  label="Is deleted"
                  value={filters.is_active}
                  onChange={(e) => handleChangeIsActive(e.target.value as string)}
                  sx={{
                    width: '100%'
                  }}
                >
                  {IS_ACTIVE.map((stat) => (
                    <MenuItem key={stat.value} value={stat.value}>
                      {stat.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ width: '100%' }}>
              <FormControl fullWidth>
                <StyledSelectInputLabel sx={{ backgroundColor: 'common.white' }}>Profile Status</StyledSelectInputLabel>
                <Select
                  name="status"
                  labelId="status"
                  label="Profile Status"
                  value={filters.status}
                  onChange={(e) => handleChangeStatus(e.target.value as string)}
                  sx={{
                    width: '100%'
                  }}
                >
                  {StatusOfPlan?.map((stat) => (
                    <MenuItem key={stat?.value} value={stat?.value}>
                      {stat?.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ width: '100%' }}>
              <FormControl fullWidth>
                <StyledSelectInputLabel sx={{ backgroundColor: 'common.white' }}>verification step</StyledSelectInputLabel>
                <Select
                  name="verification_step"
                  labelId="verification_step"
                  label="verification step"
                  value={filters.verificationStep}
                  onChange={(e) => handleChangeVerificationStep(e.target.value as string)}
                  sx={{
                    width: '100%'
                  }}
                >
                  {verification_step?.map((stat) => (
                    <MenuItem key={stat?.value} value={stat?.value}>
                      {stat?.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </FilterBox>
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
                            <Link href={`/admin/model/details/${item?.id}`}>{item?.name || '-'}</Link>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <Link href={`/admin/model/details/${item?.id}`}>{item?.email || '-'}</Link>
                          </TableCell>
                          <TableCell>{item?.country_name || '-'}</TableCell>
                          <TableCell sx={{ textAlign: 'center' }}>
                            {item?.profile_status === MODEL_ACTION.PENDING ? (
                              <Chip label="Pending" color="warning" />
                            ) : item?.profile_status === MODEL_ACTION.APPROVE && item?.is_visible ? (
                              <Chip label="Approved" color="success" />
                            ) : item?.profile_status === MODEL_ACTION.REJECT ? (
                              <Chip label="Rejected" color="error" />
                            ) : !item?.is_visible && item?.profile_status !== MODEL_ACTION.PENDING ? (
                              <Chip label="Hidden" />
                            ) : (
                              '-'
                            )}
                          </TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{formatFullDate(item?.created_at, '-')}</TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{formatFullDate(item?.last_active, '-')}</TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{formatFullDate(item?.last_login, '-')}</TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{item?.verification_step}</TableCell>
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
                            <Typography variant="body1">Model is not found.</Typography>
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
          <MenuItem onClick={handelViewDetails}>
            <RiEyeLine style={{ marginRight: '4px', width: '20px' }} />
            View Details
          </MenuItem>

          {selected?.is_visible && selected?.profile_status === MODEL_ACTION.APPROVE ? (
            <>
              <MenuItem onClick={handleHideModel}>
                <RiEyeOffLine style={{ marginRight: '4px' }} />
                Hide from listing
              </MenuItem>
            </>
          ) : (
            selected?.profile_status === MODEL_ACTION.APPROVE && (
              <>
                <MenuItem onClick={handleShowModel}>
                  <RiEyeLine />
                  Show in listing
                </MenuItem>
              </>
            )
          )}
          {selected?.is_online === 1 && (
            <MenuItem onClick={() => handleModelDetailsIsOffline(selected?.id as number)}>
              <HideSourceOutlinedIcon sx={{ '&.MuiSvgIcon-root': { width: '15px', height: '15px', marginRight: '4px' } }} />
              Mark offline
            </MenuItem>
          )}

          <MenuItem onClick={() => handleModelDetailsDelete(selected?.id as number)}>
            <DeleteOutlineIcon sx={{ mr: 0.5, color: 'error.main' }} />
            Delete
          </MenuItem>
        </ModelActionPopover>
      </MainLayout>
    </>
  );
}
