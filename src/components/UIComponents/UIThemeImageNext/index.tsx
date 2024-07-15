import { styled } from '@mui/material/styles';
import Image from 'next/image';

export const UIThemeNextImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: 20,
    height: 20
  }
}));
