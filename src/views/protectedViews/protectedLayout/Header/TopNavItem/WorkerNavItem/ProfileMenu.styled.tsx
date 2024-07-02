import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ProfileMenuMainContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  minWidth: '130px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '& .MuiMenuItem-root ': { width: '100%' },
  paddingTop: theme.spacing(0.875),
  paddingBottom: theme.spacing(0.875)
}));

export const WorkerNavItemContainer = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    paddingRight: '15px',
    paddingLeft: '15px',
    paddingTop: theme.spacing(2.25),
    paddingBottom: theme.spacing(2.25)
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(2.25),
    paddingBottom: theme.spacing(2.25)
  },
  [theme.breakpoints.up('md')]: {
    paddingRight: theme.spacing(16.75),
    paddingLeft: theme.spacing(16.75)
  }
}));

export const WorkerHeaderMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  cursor: 'pointer'
}));
