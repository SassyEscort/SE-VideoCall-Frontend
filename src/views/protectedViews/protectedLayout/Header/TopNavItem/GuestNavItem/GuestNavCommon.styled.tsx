import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const StepNavItemContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  paddingRight: `${theme.spacing(0)}!important`,
  boxShadow: 'none',
  borderBottom: '1px solid',
  borderColor: theme.palette.secondary.light
}));

export const StepNavItemBoxContainer = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: '#D52A8E',
  [theme.breakpoints.up('sm')]: {
    height: 60,
    width: 155
  },
  [theme.breakpoints.down('sm')]: {
    height: 40,
    width: 104
  }
}));
