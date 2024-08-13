import { Box, styled } from '@mui/material';

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
