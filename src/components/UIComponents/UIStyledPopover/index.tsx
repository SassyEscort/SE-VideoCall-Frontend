import Popover from '@mui/material/Popover';
import { styled } from '@mui/material/styles';

const UIStyledPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '12px',
    backgroundColor: '#1E0815',
    px: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  '& .MuiList-root': { py: 0.5 },
  '& .MuiMenuItem-root': {
    px: 0,
    py: 1.5,
    '&:not(:last-child)': { borderBottom: '1px solid #232027' }
  }
}));

export default UIStyledPopover;
