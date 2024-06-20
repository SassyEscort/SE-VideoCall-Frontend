import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

const StyledChip = styled(Chip)(({ theme }) => ({
  letterSpacing: theme.spacing(0.02),
  lineHeight: theme.spacing(2.25),
  fontWeight: 500,
  fontSize: '12px',

  '&.MuiChip-outlined': {
    border: '1px solid'
  },
  '&.MuiChip-sizeMedium': {
    fontSize: '14px',
    fontWeight: 400
  }
}));

export default StyledChip;
