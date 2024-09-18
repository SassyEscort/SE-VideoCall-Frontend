import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Circle from '@mui/icons-material/Circle';
import { ApexOptions } from 'apexcharts';
import max from 'lodash/max';
import min from 'lodash/min';
import moment, { Moment } from 'moment';
import UINewTypography from 'components/UIComponents/UINewTypography';
import useChart from 'components/UIComponents/Chart/useChart';
import Chart from 'components/UIComponents/Chart';
import { ChartSeriesType } from './types';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelEarningHistoryService } from 'services/modelEarningHistory/modelEarningHistory.services';
import { CallTypeModel } from 'services/modelEarningHistory/typs';
import { FormattedMessage } from 'react-intl';
import { CircleMainBox } from './EarningOverview.styled';

const Earnings = ({ fromDate, toDate }: { fromDate: Moment | null; toDate: Moment | null }) => {
  const [chartData, setChartData] = useState([] as ChartSeriesType[]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [modelDetails, setModelDetails] = useState<CallTypeModel>();
  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    const modelDetails = async () => {
      const modelData = await ModelEarningHistoryService.getEarningChartDetails(token.token, {
        start_date: fromDate ? fromDate.format('YYYY-MM-DD') : '',
        end_date: toDate ? toDate.format('YYYY-MM-DD') : ''
      });
      setModelDetails(modelData.data);
    };
    if (token.token) {
      modelDetails();
    }
  }, [fromDate, toDate, token.token]);

  const options: ApexOptions = {
    series: chartData,
    plotOptions: {
      bar: {
        columnWidth: '16%'
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
      type: chartData.map((i) => i.fill)
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
      type: 'datetime',
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      labels: {
        format: undefined,
        formatter: undefined,
        datetimeFormatter: {
          year: 'yyyy',
          month: "MMM 'yy",
          day: 'dd MMM',
          hour: 'HH:mm'
        }
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => {
          if (typeof value !== 'undefined') {
            return `${value}`;
          }
          return value;
        }
      },
      x: {
        format: 'dd MMM yyyy'
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetX: -10
    }
  };

  const chartOptions = useChart(options);

  useEffect(() => {
    const creditDataDates =
      modelDetails?.calls && modelDetails?.calls?.length ? modelDetails?.calls?.map((item) => item.total_minutes) : ([] as string[]);

    const allDates = [...creditDataDates];
    const uniqueDates = Array.from(new Set(allDates)).sort();

    moment(min(uniqueDates)).unix() * 1000;
    moment(max(uniqueDates)).unix() * 1000;
  }, [modelDetails?.calls]);

  useEffect(() => {
    const creditsSeriesData = modelDetails?.calls?.map((crData) => [moment(crData.total_minutes).unix() * 1000, crData.minutes]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const series: any = [];

    if (creditsSeriesData?.length) {
      series.push({
        name: `Earnings`,
        type: 'bar',
        fill: 'gradient',
        data: creditsSeriesData || ([] as number[][])
      });
    }

    setChartData(series);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelDetails?.calls]);

  return (
    <>
      <UINewTypography variant="buttonLargeBold" lineHeight="160%">
        <FormattedMessage id="TotalCallTime" />
      </UINewTypography>

      <UINewTypography variant="h3">{modelDetails?.total_minutes?.toFixed(2) ?? 0}</UINewTypography>

      <Box>
        <Chart dir="ltr" type="bar" series={chartData} options={chartOptions} width="100%" height={243} />
      </Box>
      <CircleMainBox>
        <Circle style={{ color: '#D12288', width: '9px', height: '9px' }} />
        <UINewTypography variant="captionLargeBold">
          <FormattedMessage id="EarningsIn" />
        </UINewTypography>
      </CircleMainBox>
    </>
  );
};

export default Earnings;
