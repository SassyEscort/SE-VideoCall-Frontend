import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import Stack from '@mui/material/Stack';
import { PaginationSortByOption } from 'components/common/CustomPaginations/type';
import PaginationSearch from 'components/common/CustomPaginations/PaginationSearch';
import { StyledSelectInputLabel } from 'components/UIComponents/UIStyledSelect';
import { StatusOfPlan } from 'constants/status';

const REPORTS_FILTERS: PaginationSortByOption[] = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'custom', label: 'Custom' }
];

interface WorkersFiltersProps {
  duration: string;
  fromDate: string;
  toDate: string;
  status?: string;
  action?: string;
  // actionsArray?: MultipleOptions[];
  onFilterDurationChange: (duration: string, fromDate: string, toDate: string) => void;
  handleChangeSearch?: (val: string) => void;
  handleChangeStatus?: (val: string) => void;
  handleChangeAction?: (val: string) => void;
}

export default function ReportFilters({
  duration,
  fromDate,
  toDate,
  status,
  action,
  onFilterDurationChange,
  handleChangeStatus,
  handleChangeAction,
  handleChangeSearch
}: WorkersFiltersProps) {
  const [dates, setDates] = useState({
    dtFrom: moment().subtract(1, 'month') as moment.Moment | null,
    dtTo: moment() as moment.Moment | null
  });

  const calculateDate = (val: string) => {
    const toDate = moment().format('YYYY/MM/DD');
    if (val === 'day') {
      const fromDate = moment().format('YYYY/MM/DD');
      return { fromDate, toDate };
    } else if (val === 'month') {
      const fromDate = moment().subtract(1, 'month').format('YYYY/MM/DD');
      return { fromDate, toDate };
    } else if (val === 'week') {
      const fromDate = moment().subtract(1, 'week').format('YYYY/MM/DD');
      return { fromDate, toDate };
    } else {
      const fromDate = moment().subtract(1, 'month').format('YYYY/MM/DD');
      return { fromDate, toDate };
    }
  };

  const handleChangeDuration = (val: string) => {
    if (val === 'custom') {
      const fromDate = moment().subtract(1, 'month').format('YYYY/MM/DD');
      const toDate = moment().format('YYYY/MM/DD');
      onFilterDurationChange(val, fromDate, toDate);

      setDates({
        dtFrom: moment().subtract(1, 'month'),
        dtTo: moment()
      });
    } else {
      const { fromDate, toDate } = calculateDate(val);
      onFilterDurationChange(val, fromDate, toDate);
    }
  };

  const handleFromDateChange = (value: moment.Moment | null) => {
    if (value?.isValid()) {
      onFilterDurationChange(duration, value?.format('YYYY/MM/DD') ?? '', toDate);
    }
  };

  const handleToDateChange = (value: moment.Moment | null) => {
    if (value?.isValid()) {
      onFilterDurationChange(duration, fromDate, value?.format('YYYY/MM/DD') ?? '');
    }
  };

  return (
    <>
      <Box width="100%">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Grid container sx={{ display: 'flex', alignItems: 'center' }} spacing={2}>
            {handleChangeSearch && (
              <Grid item xs={12} sm={duration === 'custom' ? 2.4 : 4}>
                <PaginationSearch placeholder="Search..." handleChangeSearch={handleChangeSearch} />
              </Grid>
            )}

            <Grid item xs={12} sm={duration === 'custom' ? 2.4 : 4}>
              <FormControl fullWidth>
                <InputLabel id="filter-duration-label">Duration</InputLabel>
                <Select
                  labelId="filter-duration-label"
                  value={duration}
                  label="Duration"
                  onChange={(e) => handleChangeDuration(e.target.value)}
                  sx={{
                    '@media (min-width: 600px)': {
                      width: 'auto'
                    }
                  }}
                >
                  {REPORTS_FILTERS?.map((item) => (
                    <MenuItem value={item?.value} key={item?.value}>
                      {item?.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {duration === 'custom' && (
              <>
                <Grid item xs={12} sm={duration === 'custom' ? 2.4 : 4}>
                  <DatePicker
                    label="From date"
                    format="DD-MM-YYYY"
                    value={dates.dtFrom}
                    onChange={handleFromDateChange}
                    sx={{
                      width: '100%',
                      '@media (min-width: 600px)': {
                        width: 'auto'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={duration === 'custom' ? 2.4 : 4}>
                  <DatePicker
                    label="To date"
                    format="DD-MM-YYYY"
                    value={dates.dtTo}
                    onChange={handleToDateChange}
                    sx={{
                      width: '100%',
                      '@media (min-width: 600px)': {
                        width: 'auto'
                      }
                    }}
                  />
                </Grid>
              </>
            )}

            {handleChangeStatus && (
              <Grid item xs={12} sm={duration === 'custom' ? 2.4 : 4}>
                <FormControl fullWidth>
                  <StyledSelectInputLabel sx={{ backgroundColor: 'common.white' }}>Status</StyledSelectInputLabel>
                  <Select
                    name="status"
                    labelId="status"
                    label="Status"
                    value={status}
                    onChange={(e) => handleChangeStatus(e.target.value as string)}
                    sx={{
                      width: '100%',
                      '@media (min-width: 600px)': {
                        width: 'auto'
                      }
                    }}
                  >
                    {StatusOfPlan?.map((stat) => (
                      <MenuItem key={stat?.id} value={stat?.name}>
                        {stat?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            )}

            {handleChangeAction && (
              <Grid item xs={12} sm={duration === 'custom' ? 2.4 : 4}>
                <FormControl fullWidth>
                  <StyledSelectInputLabel sx={{ backgroundColor: 'common.white' }}>Actions</StyledSelectInputLabel>
                  <Select
                    name="action"
                    labelId="action"
                    label="Actions"
                    value={action}
                    onChange={(e) => handleChangeAction(e.target.value as string)}
                    sx={{
                      width: '100%',
                      '@media (min-width: 600px)': {
                        width: 'auto'
                      }
                    }}
                  ></Select>
                </FormControl>
              </Grid>
            )}
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
