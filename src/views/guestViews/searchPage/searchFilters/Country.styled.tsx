import { FormControl, styled } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const FormControlBox = styled(FormControl)(({ theme }) => ({
  width: '100%',
  maxWidth: '525px',
  [theme.breakpoints.only('lg')]: {
    maxWidth: '300px'
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '442px'
  }
}));

export const CurrentlyOnlineTyporagphyBox = styled(UINewTypography)(({ theme }) => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));
