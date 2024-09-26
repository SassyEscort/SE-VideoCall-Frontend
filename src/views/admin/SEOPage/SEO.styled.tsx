import { DialogContent, DialogTitle, Stack } from '@mui/material';
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
