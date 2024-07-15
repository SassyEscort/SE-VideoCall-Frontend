import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ForgetPasswordLinkMainContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    maxWidth: '100%',
    gap: theme.spacing(4)
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: '126.5px',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(0),
    maxWidth: '400px',
    gap: theme.spacing(5)
  }
}));

export const IconBoxConatiner = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end'
}));

export const RestePasswordBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  alignItems: 'center'
}));

export const IconButtonConatiner = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  color: theme.palette.common.white,
  [theme.breakpoints.down('sm')]: {
    right: theme.spacing(0),
    display: 'block'
  },
  [theme.breakpoints.up('md')]: {
    right: theme.spacing(-10.5)
  }
}));

export const InputTypeFristEmailBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const InputTypeSecondEmailBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5)
}));

export const RequestlinkBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: theme.spacing(3.5)
}));

export const RememberpasswordfirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(0)
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(11.25)
  }
}));

export const RememberpasswordSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'center'
}));
