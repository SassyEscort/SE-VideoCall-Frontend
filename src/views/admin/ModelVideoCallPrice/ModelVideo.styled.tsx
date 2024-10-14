import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const DetailsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2)
}));
