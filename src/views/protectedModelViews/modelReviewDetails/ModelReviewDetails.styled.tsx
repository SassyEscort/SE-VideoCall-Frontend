import { Box, Typography, styled } from '@mui/material';

export const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(8)
}));

export const DocumentSecondConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  width: '100%',
  maxWidth: '824px'
}));

export const UpConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const SecondMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: theme.spacing(4),
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

export const ThreeMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(6),
  paddingLeft: '15px'
}));

export const ForMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(4)
  }
}));

export const BasicDetailsConatiner = styled(Box)(() => ({
  width: '100%',
  maxWidth: '824px'
}));

export const FirstColumnContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '824px',
  width: '100%',
  alignItems: 'center'
}));

export const SecondColumnContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2)
  }
}));

export const CloumnContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  maxWidth: '93px',
  width: '100%'
}));

export const LeftCloumnConatinerGap = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  flexDirection: 'column'
}));

export const IDtype = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2)
  }
}));

export const Passport = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const IDnumber = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5)
}));
export const RightSideConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  maxWidth: '269px',
  width: '100%'
}));

export const RightSideConatinerGap = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  flexDirection: 'column'
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  borderRadius: '8px',
  border: '1px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start'
  }
}));

export const DocumentsConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(6),
  paddingLeft: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'flex-start',
    alignItems: 'start'
  }
}));

export const DocumentLeftContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  width: '100%',
  maxWidth: '824px'
}));

export const FontIdRight = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const EditButton = styled(Box)(() => ({
  display: 'flex'
}));

export const ModelGalleryBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: theme.spacing(12)
}));

export const ModelGalleryTitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  paddingTop: theme.spacing(7),
  paddingLeft: theme.spacing(2),
  width: '100%'
}));

export const FirstBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  width: '100%'
}));

export const FirstTextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '32px',
  fontWeight: 700
}));

export const GellaryTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 2,
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2)
  }
}));

export const SecTextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '25.6px',
  fontWeight: 500
}));

export const ThirdTextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '25.6px',
  fontWeight: 700
}));

export const BtnTextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '19.2px',
  fontWeight: 700
}));

export const FourTextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '32px',
  fontWeight: 700
}));

export const GalleryTextContainer = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    lineHeight: '32px',
    fontWeight: 700
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 700
  }
}));
