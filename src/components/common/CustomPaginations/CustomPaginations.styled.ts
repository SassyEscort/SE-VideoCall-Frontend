import { Box } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { alpha, styled } from '@mui/material/styles';

export const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  width: 200,
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
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));

export const TablePageMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

export const TablePageInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center'
}));

export const PaginationButtonBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '86px',
  height: '30px',
  border: '1px solid rgba(213, 213, 213, 1)',
  borderRadius: '10px',
  backgroundColor: 'rgba(250, 251, 253, 1)',
  alignItems: 'center'
}));
