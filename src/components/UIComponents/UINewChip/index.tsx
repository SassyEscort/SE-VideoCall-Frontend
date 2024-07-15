import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

const UINewChip = styled(Chip)(({ theme }) => ({
  letterSpacing: theme.spacing(0.02),
  lineHeight: theme.spacing(2.45),
  fontWeight: 500,
  fontSize: '14px',
  height: '36px',
  backgroundColor: '#290F1E',
  borderRadius: '4px',
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),

  '& .MuiChip-icon': {
    margin: 0
  },
  '& .MuiChip-label': {
    padding: '0px'
  },

  '&.MuiChip-outlined': {
    border: '1px solid',
    borderColor: '#232027',
    backgroundColor: 'transparent'
  },
  '&.MuiChip-sizeMedium': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    fontSize: '14px',
    fontWeight: 400
  }
}));

export default UINewChip;
