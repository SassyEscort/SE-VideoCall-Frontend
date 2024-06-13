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
import { Chip, CircularProgress, IconButton, MenuItem, Popover } from '@mui/material';
import moment from 'moment';
import { MoreVert, Visibility } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { payoutDetailsService } from 'services/adminServices/payout/payoutDetailsService';
import PayoutModel from './PayoutModel';

export default function PayoutPageContainer() {
  const [selectedPayoutData, setSelectedPayoutData] = useState(null);
  const [data, setData] = useState<any>([]);
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [creditModalOpen, setCreditModalOpen] = useState(false);

  const handelFetch = async () => {
    setIsLoading(true);
    const res = await payoutDetailsService.getPayoutDetails();

    if (res) {
      if (res.code == 200) {
        setData(res?.data?.payout_details);
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
      </Popover>
      <PayoutModel open={creditModalOpen} onClose={handleCloseCredit} selectedPayoutData={selectedPayoutData} />
    </MainLayout>
  );
}
