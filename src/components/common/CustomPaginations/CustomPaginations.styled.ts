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
