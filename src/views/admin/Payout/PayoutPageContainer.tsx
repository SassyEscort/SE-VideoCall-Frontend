'use client';
import Container from '@mui/material/Container';
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
import { Chip, CircularProgress, IconButton, MenuItem } from '@mui/material';
import moment from 'moment';
import { MoreVert, Visibility } from '@mui/icons-material';
import { useCallback, useEffect, useState } from 'react';
import { payoutDetailsService } from 'services/adminServices/payout/payoutDetailsService';
import PayoutModel from './PayoutModel';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { PaginationSortByOption } from 'components/common/CustomPaginations/type';
import PaginationSortBy from 'components/common/CustomPaginations/PaginationSortBy';
import { PAGE_SIZE } from 'constants/pageConstants';
import PaginationSearch from 'components/common/CustomPaginations/PaginationSearch';
import TablePager from 'components/common/CustomPaginations/TablePager';
import { StyledPopover } from './Payout.styled';

export type PaginationType = {
  page: number;
  offset: number;
  pageSize: number;
  orderField: string;
  orderType: string;
  filterText: string;
};

export default function PayoutPageContainer() {
  const [selectedPayoutData, setSelectedPayoutData] = useState(null);
  const [data, setData] = useState<any>([]);
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [creditModalOpen, setCreditModalOpen] = useState(false);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [totalRecords, setTotalRecords] = useState(0);

  const [filters, setFilters] = useState<PaginationType>({
    page: 0,
    offset: 0,
    pageSize: PAGE_SIZE,
    orderField: 'newest',
    orderType: 'desc',
    filterText: ''
  });

  const SORT_BY_OPTIONS: PaginationSortByOption[] = [
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' },
    { value: 'amount', label: 'Amount' }
  ];
  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();

      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
  }, [token.token]);

  const handelFetch = async () => {
    setIsLoading(true);
    const res = await payoutDetailsService.getPayoutDetails(token.token, filters.pageSize, filters.offset);

    if (res) {
      if (res.code == 200) {
        setData(res?.data?.payout_details);
        setTotalRecords(res.data.aggregate.total_rows);
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
  const handleOpenCredit = (value: any) => {
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

  useEffect(() => {
    handelFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token, filters.page, filters.pageSize]);

  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" gutterBottom>
            Payout History
          </Typography>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" mb={1}>
          <PaginationSearch placeholder="Search..." handleChangeSearch={handleChangeSearch} />
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
                    data.map((item: any, index: any) => (
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
                        <TableCell sx={{ textAlign: 'left' }}>{item.amount ? `€${item.amount.toFixed(2)}` : '-'}</TableCell>

                        <TableCell component="th" scope="row">
                          {item.bank_name || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item.state === 'Pending' ? (
                            <Chip label="Pending" color="warning" />
                          ) : item.state === 'Approve' ? (
                            <Chip label="Approve" color="success" />
                          ) : item.state === 'Reject' ? (
                            <Chip label="Reject" color="error" />
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
      </Container>
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
      <PayoutModel open={creditModalOpen} onClose={handleCloseCredit} selectedPayoutData={selectedPayoutData} />
    </MainLayout>
  );
}
