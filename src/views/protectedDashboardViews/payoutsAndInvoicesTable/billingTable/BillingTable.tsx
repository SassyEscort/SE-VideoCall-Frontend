import Table from '@mui/material/Table';
import InvoiceTableHeader from './InvoiceTableHeader';
import PurchaseInvoiceTableBodyV2 from './PurchaseInvoiceTableBody';
import { ModelPastPayoutDetailRes } from 'services/payout/types';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { NotFoundBox, StyledTableContainer } from './BillingTable.styled';
import { FormattedMessage } from 'react-intl';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const BillingTable = ({ modelPayoutList }: { modelPayoutList: ModelPastPayoutDetailRes }) => {
  return (
    <>
      <StyledTableContainer>
        <Table sx={{ minWidth: 650, tableLayout: 'auto' }}>
          <InvoiceTableHeader />
          {modelPayoutList?.data?.payout_details.length > 0 ? (
            <PurchaseInvoiceTableBodyV2 modelPayoutList={modelPayoutList as ModelPastPayoutDetailRes} />
          ) : (
            <TableRow sx={{ border: 'none' }}>
              <TableCell colSpan={7} sx={{ border: 'none' }}>
                <NotFoundBox>
                  <UINewTypography variant="buttonLargeMenu">
                    <FormattedMessage id="DataNotFound" />
                  </UINewTypography>
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
