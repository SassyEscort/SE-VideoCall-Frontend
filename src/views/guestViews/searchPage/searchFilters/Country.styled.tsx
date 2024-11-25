import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
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

export const CurrentlyOnlineTyporagphyBox = styled(UINewTypography)(() => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));
