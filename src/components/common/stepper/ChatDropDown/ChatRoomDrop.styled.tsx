import FormControl from '@mui/material/FormControl';
import styled from '@mui/system/styled';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Box from '@mui/material/Box';

export const DropdownStyledFormControl = styled(FormControl)(() => ({
  display: 'flex',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '& .MuiInputBase-input': {
    padding: '0px !important',
    marginTop: '5px'
  },
  '& .mui-lleihv-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
    padding: '0px !important'
  }
}));

export const KeyboardArrowDownRoundedIconStyled = styled(KeyboardArrowDownRoundedIcon)(() => ({
  height: 16,
  width: 16,
  color: 'common.white',
  paddingRight: '0px !important',
  cursor: 'pointer'
}));

export const DropdownStyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5)
}));
