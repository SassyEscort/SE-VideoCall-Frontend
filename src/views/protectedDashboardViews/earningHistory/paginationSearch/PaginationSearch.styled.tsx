'use client';
import OutlinedInput from '@mui/material/OutlinedInput';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

export const StyledRoot = styled(Toolbar)(({ theme }) => ({
  height: 40,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 !important',
  width: '100%'
}));
export const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  width: '100%',
  borderRadius: theme.spacing(1),
  borderColor: '#232027',
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': {
    width: 320,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: '#232027'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.secondary
  },
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: '#ff68c0 !important'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary['800']
    }
  }
}));
