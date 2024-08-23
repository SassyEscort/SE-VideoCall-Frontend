import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

export const UINewStyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: '8px',
  width: '100%',
  maxWidth: '173px',
  height: '50px',
  minWidth: 173,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '390px'
  },
  '.MuiMenu-paper': {
    p: 1.5
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(1.5, 2.5),
    display: 'flex',
    gap: theme.spacing(1)
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: '2px solid',
    borderColor: 'secondary.200'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'primary.main'
  },
  '& .mui-style-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
    color: '#86838A'
  }
}));

export const UINewStyledEarningSelect = styled(Select)(({ theme }) => ({
  borderRadius: '8px',
  width: '100%',
  cursor: 'pointer',
  maxWidth: '173px',
  height: '50px',
  minWidth: 190,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '390px'
  },
  '.MuiMenu-paper': {
    p: 1.5
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(1.5, 2.5),
    display: 'flex',
    gap: theme.spacing(1)
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: '2px solid',
    borderColor: 'secondary.200'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'primary.main'
  },
  '& .mui-style-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
    color: '#86838A'
  }
}));

export const UINewStyledSelectInputLabel = styled(InputLabel)(() => ({
  top: '-2px',
  '&.MuiInputLabel-shrink': { top: 0 }
}));
