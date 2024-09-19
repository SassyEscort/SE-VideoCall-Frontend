'use client';
import { Rating } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses, LinearProgressProps } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledSelectAgeFilter } from 'components/UIComponents/UIStyledSelect';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export const HeadingTextAndTotalClientMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(7)
}));

export const HeadingTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(4)
  }
}));

export const TotalClientMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(3)
  }
}));

export const TotalClientInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.125)
}));

export const TotalClientAndRatingDetaiBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const RatingDetalisBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));

export const RatingDetalisFirstPartBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  width: '100%',
  maxWidth: '380px'
}));

export const RatingDetalisStarBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center'
}));

export const RatingPercentageContainer = styled(UINewTypography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 600,
  lineHeight: '43.71px',
  color: theme.palette.text.secondary
}));

export const RatingChartMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.75),
  cursor: 'pointer'
}));

export const UIStyledSelectRatingFilter = styled(UIStyledSelectAgeFilter)(() => ({}));

export const RatingChartInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center'
}));

export const TextAndStarBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '28px'
}));

export const RatingDescriptionMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%'
}));

export const RatingDescriptionInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.secondary[500],
  width: '100%',
  boxShadow: '0px 3px 6px #FFFFFF29'
}));

export const RatingDescriptionDetailsBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  width: '100%'
}));

export const RatingDescriptionStarBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0.125)
}));

interface BorderLinearProgressProps extends LinearProgressProps {
  isShowPercentage?: boolean;
}

export const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'isClicked' && prop !== 'isShowPercentage'
})<BorderLinearProgressProps>(({ theme, isShowPercentage }) => ({
  width: '100%',
  maxWidth: !isShowPercentage ? '504px' : '298px',
  height: 12,
  borderRadius: 2,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800]
    })
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#FFB400',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8'
    })
  },
  ...(!isShowPercentage && {
    [theme.breakpoints.up('md')]: {
      minWidth: '400px'
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: '504px'
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '297px'
    }
  })
}));

export const PaginationBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(6)
}));

export const NoRatingBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const NoRatingTextContainer = styled(UINewTypography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 500,
  lineHeight: '38.4px'
}));

export const NoRatingTextBoxContainer = styled(UINewTypography)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  paddingRight: theme.spacing(2),
  backgroundColor: '#100B19',
  borderRadius: theme.spacing(1)
}));

export const RatingStartBox = styled(Rating)(({ theme }) => ({
  cursor: 'pointer',
  gap: theme.spacing(0.5),
  '& .MuiRating-iconEmpty': {
    color: '#FFFFFF17',
    '& svg': {
      fill: '#FFFFFF3B'
    }
  },
  '& .MuiRating-iconFilled': {
    color: '#FFB400'
  },
  '@media (max-width: 320px)': {
    gap: 0
  }
}));

export const TotalClientDescriptionText = styled(UINewTypography)(({ theme }) => ({
  fontSize: '30px',
  fontWeight: 600,
  lineHeight: '42px'
}));

export const StarComponent = styled(StarRoundedIcon)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '12px',
    height: '12px'
  },
  [theme.breakpoints.up('sm')]: {
    width: '20px',
    height: '20px'
  }
}));
