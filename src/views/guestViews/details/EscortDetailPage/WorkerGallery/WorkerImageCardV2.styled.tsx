import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const WorkerImageCardContainerBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: theme.spacing(2.5),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(7)
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(12)
  }
}));

export const WorkerBlurBox = styled(Box)(() => ({
  bottom: 0,
  zIndex: 1,
  position: 'absolute',
  width: '100%',
  height: '100%',
  maxHeight: '533.334px',
  background: 'linear-gradient(to top, rgba(7, 3, 14, 1), rgba(7, 3, 14, 0))'
}));

export const WorkerImageCardGridBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center'
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5)
  },
  flexShrink: 0
}));

export const WorkerImageCardBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  borderRadius: theme.spacing(1.5),
  overflow: 'hidden',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    maxHeight: '258.667px',
    minHeight: '255px'
  },
  [theme.breakpoints.down('sm')]: {
    maxHeight: '151px',
    minHeight: '151px'
  }
}));

export const WorkerImageCardMainBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '194px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '113px',
    minHeight: '151px'
  },
  height: 'auto',
  minHeight: '258.667px',
  borderRadius: theme.spacing(1),
  background: 'lightgray -0.263px 0px / 100.271% 100% no-repeat',
  cursor: 'pointer',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}));
