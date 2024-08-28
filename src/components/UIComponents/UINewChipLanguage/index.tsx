import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

const UINewChipLanguage = styled(Chip)(({ theme }) => ({
  letterSpacing: theme.spacing(0.02),
  lineHeight: theme.spacing(2.45),
  fontWeight: 500,
  fontSize: '14px',
  width: 'auto',
  height: 'auto',
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
    padding: '0px',
    whiteSpace: 'normal'
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
  },
  [theme.breakpoints.down('md')]: {
    width: 'auto',
    height: 'auto'
  },
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    height: 'auto'
  }
}));

export default UINewChipLanguage;
