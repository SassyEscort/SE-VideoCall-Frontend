import { Box } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import Popover from '@mui/material/Popover';
import { styled } from '@mui/system';

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

export const MainScreenshotBox = styled(Box)(() => ({
  display: 'flex',
  padding: '24px',
  gap: '24px',
  backgroundColor: '#fff'
}));

export const MainScreenshotBoxChild = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fafafa',
  overflowY: 'auto',
  maxHeight: '400px'
}));

export const MainScreenshotBoxImage = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  gap: '16px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fafafa',
  maxHeight: '400px',
  overflowY: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
}));

export const SelectedImageBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px'
}));
