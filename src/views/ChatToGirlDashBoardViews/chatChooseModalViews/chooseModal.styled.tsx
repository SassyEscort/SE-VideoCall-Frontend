import Box from '@mui/material/Box';
import styled from '@mui/system/styled';

export const ChatToGirlsChooseModalMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 1000,
  width: '100%',
  backgroundImage: 'url(/images/camtocamDashboard/camChooseModal.webp)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  [theme.breakpoints.down('md')]: {
    height: 500
  },
  [theme.breakpoints.down('sm')]: {
    marginBlock: theme.spacing(3),
    height: '100%'
  },
  paddingInline: theme.spacing(1.87)
}));

export const ChatToGirlsRotateChipContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary[400],
  borderRadius: theme.spacing(1.5),
  rotate: '351deg',
  width: 'fit-content',
  paddingBlock: theme.spacing(0.5),
  paddingInline: theme.spacing(1.25)
}));

export const ChatToGirlsChooseModalContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5.6),
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  // maxWidth: 700,
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%'
  }
}));

export const ChatToGirlsChooseModalInnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: theme.palette.white.main,
  textAlign: 'center'
}));

export const ChatToGirlsChooseModalTitleStyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.25),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const ChatToGirlsChooseModalSubTextStyledBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  color: theme.palette.white.main,
  width: '100%',
  maxWidth: 850
}));
