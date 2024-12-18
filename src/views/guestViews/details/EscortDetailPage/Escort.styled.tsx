import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { SwiperSlide } from 'swiper/react';

export const DetailsMainBox = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#1E0815',
  padding: '16px 32px 16px 32px',
  borderRadius: '12px',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    minWidth: '290px'
  },
  [theme.breakpoints.up('md')]: {
    minWidth: '517px'
  }
}));

export const DetailsChildBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const DetailsTypographyBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const DetailsChipBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap'
}));

export const NewTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '32px',
  fontWeight: '400',
  letterSpacing: '0.1px',
  color: '#E9E8EB',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    lineHeight: '25.6px'
  }
}));

export const DullCirclesEscort = styled(Box)(() => ({
  backgroundColor: 'rgba(255, 72, 179, 0.3)',
  height: '412px',
  width: '584px',
  borderRadius: '50%',
  filter: 'blur(100px)',
  position: 'absolute',
  zIndex: '-1',
  top: '-100px',
  right: 150
}));

export const DullCirclesEscort2 = styled(Box)(() => ({
  backgroundColor: 'rgba(255, 72, 179, 0.3)',
  height: '412px',
  width: '584px',
  borderRadius: '50%',
  filter: 'blur(100px)',
  position: 'absolute',
  zIndex: '-1',
  top: '350px',
  left: -450
}));

export const ExploreEscortText = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const NameMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2)
  }
}));

export const DetailSubTypographyBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2)
  }
}));

export const DetailsChildTypographyBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5)
}));

export const SwiperContainer = styled(Box)(() => ({
  maxWidth: '148px',
  maxHeight: 'calc(728px - 10px)',
  height: '100%',
  width: '100%',
  cursor: 'pointer',
  scrollbarWidth: 'none',
  overflow: 'auto',
  '& .swiper-wrapper': { display: 'flex', flexDirection: 'column' },
  '&::-webkit-scrollbar': {
    background: 'transparent',
    width: 12
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#100B19',
    border: '1px solid #B7B5B91F'
  }
}));

export const FirstSwiperMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  height: '100%',
  maxHeight: '728px'
}));

export const FirstSwiperInnerContainer = styled(Box)(() => ({
  maxWidth: '1084px',
  width: '100%',
  cursor: 'pointer',
  height: '100%'
}));

export const FirstSwiperBlurContainer = styled(Box)(() => ({
  zIndex: 1,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  height: '100%',
  width: '100%'
}));

export const SecondSwiperBlurContainer = styled(Box)(() => ({
  filter: 'blur(10px)',
  zIndex: 1,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'absolute',
  height: '100%',
  width: '100%'
}));

export const SideSwiperButton = styled(UIThemeButton)(({ theme }) => ({
  '&.MuiButton-contained': { backgroundColor: theme.palette.secondary[500], ':hover': { backgroundColor: theme.palette.secondary[500] } },
  paddingTop: theme.spacing(0),
  paddingBottom: theme.spacing(0),
  '&.MuiButton-root': { height: 'fit-content' },
  border: '1px solid #B7B5B91F'
}));

export const SideBarBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  width: '100%',
  maxWidth: '150px'
}));

export const SwiperSlidBoxContainer = styled(SwiperSlide)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  width: '100%',
  maxWidth: '146px',
  backgroundSize: 'cover'
}));

export const SecSwiperSlidBoxContainer = styled(SwiperSlide)(() => ({
  width: '100%',
  maxWidth: '148px'
}));

export const RatingReviewMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  marginTop: theme.spacing(7),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));

export const RatingReviewInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  width: '100%'
}));

export const RatingReviewTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center'
  }
}));

export const RatingReviewText = styled(UINewTypography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '32.02px',
  color: theme.palette.common.white,
  whiteSpace: 'nowrap'
}));

export const RatingReviewNotFoundBoxMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundColor: '#100B19',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  alignItems: 'center',
  textAlign: 'center',
  marginTop: theme.spacing(7)
}));

export const RatingReviewNotFoundBoxInnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5)
}));

export const ActivityButtonMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));

export const ActivityButtonBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(1.5)
}));
