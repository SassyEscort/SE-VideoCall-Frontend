import { AppBar, IconButton, Toolbar, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)(({ open }: { open: boolean }) => ({
  p: 0,
  ...(open && {
    '&:before': {
      zIndex: 1,
      content: "''",
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      position: 'absolute'
    }
  })
}));

export const StyledRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none',
  paddingRight: '0 !important'
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(0, 5)
  }
}));
