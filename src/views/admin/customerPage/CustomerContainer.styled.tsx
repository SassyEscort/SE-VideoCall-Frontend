import { DialogContent, DialogTitle, Stack, TableCell } from '@mui/material';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import { styled } from '@mui/system';

export const ModelActionPopover = styled(Popover)(({ theme }) => ({
  '& .MuiMenuItem-root': {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.75),
    typography: 'body2'
  },
  '& .MuiPaper-root': {
    width: 170,
    padding: theme.spacing(1)
  }
}));

export const FilterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: theme.spacing(1.875),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));
export const SortBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'end',
  width: '100%'
}));
export const NotFoundBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2)
}));

export const StackBoxContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1)
}));

export const StackFirstBoxContainer = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row'
  }
}));

export const DetailsDialogContent = styled(DialogContent)(() => ({
  '& td': {
    minWidth: '130px',
    wordBreak: 'break-all',
    verticalAlign: 'top'
  },
  '& th': {
    textAlign: 'left'
  }
}));

export const StyledPopover = styled(Popover)(({ theme }) => ({
  '& .MuiMenuItem-root': {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.75),
    typography: 'body2'
  },
  '& .MuiPaper-root': {
    width: 170,
    padding: theme.spacing(1)
  }
}));

export const DialogContainer = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

export const UserTitleText = styled(TableCell)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 800,
  lineHeight: '19.12px',
  color: '#202224',
  whiteSpace: 'nowrap'
}));

export const UserDescriptionText = styled(TableCell)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '19.12px',
  color: '#202224',
  whiteSpace: 'nowrap'
}));

export const FilterBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '465px',
  border: '1px solid #D5D5D5',
  borderRadius: '10px',
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));

export const CustomerMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));
