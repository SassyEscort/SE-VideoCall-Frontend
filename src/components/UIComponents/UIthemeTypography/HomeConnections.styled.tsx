import { styled } from '@mui/material/styles';
import UINewTypography from '../UINewTypography';

export const HomeModelConnectionsTypography = styled(UINewTypography)(({ theme }) => ({
  color: '#E9E8EB',
  marginTop: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(3)
  }
}));
