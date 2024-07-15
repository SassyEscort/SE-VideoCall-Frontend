import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import UINewTypography from 'components/UIComponents/UINewTypography';
import InvoiceDownloadV2 from './InvoiceDownloadV2';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { invoiceDataType } from '../billingTable/PurchaseInvoiceTableBody';

const InvoiceModalV2 = ({ open, onClose, invoiceData }: { open: boolean; onClose: () => void; invoiceData: invoiceDataType }) => {
  const generatePDF = () => {
    const id = 'html-content';
    const containerId = 'invoice-image-container';
    const footerId = 'footer-container';
    const dividerId = 'divider-container';

    const element = document.getElementById(id);
    const imgContainer = document.getElementById(containerId);
    const footerContainer = document.getElementById(footerId);
    const dividerContainer = document.getElementById(dividerId);

    if (element && imgContainer && footerContainer && dividerContainer) {
      element.style.width = '552px';
      imgContainer.style.paddingTop = '150px';
      footerContainer.style.flexDirection = 'row';
      dividerContainer.style.display = 'flex';

      const pdf = new jsPDF('p', 'mm', 'a4');
      html2canvas(element, {
        width: element.clientWidth,
        height: element.clientHeight,
        scale: 3
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', 0.7);
        pdf.addImage(imgData, 'JPEG', 10, 0, 190, 298);
        pdf.save('invoice.pdf');
        imgContainer.style.paddingTop = '80px';
        element.style.width = '100%';
        footerContainer.style.flexDirection = 'column';
        dividerContainer.style.display = 'none';
      });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: { backgroundColor: 'white' }
      }}
    >
      <DialogTitle
        id="responsive-modal-title"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <UINewTypography variant="subtitle" color="secondary.500">
          Invoice Report
        </UINewTypography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ px: 0 }}>
        <InvoiceDownloadV2 invoiceData={invoiceData} />

        <Box pt={2} display="flex" alignItems="center" justifyContent="center">
          <UIThemeButton size="small" variant="contained" onClick={() => generatePDF()}>
            <UINewTypography variant="bodyBold">Download Invoice</UINewTypography>
          </UIThemeButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default InvoiceModalV2;
