import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const HeaderMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.8)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(4.5)
  },
  '@media (max-width: 320px)': {
    gap: 0
  }
}));

export const SearchTitalBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    paddingRight: theme.spacing(1.25)
  }
}));

export const SearchTitalBoxSm = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  width: '100%',
  maxWidth: '420px',
  border: '1px solid #E9E8EB33',
  borderRadius: '8px',
  padding: '12px 16px 12px 16px',
  [theme.breakpoints.down('sm')]: {
    paddingRight: theme.spacing(1.25)
  },
  '@media (max-width: 1024px)': {
    width: 'auto',
    maxWidth: 'none'
  }
}));

export const BorderBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '420px',
  border: '1px solid #E9E8EB33',
  borderRadius: '8px',
  padding: '12px 16px 12px 16px',
  height: '100%',
  maxHeight: '46px',
  alignItems: 'center',
  textAlign: 'center',
  display: 'flex'
}));

export const BalanceBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  cursor: 'pointer'
}));
