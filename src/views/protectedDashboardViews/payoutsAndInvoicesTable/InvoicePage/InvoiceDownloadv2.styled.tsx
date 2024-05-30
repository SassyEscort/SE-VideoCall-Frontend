import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

export const MainInvoiceDownload = styled(Box)(({ theme }) => ({
  background: 'common.white',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: 0,
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  }
}));

export const HeaderInvoiceDownload = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
}));

export const BoxInvoiceDownload = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  width: '150px',
  height: '100%',
  paddingRight: theme.spacing(2)
}));

export const FirstBoxInvoiceDownload = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(0.75)
}));

export const SecondBoxInvoiceDownload = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(0.75),
  width: '150px',
  height: '100%',
  paddingLeft: theme.spacing(2)
}));

export const SecondSubBoxInvoiceDownload = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(0.25)
}));

export const SecondPartBoxInvoiceDownload = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between'
}));

export const SecondPartFirstBoxInvoiceDownload = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch'
}));

export const ImgBoxInvoiceDownload = styled(Box)(() => ({
  display: 'flex',
  width: '100% !important',
  maxWidth: '100% !important',
  paddingBottom: 106,
  paddingTop: 78,
  height: '100%',
  paddingRight: 78
}));

export const ImgContainerBoxInvoiceDownload = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse'
  },
  [theme.breakpoints.only('sm')]: {
    flexDirection: 'row'
  },
  justifyContent: 'space-between',
  width: '100%'
}));

export const LeftTableInvoiceDownload = styled(TableCell)(({ theme }) => ({
  textAlign: 'left',
  borderBottom: '1.5px solid',
  borderColor: theme.palette.primary[800],
  padding: '10px 0px'
}));

export const RightTableInvoiceDownload = styled(TableCell)(({ theme }) => ({
  textAlign: 'right',
  borderBottom: '1.5px solid',
  borderColor: theme.palette.primary[800],
  padding: '10px 0px'
}));

export const LastDataTableInvoiceDownload = styled(TableCell)(({ theme }) => ({
  textAlign: 'right',
  borderBottom: '1.5px solid',
  borderColor: theme.palette.primary[800],
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: 0
}));

export const LastTopDataTableInvoiceDownload = styled(TableCell)(({ theme }) => ({
  textAlign: 'left',
  borderBottom: '1.5px solid',
  borderColor: theme.palette.primary[800],
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 0
}));

export const DividerTableInvoiceDownload = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.common.black,
  height: 12,
  alignSelf: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex'
  }
}));

export const FooterInvoiceDownload = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-end'
  },
  [theme.breakpoints.only('sm')]: {
    alignItems: 'center'
  },
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  [theme.breakpoints.only('sm')]: {
    flexDirection: 'row'
  },
  [theme.breakpoints.only('xs')]: {
    textAlign: 'center',
    gap: theme.spacing(1)
  },
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4)
}));

export const InvoiceDownloadMainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const InvoiceDownloadMainBox = styled(Box)(() => ({
  paddingTop: '32px',
  paddingBottom: '40px'
}));

export const InvoiceDownloadFirstTbl = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center'
}));

export const InvoiceDownloadLeftCell = styled(TableCell)(() => ({
  textAlign: 'left',
  paddingTop: 0,
  paddingBottom: 10,
  paddingLeft: 0,
  paddingRight: 0
}));

export const InvoiceDownloadRightCell = styled(TableCell)(() => ({
  textAlign: 'right',
  paddingTop: 0,
  paddingBottom: 10,
  paddingLeft: 0,
  paddingRight: 0
}));

export const InvoiceDownloadCreditCell = styled(TableCell)(() => ({
  paddingTop: 16,
  paddingBottom: 10,
  paddingLeft: 0,
  paddingRight: 0
}));

export const InvoiceDownloadAmountCell = styled(TableCell)(() => ({
  padding: 0,
  textAlign: 'right'
}));

export const InvoiceDownloadLeftSCell = styled(TableCell)(() => ({
  textAlign: 'left',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 0,
  paddingRight: 0
}));

export const InvoiceDownloadRightSCell = styled(TableCell)(() => ({
  textAlign: 'right',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 0,
  paddingRight: 0
}));
