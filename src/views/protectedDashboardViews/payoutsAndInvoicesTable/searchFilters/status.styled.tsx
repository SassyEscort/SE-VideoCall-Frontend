import { FormControl, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';

export const StatusBoxContainer = styled(Typography)(({ theme }) => ({
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '120px'
}));

export const ProfileDOBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row-revers'
  }
}));

export const InvoiceBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row-reverse'
  }
}));

export const FormControlContainer = styled(FormControl)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    minWidth: '170px'
  },
  [theme.breakpoints.up('sm')]: {
    minWidth: '150px'
  }
}));
