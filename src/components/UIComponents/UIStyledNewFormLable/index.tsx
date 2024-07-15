import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

export const UIStyledNewFormLableContainer = styled(FormControlLabel)(({ theme }) => ({
  width: '188.75px',
  height: '46px',
  m: 0,
  padding: '10px 12px',
  gap: '6px',
  borderRadius: theme.spacing(1),
  border: '1px solid',
  borderColor: theme.palette.primary[700],
  '& .MuiSvgIcon-root': {
    display: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    width: '160px'
  }
}));
