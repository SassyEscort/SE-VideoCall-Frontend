import { Box, IconButton, styled } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const ModelNewPasswordBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  gap: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(2),
    maxWidth: '100%',
    paddingTop: theme.spacing(0),
    paddingRight: theme.spacing(2)
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(4),
    maxWidth: '400px',
    paddingTop: theme.spacing(8),
    paddingRight: theme.spacing(0)
  },
  paddingTop: theme.spacing(0)
}));

export const IconeButtonBox = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  display: 'block',
  color: theme.palette.common.white,
  right: theme.spacing(-9),

  [theme.breakpoints.down('md')]: {
    right: theme.spacing(0)
  }
}));

export const SetupNewPasswordBox = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const SetYourNewPasswordBox = styled(UINewTypography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(0),
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    marginTop: '100px',
    whiteSpace: 'normal'
  }
}));
