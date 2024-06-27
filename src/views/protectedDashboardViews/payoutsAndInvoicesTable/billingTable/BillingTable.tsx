import Table from '@mui/material/Table';
import InvoiceTableHeader from './InvoiceTableHeader';
import PurchaseInvoiceTableBodyV2 from './PurchaseInvoiceTableBody';
import { ModelPastPayoutDetailRes } from 'services/payout/types';
import { TableCell, TableRow } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { NotFoundBox, StyledTableContainer } from './BillingTable.styled';

const BillingTable = ({ modelPayoutList }: { modelPayoutList: ModelPastPayoutDetailRes }) => {
  return (
    <>
      <StyledTableContainer>
        <Table>
          <InvoiceTableHeader />
          {modelPayoutList?.data?.payout_details.length > 0 ? (
            <PurchaseInvoiceTableBodyV2 modelPayoutList={modelPayoutList as ModelPastPayoutDetailRes} />
          ) : (
            <TableRow sx={{ border: 'none' }}>
              <TableCell colSpan={7} sx={{ border: 'none' }}>
                <NotFoundBox>
                  <UINewTypography variant="buttonLargeMenu">Payout Not Found</UINewTypography>
                </NotFoundBox>
              </TableCell>
            </TableRow>
          )}
        </Table>
      </StyledTableContainer>
    </>
  );
};

export default BillingTable;
