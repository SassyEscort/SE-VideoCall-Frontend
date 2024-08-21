import { Divider, Stack, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const FilterDropdownBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(6.125),
  marginTop: '44px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing(6),
    gap: theme.spacing(2)
  }
}));

export const StatusBox = styled(Box)(() => ({
  padding: '4px 12px 4px 20px',
  borderRadius: '48px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  textAlign: 'center',
  height: '100%',
  minHeight: '25px'
}));

export const MainBox = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3)
  }
}));

export const SecondBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(1.375)
  }
}));

export const TypographyBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: theme.spacing(7),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export const TableBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4)
}));

export const StackBox = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.palette.text.primary,
  width: '100%',
  maxWidth: '312px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: '312px'
  }
}));

export const UINewTypographyBox = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '38px',
  lineHeight: '47.5px',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '30px'
  }
}));

export const FilterMainBox = styled(UINewTypography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: theme.spacing(1)
  }
}));

export const FilterSecondBox = styled(UINewTypography)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'flex-start'
  },
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}));

export const ResetMainBox = styled(UINewTypography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

export const TableHederText = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '19.2px',
  color: theme.palette.secondary[200]
}));

export const TypographyBoxTotalOfInvoices = styled(Box)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '17.5px',
  color: theme.palette.text.primary
}));

export const StyledTableRow = styled(TableRow)(() => ({
  border: 'none',
  display: 'flex',
  justifyContent: 'center'
}));

export const DividerContainer = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.text.disabled,
  height: '40px',
  alignItems: 'center'
}));
