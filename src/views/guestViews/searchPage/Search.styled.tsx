import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const SearchBarMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '1244px',
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(4.25)
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

export const SearchBarSubMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    gap: theme.spacing(1.5),
    flexWrap: 'wrap'
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(1.5)
  },
  [theme.breakpoints.up('md')]: {
    flexWrap: 'noWrap'
  }
}));

export const FirstBoxMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5)
}));

export const SecondBoxMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  width: '100%',
  maxWidth: '442px'
}));

export const ThiredBoxMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  width: '100%'
}));
