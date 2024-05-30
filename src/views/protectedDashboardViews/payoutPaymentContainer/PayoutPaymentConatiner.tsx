import { Box, styled } from '@mui/material';

export const MainConatinerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(4)
}));

export const MainSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '15px',
    paddingRight: '22px'
  }
}));

export const MainThreeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    borderRadius: '8px'
  }
}));

export const MainForBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: '600px',
  backgroundColor: theme.palette.primary[700],
  padding: '24px 0px 24px 24px',
  borderRadius: '8px'
}));

export const SiliconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '600px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(6),
    width: '100%',
    maxWidth: '356px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
}));

export const SiliconFristBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5)
}));

export const DeleteEditBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  paddingRight: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

export const ButtonConatinerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));

export const SmallAndBigScreen = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6)
}));

export const IamgeBigScreenNone = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex'
  }
}));

export const SmallScreenImg = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3)
}));

export const ImgHome = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48
}));
