import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Box from '@mui/material/Box';
import { StatusBox } from './statusDetails';
import { FormattedMessage } from 'react-intl';
import InvoiceModalV2 from '../InvoicePage/InvoiceModalV2';
import moment from 'moment';
import { useState } from 'react';
import { ModelPastPayoutDetailRes } from 'services/payout/types';

export type invoiceDataType = {
  map: any;
  payout: any;
  id: number;
  model_id: number;
  amount: number;
  state: string;
  created_at: string;
  is_active: number;
  name: string;
  email: string;
  bank_name: string;
};

const PurchaseInvoiceTableBodyV2 = ({ modelPayoutList }: { modelPayoutList: ModelPastPayoutDetailRes }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [invoiceData, setInvoiceData] = useState({} as invoiceDataType);

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenModal = (item: invoiceDataType) => {
    setInvoiceData(item);
    setModalOpen(true);
  };

  return (
    <TableBody>
      {modelPayoutList?.data?.payout_details.map((item) => (
        <TableRow key={item.id}>
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
                  {item.bank_name}
                </UINewTypography>
                <UINewTypography variant="bodyRegular" sx={{ whiteSpace: 'nowrap' }}>
                  **** **** **43 3214
                </UINewTypography>
              </Box>
            </Box>
          </TableCell>
          <TableCell>
            <UINewTypography variant="bodyRegular">${item.amount}</UINewTypography>
          </TableCell>
          <TableCell>
            <UINewTypography variant="bodyRegular">{moment(item.created_at).format('DD MMMM YYYY')}</UINewTypography>
          </TableCell>
          <TableCell>
            <StatusBox status={item.state}>
              <UINewTypography
                variant="captionLarge"
                color={
                  item.state === 'Pending'
                    ? '#FFE500'
                    : item.state === 'Completed'
                      ? '#79E028'
                      : item.state === 'Cancelled'
                        ? '#FF5959'
                        : '#FFF'
                }
              >
                {item.state}
              </UINewTypography>
            </StatusBox>
          </TableCell>
          <TableCell>
            <Button onClick={() => handleOpenModal(item)}>
              <UINewTypography variant="buttonLargeMenu">
                <FormattedMessage id="Download" />
              </UINewTypography>
            </Button>
          </TableCell>
          <InvoiceModalV2 invoiceData={invoiceData} open={modalOpen} onClose={handleCloseModal} />
        </TableRow>
      ))}
    </TableBody>
  );
};

export default PurchaseInvoiceTableBodyV2;
