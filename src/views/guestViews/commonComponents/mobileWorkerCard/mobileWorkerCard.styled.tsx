'use client';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { LiveIconFirstBoxWorkerCard } from '../WorkerCard/WorkerCard.styled';

export const ImgWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  minHeight: '355px',
  borderRadius: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    minHeight: '191px',
    maxWidth: '329px',
    backgroundPosition: 'top'
  },
  '@media (max-width: 425px)': {
    maxWidth: '175px',
    backgroundPosition: 'top'
  },
  '@media (max-width: 320px)': {
    maxWidth: '250px',
    backgroundPosition: 'top'
  },
  '@media (max-width: 375px)': {
    maxWidth: '325px',
    backgroundPosition: 'top'
  },
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}));

export const HeartIconWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  width: '100%',
  height: '100%',
  color: '#E9E8EB',
  justifyContent: 'flex-end',
  paddingTop: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  '@media (max-width: 425px)': {
    maxWidth: '175px'
  },
  '@media (max-width: 320px)': {
    maxWidth: '290px'
  },
  '@media (max-width: 375px)': {
    maxWidth: '329px'
  }
}));

export const LiveIconSecBoxWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '8px',
  height: '100%',
  maxHeight: '8px',
  border: '1px solid',
  borderColor: theme.palette.success[100],
  borderRadius: '50%',
  backgroundColor: theme.palette.success[100]
}));

export const SecondSubContainerWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  whiteSpace: 'nowrap',
  height: '100%',
  maxHeight: '17px',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1)
  }
}));

export const SecondSubContainerImgWorkerCard = styled('img')(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  maxWidth: '16px',
  maxHeight: '16px'
}));

export const NameCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  whiteSpace: 'nowrap',
  alignItems: 'center'
}));

export const CreditContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  whiteSpace: 'nowrap'
}));

export const LiveIconWorkerCard = styled(LiveIconFirstBoxWorkerCard)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  minWidth: '12px',
  height: '0',
  minHeight: '12px',
  border: '1px',
  borderColor: theme.palette.secondary[400],
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary[400]
}));

export const OfflineIconSecBoxWorkerCard = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '8px',
  height: '100%',
  maxHeight: '8px',
  borderRadius: '50%'
}));

export const OfflineIconWorkerCard = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  minWidth: '12px',
  height: '0',
  minHeight: '12px',
  border: '1px',
  borderRadius: '50%'
}));

export const FirstSubContainerWithoutImg = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '16px',
  height: '100%',
  maxHeight: '8px',
  marginTop: '3px'
}));
