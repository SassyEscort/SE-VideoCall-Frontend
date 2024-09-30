import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import {
  BoxInvoiceDownload,
  FirstBoxInvoiceDownload,
  FooterInvoiceDownload,
  HeaderInvoiceDownload,
  ImgBoxInvoiceDownload,
  ImgContainerBoxInvoiceDownload,
  InvoiceDownloadAmountCell,
  InvoiceDownloadCreditCell,
  InvoiceDownloadFirstTbl,
  InvoiceDownloadLeftCell,
  InvoiceDownloadLeftSCell,
  InvoiceDownloadMainBox,
  InvoiceDownloadMainContainer,
  InvoiceDownloadRightCell,
  InvoiceDownloadRightSCell,
  LastDataTableInvoiceDownload,
  LastTopDataTableInvoiceDownload,
  LeftTableInvoiceDownload,
  MainInvoiceDownload,
  RightTableInvoiceDownload,
  SecondBoxInvoiceDownload,
  SecondPartBoxInvoiceDownload,
  SecondPartFirstBoxInvoiceDownload,
  SecondSubBoxInvoiceDownload
} from './InvoiceDownloadv2.styled';
import TableHead from '@mui/material/TableHead';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { formatFullDateWithoutTime } from 'utils/dateAndTime';
import moment from 'moment';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { invoiceDataType } from '../billingTable/PurchaseInvoiceTableBody';

const InvoiceDownloadV2 = ({ invoiceData }: { invoiceData: invoiceDataType }) => {
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <MainInvoiceDownload id="html-content">
      <HeaderInvoiceDownload>
        <InvoiceDownloadMainContainer>
          <UINewTypography variant="MediumBold" color="secondary.500">
            Invoice
          </UINewTypography>
          <UINewTypography variant="SmallText" color="secondary.light">
            SINV-{invoiceData.id}
          </UINewTypography>
        </InvoiceDownloadMainContainer>
        <Box component="img" src="/images/header/headerlogo.png" height={{ xs: 30, sm: 32 }} width={{ sm: 'auto' }} alt="hader_logo" />
      </HeaderInvoiceDownload>
      <InvoiceDownloadMainBox>
        <Divider orientation="horizontal" flexItem sx={{ borderColor: 'secondary.light' }} />
        <InvoiceDownloadFirstTbl>
          <BoxInvoiceDownload>
            <FirstBoxInvoiceDownload>
              <UINewTypography variant="SmallerText" color="secondary.500">
                Issued
              </UINewTypography>
              <UINewTypography variant="SmallerText" color="secondary.light" fontWeight="600">
                {formatFullDateWithoutTime(moment(new Date()).format('YYYY-MM-DD'))}
              </UINewTypography>
            </FirstBoxInvoiceDownload>

            <FirstBoxInvoiceDownload>
              <UINewTypography variant="SmallerText" color="secondary.500">
                Due
              </UINewTypography>
              <UINewTypography variant="SmallerText" fontWeight="600" color="secondary.light">
                Due date
              </UINewTypography>
            </FirstBoxInvoiceDownload>
          </BoxInvoiceDownload>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: 'secondary.light',
              height: '112px'
            }}
          />

          <SecondBoxInvoiceDownload>
            <UINewTypography variant="SmallerText" color="secondary.500">
              Billed To
            </UINewTypography>

            <SecondSubBoxInvoiceDownload>
              <UINewTypography variant="ExtraSmallerText" color="secondary.light">
                Name
              </UINewTypography>
              <UINewTypography variant="SmallerText" fontWeight="400" color="secondary.light">
                Phone Number
              </UINewTypography>
              <UINewTypography variant="SmallerText" fontWeight="400" color="secondary.light">
                Email
              </UINewTypography>
            </SecondSubBoxInvoiceDownload>
          </SecondBoxInvoiceDownload>
        </InvoiceDownloadFirstTbl>
        <Divider orientation="horizontal" flexItem sx={{ borderColor: 'secondary.light' }} />
      </InvoiceDownloadMainBox>
      <SecondPartBoxInvoiceDownload>
        <SecondPartFirstBoxInvoiceDownload>
          <Table>
            <TableHead>
              <TableRow>
                <InvoiceDownloadLeftCell>
                  <UINewTypography variant="ExtraSmallerText" color="secondary.500">
                    Item Descriptions
                  </UINewTypography>
                </InvoiceDownloadLeftCell>
                <InvoiceDownloadRightCell>
                  <UINewTypography variant="ExtraSmallerText" color="secondary.500">
                    RATE
                  </UINewTypography>
                </InvoiceDownloadRightCell>
                <InvoiceDownloadRightCell>
                  <UINewTypography variant="ExtraSmallerText" color="secondary.500">
                    Line Total
                  </UINewTypography>
                </InvoiceDownloadRightCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <InvoiceDownloadCreditCell>
                  <UINewTypography variant="ExtraSmallerText" color="secondary.500">
                    purchase
                  </UINewTypography>
                  <br />
                  <UINewTypography variant="ExtraSmallerText" fontWeight="400" color="secondary.light">
                    Description
                  </UINewTypography>
                </InvoiceDownloadCreditCell>
                <InvoiceDownloadAmountCell>
                  <UINewTypography variant="ExtraSmallerText" fontWeight="500" color="secondary.light">
                    ${invoiceData.amount}
                  </UINewTypography>
                </InvoiceDownloadAmountCell>
                <InvoiceDownloadAmountCell>
                  <UINewTypography variant="ExtraSmallerText" fontWeight="500" color="secondary.light">
                    ${invoiceData.amount}
                  </UINewTypography>
                </InvoiceDownloadAmountCell>
              </TableRow>
            </TableBody>
          </Table>

          <ImgContainerBoxInvoiceDownload>
            <ImgBoxInvoiceDownload id="invoice-image-container">
              <Box component="img" src="/images/header/paidInvoiceLayer1.png" alt="paid_invoice_layer" />
            </ImgBoxInvoiceDownload>
            <Table sx={{ height: '100%' }}>
              <TableRow>
                <InvoiceDownloadLeftSCell>
                  <UINewTypography variant="ExtraSmallerText" color="secondary.500">
                    Subtotal
                  </UINewTypography>
                </InvoiceDownloadLeftSCell>
                <InvoiceDownloadRightSCell>
                  <UINewTypography variant="ExtraSmallerText" fontWeight="500" color="secondary.light">
                    ${invoiceData.amount}
                  </UINewTypography>
                </InvoiceDownloadRightSCell>
              </TableRow>
              <TableRow>
                <InvoiceDownloadLeftSCell>
                  <UINewTypography variant="ExtraSmallerText" color="secondary.500">
                    Tax (0%)
                  </UINewTypography>
                </InvoiceDownloadLeftSCell>
                <InvoiceDownloadRightSCell>
                  <UINewTypography variant="ExtraSmallerText" fontWeight="500" color="secondary.light">
                    ${invoiceData.amount}
                  </UINewTypography>
                </InvoiceDownloadRightSCell>
              </TableRow>
              <TableRow>
                <LeftTableInvoiceDownload>
                  <UINewTypography variant="ExtraSmallerText" color="secondary.500">
                    Total
                  </UINewTypography>
                </LeftTableInvoiceDownload>
                <RightTableInvoiceDownload>
                  <UINewTypography variant="ExtraSmallerText" fontWeight="500" color="secondary.light">
                    ${invoiceData.amount}
                  </UINewTypography>
                </RightTableInvoiceDownload>
              </TableRow>

              <TableRow>
                <LastTopDataTableInvoiceDownload>
                  <UINewTypography variant="ExtraSmallerText" fontWeight="700" color="primary.500">
                    AmountDue
                  </UINewTypography>
                </LastTopDataTableInvoiceDownload>
                <LastDataTableInvoiceDownload>
                  <UINewTypography variant="ExtraSmallerText" fontWeight="700" color="primary.500">
                    ${invoiceData.amount}
                  </UINewTypography>
                </LastDataTableInvoiceDownload>
              </TableRow>
            </Table>
          </ImgContainerBoxInvoiceDownload>
        </SecondPartFirstBoxInvoiceDownload>

        <Divider orientation="horizontal" flexItem sx={{ borderColor: '#D4D3D6' }} />

        <FooterInvoiceDownload id="footer-container">
          <UINewTypography
            variant="captionLargeSemiBold"
            fontWeight="700"
            color="secondary.light"
            sx={{ width: '100%', maxWidth: '225px' }}
          >
            Flirtbate
          </UINewTypography>

          <UINewTypography variant="captionLarge" fontWeight="700" color="secondary.light">
            +31 6 85051045
          </UINewTypography>
          {isSmUp && (
            <Divider
              orientation="vertical"
              id="divider-container"
              flexItem
              sx={{
                borderColor: '#D4D3D6',
                height: '12px'
              }}
            />
          )}
          <UINewTypography variant="captionLarge" fontWeight="700" color="secondary.light">
            contact@sassyescort.com
          </UINewTypography>
        </FooterInvoiceDownload>
      </SecondPartBoxInvoiceDownload>
    </MainInvoiceDownload>
  );
};

export default InvoiceDownloadV2;
