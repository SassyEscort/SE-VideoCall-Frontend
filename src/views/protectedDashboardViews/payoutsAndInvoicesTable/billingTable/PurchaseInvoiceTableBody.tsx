import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Box from '@mui/material/Box';
import { StatusBox } from './statusDetails';
import { sampleInvoiceType } from './BillingTable';
import { FormattedMessage } from 'react-intl';
import InvoiceModalV2 from '../InvoicePage/InvoiceModalV2';
import { useState } from 'react';

const PurchaseInvoiceTableBodyV2 = ({ sampleInvoices }: { sampleInvoices: sampleInvoiceType[] }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  return (
    <TableBody>
      {sampleInvoices.map((invoice) => (
        <TableRow key={invoice.id}>
          <TableCell>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Box component="img" src="/images/icons/bank-icon.svg" />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <UINewTypography variant="bodyRegular" sx={{ whiteSpace: 'nowrap' }}>
                  {invoice.bankName}
                </UINewTypography>
                <UINewTypography variant="bodyRegular" sx={{ whiteSpace: 'nowrap' }}>
                  {invoice.accountNumber}
                </UINewTypography>
              </Box>
            </Box>
          </TableCell>
          <TableCell>
            <UINewTypography variant="bodyRegular">${invoice.amount}</UINewTypography>
          </TableCell>
          <TableCell>
            <UINewTypography variant="bodyRegular">{invoice.date}</UINewTypography>
          </TableCell>
          <TableCell>
            <StatusBox status={invoice.status}>
              <UINewTypography
                variant="captionLarge"
                color={
                  invoice.status === 'Pending'
                    ? '#FFE500'
                    : invoice.status === 'Completed'
                      ? '#79E028'
                      : invoice.status === 'Cancelled'
                        ? '#FF5959'
                        : '#FFF'
                }
              >
                {invoice.status}
              </UINewTypography>
            </StatusBox>
          </TableCell>
          <TableCell>
            <Button onClick={handleOpenModal}>
              <UINewTypography variant="buttonLargeMenu">
                <FormattedMessage id="Download" />
              </UINewTypography>
            </Button>
          </TableCell>
          <InvoiceModalV2 sampleInvoices={sampleInvoices} open={modalOpen} onClose={handleCloseModal} />
        </TableRow>
      ))}
    </TableBody>
  );
};

export default PurchaseInvoiceTableBodyV2;
