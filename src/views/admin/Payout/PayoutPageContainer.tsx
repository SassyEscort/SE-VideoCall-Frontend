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
import { CircularProgress, IconButton, Popover } from '@mui/material';
import moment from 'moment';
import { MoreVert, Visibility } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { MenuItem } from '@mui/base/MenuItem';
import { payoutDetailsService } from 'services/payout/payoutDetailsService';

export default function PayoutPageContainer() {
  const [data, setData] = useState<any>([]);
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handelFetch = async () => {
    setIsLoading(true);
    const res = await payoutDetailsService.getPayoutDetails();
    if (res) {
      // setData(res);
      // console.log(res);
      console.log('fetch call');
    }
    setIsLoading(false);
  };
  useEffect(() => {
    handelFetch();
  }, []);
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" gutterBottom>
            Payout History
          </Typography>
        </Stack>

        <Card>
          <Paper sx={{ overflow: 'hidden' }}>
            <TableContainer sx={{ width: '100%' }}>
              <Table>
                <PayoutListHead />
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
                  ) : // ) : paymentsTransaction.length ? (
                  data.length ? (
                    // paymentsTransaction.map((item, index) => (
                    data.map((item: any, index: any) => (
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
                        <TableCell component="th" scope="row">
                          {item?.amount || '-'}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item?.state || '-'}
                        </TableCell>
                        <TableCell sx={{ textAlign: 'left' }}>{item.payoutAmt ? `€${item.payoutAmt.toFixed(2)}` : '-'}</TableCell>

                        {/* <TableCell sx={{ textAlign: 'center' }}>
                          {item.status === PAYMENTS_VALUE_TYPE.PENDING ? (
                            <Chip label="Pending" color="warning" sx={{ width: '72px' }} />
                          ) : item.status === PAYMENTS_VALUE_TYPE.APPROVE ? (
                            <Chip label="Approve" color="success" sx={{ width: '72px' }} />
                          ) : item.status === PAYMENTS_VALUE_TYPE.REJECT ? (
                            <Chip label="Reject" color="error" sx={{ width: '72px' }} />
                          ) : (
                            '-'
                          )}
                        </TableCell> */}
                        <TableCell>{item?.createdDate ? moment(item?.createdDate).format('MMMM DD, YYYY') : '-'}</TableCell>
                        <TableCell>
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={(e) => {
                              // setSelectedPayoutData(item);
                              // handleOpenMenu(e);
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
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 2
                          }}
                        >
                          <Typography variant="body1">Payout history not found</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {/* {paymentsTransaction && paymentsTransaction.length > 0 && (
              <Box sx={{ width: '100%', p: { xs: 1, md: 2 } }}>
                <TablePager
                  page={filters.page}
                  rowsPerPage={filters.pageSize}
                  handleChangePage={handleChangePage}
                  handleChangePageSize={handleChangePageSize}
                  totalRecords={totalRecords}
                />
              </Box>
            )} */}
          </Paper>
        </Card>
      </Container>
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        // onClose={handleCloseMenu}
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
        <MenuItem
          onClick={() => {
            // if (!selectedPayoutData) return;
            // handleOpenCredit(selectedPayoutData);
            // handleCloseMenu();
          }}
        >
          <Visibility sx={{ mr: 2 }} />
          View Details
        </MenuItem>
        {/* {selectedPayoutData?.status === PAYMENTS_VALUE_TYPE.PENDING && (
          <>
            <MenuItem onClick={handleApproveClick}>
              <CheckIcon sx={{ mr: 2, color: 'success.main' }} />
              Approve
            </MenuItem>
            <MenuItem onClick={handleOpenRejectClick}>
              <CloseIcon sx={{ mr: 2, color: 'error.main' }} />
              Reject
            </MenuItem>
          </>
        )} */}
      </Popover>
    </MainLayout>
  );
}
