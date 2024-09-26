import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PaginationSearch from 'components/common/CustomPaginations/PaginationSearch';

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
  return (
    <>
      <Box width="100%">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Grid container sx={{ display: 'flex', alignItems: 'center' }} spacing={2}>
            {handleChangeSearch && (
              <Grid item xs={12} sm={duration === 'custom' ? 2.4 : 4}>
                <PaginationSearch placeholder="Search" handleChangeSearch={handleChangeSearch} />
              </Grid>
            )}
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
