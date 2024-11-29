'use client';
import React, { useCallback, useEffect, useState } from 'react';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Box from '@mui/material/Box';
import Packages from './Packages';
import AddEditCustomerPackages from './AddEditCustomerPackages';
import {
  adminCustomerPackagesServices,
  AdminPackagesRes,
  creditsReportData,
  PackageBarChartData
} from 'services/adminCustomerPackages/adminCustomerPackages.services';
import { useAuthContext } from 'contexts/AuthContext';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import DeleteModal from 'components/UIComponents/DeleteModal';
import {
  MainTitleBox,
  PackageMainBox,
  PackageReportCardBox,
  PackageReportCardPaper,
  PackageReportChartBox,
  PackageReportDetailCell,
  PackageReportListingBox,
  PackageReportMainBox
} from './CustomerPackage.styled';
import { haveUpdatePermission, isPageAccessiable } from 'utils/Admin/PagePermission';
import { PackagePage } from 'constants/adminUserAccessConstants';
import { useRouter } from 'next/navigation';
import ReportFilters from 'components/Admin/ReportFilters/ReportFilters';
import moment from 'moment';
import { PAGE_SIZE } from 'constants/pageConstants';
import useChart from 'components/UIComponents/Chart/useChart';
import { ApexOptions } from 'apexcharts';
import Chart from 'components/UIComponents/Chart';

import TablePager from 'components/common/CustomPaginations/TablePager';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

function CustomerPackagesContainer() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const { token, isAdmin, adminUserPermissions } = useAuthContext();
  const [packages, setPackages] = useState<AdminPackagesRes[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<AdminPackagesRes | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chartData, setChartData] = useState<PackageBarChartData[]>([]);
  const [chartSeries, setChartSeries] = useState<{ name: string; data: { x: string; y: number; revenue: number }[] }[]>([]);
  const [packageReport, setPackageReport] = useState<creditsReportData>({} as creditsReportData);
  const [totalRecords, setTotalRecords] = useState(0);

  const currentMoment = moment();
  const oneMonthAgoMoment = moment().subtract(1, 'day');
  const fromDate = oneMonthAgoMoment.format('YYYY-MM-DD');
  const toDate = currentMoment.format('YYYY-MM-DD');
  const [filters, setFilters] = useState({
    page: 1,
    pageSize: PAGE_SIZE,
    offset: 0,
    duration: 'day',
    fromDate: fromDate,
    toDate: toDate
  });

  useEffect(() => {
    const combinedSeries = chartData.map((item) => ({
      x: item.month,
      y: item.calls,
      revenue: item.revenue
    }));

    setChartSeries([
      {
        name: 'Calls and Revenue',
        data: combinedSeries
      }
    ]);
  }, [chartData]);

  const options: ApexOptions = {
    series: chartSeries,
    plotOptions: {
      bar: {
        columnWidth: '40%'
      }
    },
    chart: {
      type: 'bar',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 4
    },
    fill: {
      type: 'solid'
    },
    yaxis: {
      labels: {
        style: {
          colors: '#8e8da4'
        },
        offsetX: 0
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    xaxis: {
      type: 'category',
      categories: chartData.map((item) => item.month),
      labels: {
        format: 'dd MMM yyyy'
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      custom: function ({ seriesIndex, dataPointIndex, w }) {
        const dataPoint = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        return `
          <div style="padding: 10px; border:'none'; border-radius: 5px; background-color: #D12288; color: #fff">
            <span >Calls: ${dataPoint.y}</span><br/>
            <span>Revenue: ${dataPoint.revenue.toFixed(2)}</span>
          </div>
        `;
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetX: -10
    }
  };

  const chartOptions = useChart(options);

  const UpdatePermission = (adminUserPermissions ? haveUpdatePermission(PackagePage, adminUserPermissions) : false) || isAdmin;

  const handelFetchPackages = async () => {
    setIsLoading(true);
    if (token.token) {
      const res = await adminCustomerPackagesServices.getCustomerPackages(token.token);
      setPackages(res?.data?.plans);
    }
    setIsLoading(false);
  };

  const handelEditPackages = (item: AdminPackagesRes) => {
    setSelectedPackage(item);
    setOpen(true);
  };

  const handelDeletePackages = (item: AdminPackagesRes) => {
    setSelectedPackage(item);
    setOpenDeleteModal(true);
  };

  const handelDeletePackage = async (id: number) => {
    try {
      if (token.token && id) {
        const res = await adminCustomerPackagesServices.deletePackageById(id, token.token);
        if (res) {
          if (res.code === 200) {
            toast.success('Package Deleted Successfully');
            handelFetchPackages();
          }
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
    setOpenDeleteModal(false);
  };

  const handelClose = () => {
    setOpen(false);
    setSelectedPackage(null);
  };

  const handelGetPackagesReport = async () => {
    try {
      const tempdata = {
        filter: -1,
        date_range: {
          start_date: filters.fromDate,
          end_date: filters.toDate
        }
      };
      if (token.token) {
        const res = await adminCustomerPackagesServices.getPackagesReport(tempdata, filters.offset, filters.pageSize, token.token);
        if (res) {
          setChartData(res?.data?.bar_chart);
          setPackageReport(res?.data?.credits_report);
          setTotalRecords(res?.data?.credits_report?.aggregate?.total_rows);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  const handleChangeFilter = useCallback((value: any) => {
    setFilters(value);
  }, []);

  const handleFilterDurationChange = (duration: string, fromDate: string, toDate: string) => {
    handleChangeFilter({ ...filters, duration, fromDate, toDate, page: 1 });
  };

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

  useEffect(() => {
    handelGetPackagesReport();
    handelFetchPackages();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    handelGetPackagesReport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    if (adminUserPermissions) {
      const isAccessiable = isPageAccessiable(PackagePage, adminUserPermissions) || isAdmin;
      isAccessiable ? '' : router.push('/admin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminUserPermissions, isAdmin]);

  return (
    <MainLayout>
      <PackageMainBox>
        <MainTitleBox>
          <Typography variant="h4" gutterBottom>
            Packages
          </Typography>
          <Box>
            {UpdatePermission && (
              <Button
                size="large"
                variant="text"
                startIcon={<AddBoxIcon />}
                onClick={() => setOpen(true)}
                sx={{ width: '100%', color: 'primary.400' }}
              >
                Add package
              </Button>
            )}
          </Box>
        </MainTitleBox>

        <Packages
          UpdatePermission={UpdatePermission}
          packages={packages}
          handelEditPackages={handelEditPackages}
          handelDeletePackages={handelDeletePackages}
          isLoading={isLoading}
        />

        <ReportFilters
          duration={filters.duration}
          fromDate={filters.fromDate}
          toDate={filters.toDate}
          onFilterDurationChange={handleFilterDurationChange}
        />

        <PackageReportMainBox>
          <PackageReportChartBox>
            <PackageReportCardBox>
              <PackageReportCardPaper>
                <Typography variant="h5" sx={{ paddingLeft: '20px' }}>
                  Calls | Revenue
                </Typography>
                <Chart dir="ltr" type="bar" series={chartSeries} options={chartOptions} width="100%" height={500} />
              </PackageReportCardPaper>
            </PackageReportCardBox>
          </PackageReportChartBox>

          <PackageReportListingBox>
            <PackageReportCardBox>
              <PackageReportCardPaper sx={{ padding: 0 }}>
                <TableContainer sx={{ width: '100%' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Credit packs</TableCell>
                        <TableCell sx={{ textAlign: 'center' }}>Total no. sales</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {packageReport && packageReport?.credit_packs?.length ? (
                        packageReport?.credit_packs?.map((item, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 }
                            }}
                          >
                            <TableCell>
                              <PackageReportDetailCell>
                                Package {item?.id} |
                                <Typography variant="body2" fontWeight={500}>
                                  ${item?.credits}
                                </Typography>
                              </PackageReportDetailCell>
                            </TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{item.total_credits_purchased || 0}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={10} sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" fontWeight={500}>
                              Report not found
                            </Typography>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                {packageReport && packageReport?.credit_packs?.length ? (
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
              </PackageReportCardPaper>
            </PackageReportCardBox>
          </PackageReportListingBox>
        </PackageReportMainBox>
      </PackageMainBox>

      <AddEditCustomerPackages
        open={open}
        onClose={handelClose}
        selectedPackages={selectedPackage}
        handelFetchPackages={handelFetchPackages}
      />

      <DeleteModal
        open={openDeleteModal}
        handleClose={() => {
          setOpenDeleteModal(false);
        }}
        handleDeleteClick={() => selectedPackage && handelDeletePackage(selectedPackage?.id)}
      />
    </MainLayout>
  );
}

export default CustomerPackagesContainer;
