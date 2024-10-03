'use client';
import { styled } from '@mui/material/styles';

export const ImageContainer = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '48px',
  height: '100%',
  maxHeight: '48px',
  backgroundImage: `url(/images/workercards/workercard-img.jpeg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '50%'
}));

export const ProfileImageContainer = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '24px',
  height: '100%',
  maxHeight: '24px',
  backgroundImage: `url(/images/workercards/workercard-img.jpeg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '50%'
}));
