import { AppBar, IconButton, Popover, Toolbar, styled } from '@mui/material';

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

export const StyledPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    padding: 0,
    marginTop: theme.spacing(1.5),
    marginLeft: theme.spacing(0.75),
    width: 180
  },
  '& .MuiMenuItem-root': {
    typography: 'body2',
    borderRadius: 0.75
  }
}));
