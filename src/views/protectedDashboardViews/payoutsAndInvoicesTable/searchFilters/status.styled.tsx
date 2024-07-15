import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StatusBoxContainer = styled(Typography)(({ theme }) => ({
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '120px'
}));
