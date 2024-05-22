import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

export const UIStyledFormLabel = styled(FormControlLabel)(({ theme }) => ({
  width: '100%',
  minWidth: '189px',
  minHeight: '46px',
  borderRadius: '8px',
  padding: '10px 12px 10px 12px',
  marginLeft: '0px !important',
  marginRight: '0px !important',
  '& .MuiSvgIcon-root': {
    display: 'none'
  }
}));
