import Popover from '@mui/material/Popover';
import { styled } from '@mui/system';
import DialogContent from '@mui/material/DialogContent';

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
