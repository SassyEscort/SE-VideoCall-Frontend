import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

export const StyledRoot = styled(Toolbar)(({ theme }) => ({
  height: 40,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 !important',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
  [theme.breakpoints.only('xs')]: {
    width: '100%',
    minWidth: '320px'
  }
}));
