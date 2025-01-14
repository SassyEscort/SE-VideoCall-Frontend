import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const TableRowMain = styled(TableRow)(({ theme }) => ({
  '& .MuiTableCell-root': {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

export const TableCellMain = styled(TableCell)(({ theme }) => ({
  borderBottom: '1px solid',
  borderColor: theme.palette.primary['700']
}));

export const FirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

export const SecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const TableHeadMain = styled(TableHead)(() => ({
  '& .MuiTableCell-root': {
    border: 'none'
  }
}));

export const UINewTypographyDownload = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '19.2px',
  color: theme.palette.primary[400]
}));
