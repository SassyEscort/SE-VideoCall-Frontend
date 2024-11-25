import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
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

export const DialogContainer = styled(DialogTitle)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));
