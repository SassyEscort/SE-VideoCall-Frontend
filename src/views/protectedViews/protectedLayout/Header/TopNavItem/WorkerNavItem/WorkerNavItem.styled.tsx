import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const WorkerMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(5)
  }
}));
