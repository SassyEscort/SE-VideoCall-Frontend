import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import { gaEventTrigger } from 'utils/analytics';
import { useAuthContext } from 'contexts/AuthContext';
import { getCookie } from 'cookies-next';

export type TablePagerProps = {
  page: number;
  rowsPerPage: number;
  totalRecords: number;
  handleChangePage: (val: number) => void;
  handleChangePageSize: (val: number) => void;
};

const TablePager = ({ page, rowsPerPage, handleChangePage, handleChangePageSize, totalRecords }: TablePagerProps) => {
  const pagerCount = Math.ceil(totalRecords / rowsPerPage);
  const { user } = useAuthContext();
  const providerData = JSON.parse(user || '{}');

  const handlepagerGAEvent = (pageNumber: number) => {
    const group = getCookie('ab-group');
    let versionDetails = (group && JSON.parse(group.toString())) || {};
    let data: any = {
      userLoginStatus: providerData?.token ? 'yes' : 'no',
      pageNumber: pageNumber || 1
    };
    if (versionDetails?.experiment) data['version'] = `${versionDetails?.experiment?.name}_${versionDetails?.variation?.name}`;
    if (providerData?.customer_id) data['userid'] = String(providerData?.customer_id);

    gaEventTrigger('pagination-click', {
      action: 'pagination-click',
      category: 'Button',
      label: 'Page number click',
      value: JSON.stringify(data)
    });
  };

  return (
    <Box
      sx={{
        justifyContent: 'right',
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}
    >
      <Pagination
        count={pagerCount || 1}
        onChange={(e, val) => {
          handlepagerGAEvent(val);
          handleChangePage(val);
        }}
        page={page}
      />
      <Box display="flex" alignItems="center" gap={1}>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Rows per page:</Typography>
        <Select value={rowsPerPage} onChange={(e) => handleChangePageSize(e.target.value as number)} size="small">
          {[10, 25, 50, 100]?.map((row, index) => (
            <MenuItem key={index} value={row}>
              {row}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default TablePager;
