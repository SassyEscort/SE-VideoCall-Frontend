import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';

export const PaginationBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

export const NotFoundBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2)
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  paddingBottom: theme.spacing(4),
  '& th': {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  '& td': {
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25)
  }
}));
