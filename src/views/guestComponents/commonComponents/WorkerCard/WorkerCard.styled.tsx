import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const MainWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    minHeight: '272px'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '300px',
    minHeight: '432px'
  }
}));

export const ImgWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  minHeight: '432px',
  borderRadius: theme.spacing(1.5),
  [theme.breakpoints.up('sm')]: {
    minHeight: '432px'
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '272px',
    maxWidth: '100%'
  }
}));
export const HeartIconWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  width: '100%',
  height: '100%',
  color: '#E9E8EB',
  justifyContent: 'flex-end',
  paddingTop: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5)
}));

export const LiveIconFirstBoxWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '12px',
  height: '100%',
  minHeight: '12px',
  border: '1px',
  borderColor: theme.palette.secondary[400],
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary[400],
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(1)
}));

export const LiveIconSecBoxWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '8px',
  height: '100%',
  minHeight: '8px',
  border: '1px solid',
  borderColor: theme.palette.success[100],
  borderRadius: '50%',
  backgroundColor: theme.palette.success[100]
}));

export const SeconderContainerWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  alignItems: 'end',
  width: '100%',
  maxWidth: '300px',
  height: '100%',
  maxHeight: '79px',
  borderRadius: theme.spacing(1.5),
  [theme.breakpoints.down(330)]: {
    padding: theme.spacing(0.5)
  },
  [theme.breakpoints.up(330)]: {
    padding: theme.spacing(1)
  },
  [theme.breakpoints.only('sm')]: {
    padding: theme.spacing(1.5)
  },
  padding: theme.spacing(2),
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.88) 100%)'
}));

export const SubContainertWorkerCard = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '268px'
}));

export const FirstSubContainerImgWorkerCard = styled('img')(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '16px',
  height: '100%',
  maxHeight: '8px',
  marginTop: '10px'
}));

export const SecondMainContainerWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3.5),
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: theme.spacing(1)
  }
}));

export const SecondSubContainerWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  whiteSpace: 'nowrap',
  height: '100%',
  maxHeight: '17px'
}));

export const SecondSubContainerImgWorkerCard = styled('img')(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  maxWidth: '16px',
  maxHeight: '16px'
}));

export const WorkerCardMainBox = styled(Box)(({ theme }) => ({
  width: '100%',

  [theme.breakpoints.down(330)]: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5)
  }
}));

export const ButtonMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(6),
  width: '100%'
}));
