import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const FilterDropdownBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  width: '100%'
}));

export const EarningHistoryMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(0.5)
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '957px'
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '730px'
  },
  [theme.breakpoints.only('sm')]: {
    maxWidth: '730px'
  }
}));

export const EarningHistorySubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '28px',
  width: '100%',
  height: '100%',
  maxHeight: '40px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));

export const EarningHistoryFirstBoxContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '33px'
}));

export const EarningHistorySecBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5.5)
}));

export const EarningHistoryThirdBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(1),
    width: '100%'
  }
}));

export const EarningHistoryLastBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '741px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '70px'
  }
}));

export const EarningHistoryPagination = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: theme.spacing(3.25)
}));
export const PaginationBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

export const DividerContainer = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.text.disabled,
  height: '40px',
  alignItems: 'center'
}));

export const DataNotBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: theme.spacing(2)
}));

export const EarningsHistoryText = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '38px',
  lineHeight: '47.5px',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    marginTop: theme.spacing(1.375)
  }
}));
