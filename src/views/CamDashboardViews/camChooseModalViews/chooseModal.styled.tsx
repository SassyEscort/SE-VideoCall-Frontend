import Box from '@mui/material/Box';
import styled from '@mui/system/styled';

export const CamChooseModalMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 823,
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
  marginBlock: theme.spacing(2),
  paddingInline: theme.spacing(1.87)
}));

export const CamRotateChipContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary[400],
  borderRadius: theme.spacing(1.5),
  rotate: '351deg',
  width: 'fit-content',
  paddingBlock: theme.spacing(0.5),
  paddingInline: theme.spacing(1.25)
}));

export const CamChooseModalContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5.6),
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: 687,
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%'
  }
}));

export const CamChooseModalInnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: theme.palette.white.main
}));

export const CamChooseModalTitleStyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.25),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const CamChooseModalSubTextStyledBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  color: theme.palette.white.main
}));
