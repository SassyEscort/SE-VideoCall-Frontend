import { IconButton, styled } from '@mui/material';

export const IconButtonCheckBox = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'absolute',
  display: 'none',
  top: 0,
  right: 0,
  [theme.breakpoints.up('sm')]: {
    display: 'block'
  },
  [theme.breakpoints.up('md')]: {
    right: '-84px'
  }
}));
