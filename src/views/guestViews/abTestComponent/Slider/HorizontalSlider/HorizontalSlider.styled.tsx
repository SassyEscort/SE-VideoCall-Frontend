import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';

export const TitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  maxWidth: '130px',
  fontSize: '21px',
  fontWeight: 700,
  lineHeight: '30px',
  letterSpacing: '0.6px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    lineHeight: '20px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '17.5px',
    lineHeight: '25px'
  }
}));

export const SubTitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  whiteSpace: 'nowrap',
  maxWidth: '125px',
  fontSize: '15px',
  fontWeight: 400,
  lineHeight: '21px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
    lineHeight: '14px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '12.5px',
    lineHeight: '17.5px'
  }
}));

export const SliderMainWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden'
}));

export const SlideWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  '& > *': {
    display: 'flex',
    gap: theme.spacing(4)
  }
}));

export const ModelSliderCardBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.common.black,
  gap: theme.spacing(2.25)
}));

export const ModelCardInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.common.white,
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(0.5),
  textAlign: 'start'
}));

export const ModelCardSliderImage = styled(Image)(() => ({
  borderRadius: '50%',
  objectFit: 'cover'
}));
