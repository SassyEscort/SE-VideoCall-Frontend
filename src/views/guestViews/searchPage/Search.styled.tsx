import { Clear } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const StyledClearIcon = styled(Clear)(({ theme }) => ({
  cursor: 'pointer',
  height: '20px',
  width: '20px',
  marginRight: theme.spacing(3),
  [theme.breakpoints.only('md')]: {
    marginRight: theme.spacing(2)
  }
}));

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
  },
  '@media (max-width: 320px)': {
    paddingTop: theme.spacing(7),
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
  maxWidth: '442px',
  [theme.breakpoints.only('md')]: {
    maxWidth: '300px'
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '525px'
  }
}));

export const ThiredBoxMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  width: '100%'
}));

export const DollarImageContainer = styled('img')(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  maxWidth: '22px',
  maxHeight: '22px'
}));

export const CountryFilterText = styled(UINewTypography)(({ theme }) => ({
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));
