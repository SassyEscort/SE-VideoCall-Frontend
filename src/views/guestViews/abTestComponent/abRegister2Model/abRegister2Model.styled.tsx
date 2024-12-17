'use client';
import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';

export const LeftSideMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: '760px',
  height: '100%',
  border: '1px solid #07030E80',
  borderRadius: theme.spacing(3),
  backgroundColor: 'rgba(7, 3, 14, 0.5)',
  backdropFilter: 'blur(24px)',
  paddingTop: theme.spacing(5),
  paddingRight: theme.spacing(8),
  paddingBottom: theme.spacing(5),
  paddingLeft: theme.spacing(8)
}));
