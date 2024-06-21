import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import InvoiceTableHeader from './InvoiceTableHeader';
import PurchaseInvoiceTableBodyV2 from './PurchaseInvoiceTableBody';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { CircularProgress, TableCell, TableRow } from '@mui/material';
import { PayoutService } from 'services/payout/payout.service';
import { ModelPastPayoutDetailRes } from 'services/payout/types';
import { BillingLoadingBox } from './BillingTable.styled';

export type PaginationType = {
  page: number;
  offset: number;
  pageSize: number;
};

const BillingTable = () => {
  const [modelPayoutList, setModelPayoutList] = useState<ModelPastPayoutDetailRes>();
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    page: 0,
    pageSize: 10,
    offset: 0
  });

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data && token) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchModelPayout = async () => {
      try {
        const ModelPayoutListObject = {
          limit: filters.pageSize,
          offset: filters.offset
        };
        if (token.token) {
          setIsLoading(true);
          const data = await PayoutService.modelPastPayoutList(ModelPayoutListObject, token.token);
          if (data) {
            setModelPayoutList(data);
          }
          if (data.code === 200) {
            setIsLoading(false);
          }
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };

    fetchModelPayout();
  }, [token.token, token.id, filters]);
  const handleChangeFilter = useCallback((value: PaginationType) => {
    setFilters(value);
  }, []);
  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      const offset = (value - 1) * filters.pageSize;
      handleChangeFilter({ ...filters, page: value, offset: offset });
    },
    [filters, handleChangeFilter]
  );
  return (
    <>
      <>
        <TableContainer sx={{ pb: 4, '& th': { py: 1 }, '& td': { py: 1.25 } }}>
          <Table>
            <InvoiceTableHeader />
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={10}>
                  <BillingLoadingBox>
                    <CircularProgress />
                  </BillingLoadingBox>
                </TableCell>
              </TableRow>
            ) : (
              <PurchaseInvoiceTableBodyV2 modelPayoutList={modelPayoutList as ModelPastPayoutDetailRes} />
            )}
          </Table>
        </TableContainer>
      </>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <UITheme2Pagination
          page={filters.page}
          count={modelPayoutList ? Math.ceil(modelPayoutList.data.aggregate.total_rows / filters.pageSize) : 1}
          onChange={handleChangePage}
        />
      </Box>
    </>
  );
};

export default BillingTable;
