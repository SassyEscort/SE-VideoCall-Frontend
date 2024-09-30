import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Box from '@mui/material/Box';
import { NewStatusBox } from './statusDetails';
import { FormattedMessage } from 'react-intl';
import InvoiceModalV2 from '../InvoicePage/InvoiceModalV2';
import moment from 'moment';
import { useState } from 'react';
import { ModelPastPayoutDetailRes } from 'services/payout/types';
import { FirstBox, SecondBox, TableCellMain, TableRowMain, UINewTypographyDownload } from './PurchaseInvoiceTableBody.styled';

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
      {modelPayoutList?.data?.payout_details?.map((item) => (
        <TableRowMain key={item.id}>
          <TableCellMain align="left">
            <FirstBox>
              <Box component="img" src="/images/icons/bank-icon.svg" alt="bank_icon" />
              <SecondBox>
                <UINewTypography variant="buttonLargeMenu" sx={{ whiteSpace: 'nowrap', color: 'text.secondary' }}>
                  {item?.bank_name}
                </UINewTypography>
                <UINewTypography variant="captionLarge" sx={{ whiteSpace: 'nowrap', color: 'secondary.200' }}>
                  **** **** **43 3214
                </UINewTypography>
              </SecondBox>
            </FirstBox>
          </TableCellMain>
          <TableCellMain align="center">
            <UINewTypography variant="bodyRegular" color="text.secondary" fontWeight="700">
              $ {item.amount}
            </UINewTypography>
          </TableCellMain>
          <TableCellMain>
            <UINewTypography
              variant="buttonLargeMenu"
              sx={{
                textWrap: 'nowrap',
                color: 'text.secondary'
              }}
            >
              {moment(item?.created_at).format('DD MMMM YYYY')}
            </UINewTypography>
          </TableCellMain>
          <TableCellMain align="center">
            <NewStatusBox status={item?.state}>
              <UINewTypography
                variant="captionLarge"
                color={
                  item.state === 'Pending'
                    ? '#FFE500'
                    : item.state === 'Approved'
                      ? '#79E028'
                      : item.state === 'Rejected'
                        ? '#FF5959'
                        : '#FFF'
                }
              >
                {item.state === 'Pending' ? (
                  <FormattedMessage id="Pending" />
                ) : item.state === 'Approved' ? (
                  <FormattedMessage id="Completed" />
                ) : item.state === 'Rejected' ? (
                  <FormattedMessage id="Cancelled" />
                ) : (
                  '-'
                )}
              </UINewTypography>
            </NewStatusBox>
          </TableCellMain>
          <TableCellMain align="center">
            {item?.state === 'Approved' && (
              <Button onClick={() => handleOpenModal(item)}>
                <UINewTypographyDownload>
                  <FormattedMessage id="Download" />
                </UINewTypographyDownload>
              </Button>
            )}
          </TableCellMain>
          <InvoiceModalV2 invoiceData={invoiceData} open={modalOpen} onClose={handleCloseModal} />
        </TableRowMain>
      ))}
    </TableBody>
  );
};

export default PurchaseInvoiceTableBodyV2;
