import { Box, styled, TableRow } from '@mui/material';

export const LoderBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2)
}));

export const TableRowContainer = styled(TableRow)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center'
}));
