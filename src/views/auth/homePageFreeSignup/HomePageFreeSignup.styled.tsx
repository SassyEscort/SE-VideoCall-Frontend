import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const MobileImageBoxContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '32px'
}));

export const MobileImageInnerBoxContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const ImageAndTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  alignItems: 'center'
}));

// export const ImageContainer = styled(Box)(({ theme }) => ({
//   backgroundImage: 'url(/images/workercards/Workercard-img.jpeg)',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   position: 'absolute',
//   width: '100%',
//   maxWidth: '363px',
//   height: '100%',
//   maxHeight: '290px'
// }));

export const TitleTextBoxContainer = styled(Box)(() => ({
  width: '100%',
  maxWidth: '275px',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  '@media (max-width: 320px)': {
    maxWidth: '221px'
  }
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #FBA631, #FFFFFF)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  whiteSpace: 'nowrap',
  display: 'flex',
  gap: theme.spacing(1)
}));

export const DescriptionTextBoxContainer = styled(Box)(() => ({
  width: '100%',
  maxWidth: '228px',
  display: 'flex',
  textAlign: 'center',
  '@media (max-width: 320px)': {
    maxWidth: '221px'
  }
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  whiteSpace: 'normal',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    lineHeight: '33.6px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '32px',
    lineHeight: '44.8px'
  }
}));

export const JoinForFreeText = styled(Typography)(({ theme }) => ({
  lineHeight: '38.4px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    paddingTop: theme.spacing(0.5)
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '32px'
  }
}));

export const RemindMeBoxContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const HomeFreeSignupMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    maxWidth: '100%',
    gap: theme.spacing(3)
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
    gap: theme.spacing(4)
  }
}));

export const HeaderTextMainBoxContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

export const HeaderTextInnerBoxContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end'
}));

export const IconeButtonContainer = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white
}));
