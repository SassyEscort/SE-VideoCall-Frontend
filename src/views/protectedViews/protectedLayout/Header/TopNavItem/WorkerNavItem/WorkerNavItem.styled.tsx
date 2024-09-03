import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const WorkerMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3)
  },
  '@media (max-width: 320px)': {
    gap: theme.spacing(2)
  }
}));
