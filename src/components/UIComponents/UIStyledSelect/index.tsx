'use client';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

export const UIStyledSelect = styled(Select)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1),
  width: '100%',
  height: '48px',
  backgroundColor: theme.palette.primary[700],

  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary[700]
    }
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(0, 2),
    display: 'flex',
    gap: theme.spacing(1)
  },
  '& .MuiSvgIcon-root': {
    color: 'rgba(183, 181, 185, 1)'
  }
}));

export const UIStyledSelectPastPayout = styled(Select)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1),
  width: '100%',
  height: '40px',
  backgroundColor: theme.palette.primary[700],

  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary[700]
    }
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(0, 2),
    display: 'flex',
    gap: theme.spacing(1)
  },
  '& .MuiSvgIcon-root': {
    color: 'rgba(183, 181, 185, 1)'
  }
}));

export const StyledSelectInputLabel = styled(InputLabel)(({ theme }) => ({
  display: 'flex',
  top: '-3px',
  color: theme.palette.secondary[200],
  gap: theme.spacing(1),
  alignItems: 'center',
  '&.MuiInputLabel-shrink': { top: 0 }
}));
