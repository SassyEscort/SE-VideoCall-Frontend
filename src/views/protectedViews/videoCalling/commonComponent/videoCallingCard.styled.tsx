'use client';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const VideoCallingCardMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '407px',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: theme.spacing(2)
}));

export const SecondBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '144px',
  gap: theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'center'
}));

export const ImgBoxContainer = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '160px',
  height: '100%',
  minHeight: '70px',
  borderRadius: '12px'
}));

export const TextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: '33.6px'
}));

export const HeartBoxContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '30px',
  color: theme.palette.common.white
}));
