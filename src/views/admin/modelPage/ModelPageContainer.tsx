'use client';

import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
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
import { adminModelServices, countryListResponse, ModelListing } from 'services/adminModel/adminModel.services';
import { useRouter } from 'next/navigation';
import MainLayout from '../../../views/admin/layouts/AdminLayout/DashboardLayout';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { FilterBox, ModelActionPopover, NotFoundBox, SortBox } from './ModelPageContainer.styled';
import { RiEyeOffLine, RiEyeLine } from 'components/common/customRemixIcons';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import Link from 'next/link';
import HideSourceOutlinedIcon from '@mui/icons-material/HideSourceOutlined';
import { StyledSelectInputLabel } from 'components/UIComponents/UIStyledSelect';
import { useAuthContext } from 'contexts/AuthContext';
import { ModalPage } from 'constants/adminUserAccessConstants';
import { haveUpdatePermission, isPageAccessiable } from 'utils/Admin/PagePermission';
import { Autocomplete, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export type AdminWorkersPaginationType = {
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
  gender: string;
  emailVerified: string | null;
  lastActiveDuration: string;
  lastActiveFromDate: string;
  lastActiveToDate: string;
  country: number | null;
};

const SORT_BY_OPTIONS: PaginationSortByOption[] = [
  { value: 'duration', label: 'Duration' },
  { value: 'calls', label: 'Calls' },
  { value: 'earnings', label: 'Earnings' }
];

export const StatusOfPlan = [
  { value: '', label: 'All' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Approved', label: 'Approved' },
  { value: 'Rejected', label: 'Rejected' }
];

const IS_EMAIL_VERIFIED = [
  { value: '', label: 'All' },
  { value: '1', label: 'True' },
  { value: '0', label: 'False' }
];

const GENDER = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Trans', label: 'Trans' }
];

export type TokenIdTypeAdmin = {
  token: string;
};

export default function ModelPageContainer({ handlePayoutStep }: { handlePayoutStep?: () => void }) {
  const router = useRouter();
  const { adminUserPermissions, isAdmin, token } = useAuthContext();
  const currentMoment = moment().format('YYYY/MM/DD');
  const oneMonthAgoMoment = moment().subtract(1, 'day').format('YYYY/MM/DD');

  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState<ModelListing>();
  const [modelData, setModelData] = useState<ModelListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalRecords, setTotalRecords] = useState(0);
  const [countryList, setCountryList] = useState<countryListResponse[]>([]);
  const [filters, setFilters] = useState<AdminWorkersPaginationType>({
    page: 1,
    pageSize: PAGE_SIZE,
    offset: 0,
    orderField: 'duration',
    orderType: 'desc',
    filter_Text: '',
    duration: 'day',
    fromDate: oneMonthAgoMoment,
    toDate: currentMoment,
    status: '',
    verificationStep: '',
    is_active: '',
    gender: 'Female',
    emailVerified: '',
    lastActiveDuration: 'day',
    lastActiveFromDate: oneMonthAgoMoment,
    lastActiveToDate: currentMoment,
    country: 0
  });

  const UpdatePermission = adminUserPermissions ? haveUpdatePermission(ModalPage, adminUserPermissions) : false;

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

  const handleChangeFilter = useCallback((value: AdminWorkersPaginationType) => {
    setFilters(value);
  }, []);

  const fetchCountryList = async () => {
    if (token.token) {
      const data = await adminModelServices.AdminCountryList(token.token);
      if (data) {
        setCountryList(data);
      }
    }
  };

  const fetchModelData = async () => {
    setIsLoading(true);
    if (token.token) {
      const filterparams = {
        filter: -1,
        date_range: {
          start_date: filters.fromDate,
          end_date: filters.toDate
        },
        sort_order: filters.orderType,
        sort_field: filters.orderField,
        profile_status: filters.status === '' ? null : filters.status,
        country_code: filters.country || null,
        gender: filters.gender === '' ? null : filters.gender,
        email_verified: filters.emailVerified !== '' ? Boolean(Number(filters.emailVerified)) : null,
        last_active_from_date: filters.lastActiveFromDate,
        last_active_to_date: filters.lastActiveToDate,
        search_field: filters.filter_Text
      };

      const data = await adminModelServices.getModelList(filters.pageSize, filters.offset, filterparams, token.token);

      setTotalRecords(data?.aggregate?.total_rows);
      setModelData(data?.model_reports);
    }
    setIsLoading(false);
  };

  const handleModelListRefetch = useCallback(() => {
    fetchModelData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, filters.filter_Text]);

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

  const handleChangeCountry = useCallback(
    (value: countryListResponse | null) => {
      if (value) {
        handleChangeFilter({ ...filters, country: value.id, page: 1 });
      } else {
        handleChangeFilter({ ...filters, country: null, page: 1 });
      }
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

  const handleChangeEmailVerified = useCallback(
    (val: string) => {
      handleChangeFilter({ ...filters, emailVerified: val, page: 1 });
    },
    [filters, handleChangeFilter]
  );

  const handleChangeGender = useCallback(
    (val: string) => {
      handleChangeFilter({ ...filters, gender: val, page: 1 });
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
    handleChangeFilter({
      ...filters,
      duration,
      fromDate,
      toDate,
      page: 1,
      lastActiveDuration: duration,
      lastActiveFromDate: fromDate,
      lastActiveToDate: toDate
    });
  };

  const handelViewDetails = async () => {
    router.push(`/admin/model/details/${selected?.model_id}`);
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

  const handleLastActiveFromDateChange = (value: moment.Moment | null) => {
    if (value?.isValid()) {
      handleChangeFilter({ ...filters, lastActiveFromDate: value?.format('YYYY/MM/DD'), page: 1 });
    }
  };

  const handleLastActiveToDateChange = (value: moment.Moment | null) => {
    if (value?.isValid()) {
      handleChangeFilter({ ...filters, lastActiveToDate: value?.format('YYYY/MM/DD'), page: 1 });
    }
  };

  useEffect(() => {
    fetchModelData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token, filters]);

  useEffect(() => {
    fetchCountryList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token]);

  useEffect(() => {
    if (adminUserPermissions) {
      const isAccessiable = isPageAccessiable(ModalPage, adminUserPermissions) || isAdmin;
      isAccessiable ? '' : router.push('/admin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminUserPermissions, isAdmin]);

  return (
    <>
      <MainLayout>
        <>
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
              <Autocomplete
                value={Array.isArray(countryList) ? countryList.find((country) => country.id === filters.country) || null : null}
                onChange={(event: any, newValue: { id: number; name: string; region: string } | null) => {
                  handleChangeCountry(newValue);
                }}
                options={countryList}
                getOptionLabel={(option) => option.name}
                isOptionEqualToValue={(option, value) => option.id === value?.id}
                renderInput={(params) => <TextField {...params} label="Select Country" />}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} sx={{ width: '100%' }}>
              <FormControl fullWidth>
                <StyledSelectInputLabel sx={{ backgroundColor: 'common.white' }}>Email Verified</StyledSelectInputLabel>
                <Select
                  name="emailVerified"
                  labelId="emailVerified"
                  label="Email Verified"
                  value={filters.emailVerified}
                  onChange={(e) => handleChangeEmailVerified(e.target.value as string)}
                  sx={{
                    width: '100%'
                  }}
                >
                  {IS_EMAIL_VERIFIED.map((stat) => (
                    <MenuItem key={stat.value} value={stat.value}>
                      {stat.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4} sx={{ width: '100%' }}>
              <FormControl fullWidth>
                <StyledSelectInputLabel sx={{ backgroundColor: 'common.white' }}>Gender</StyledSelectInputLabel>
                <Select
                  name="gender"
                  labelId="gender"
                  label="Gender"
                  value={filters.gender}
                  onChange={(e) => handleChangeGender(e.target.value as string)}
                  sx={{
                    width: '100%'
                  }}
                >
                  {GENDER.map((stat) => (
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
          </FilterBox>

          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="flex-start" mt={2} gap={2}>
            <Grid item xs={12} sm={4} sx={{ width: '100%' }}>
              <DatePicker
                label="Last Active FromDate"
                format="DD-MM-YYYY"
                value={moment(filters.lastActiveFromDate)}
                onChange={handleLastActiveFromDateChange}
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={4} sx={{ width: '100%' }}>
              <DatePicker
                label="Last Active ToDate"
                format="DD-MM-YYYY"
                value={moment(filters.lastActiveToDate)}
                onChange={handleLastActiveToDateChange}
                sx={{ width: '100%' }}
              />
            </Grid>
          </Stack>

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
                            <Link href={`/admin/model/details/${item?.model_id}`}>{item?.model_name || '-'}</Link>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <Link href={`/admin/model/details/${item?.model_id}`}>{item?.email || '-'}</Link>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {item?.gender || '-'}
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
                          <TableCell sx={{ textAlign: 'left' }}>{formatFullDate(item?.created_date, '-')}</TableCell>
                          <TableCell sx={{ textAlign: 'left' }}>{formatFullDate(item?.last_active, '-')}</TableCell>
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
                        <TableCell colSpan={15}>
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
        </>
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

          {(UpdatePermission || isAdmin) && (
            <>
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
            </>
          )}
        </ModelActionPopover>
      </MainLayout>
    </>
  );
}
