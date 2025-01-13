import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const PreSignUpWebMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse'
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'column'
  }
}));

export const PreSignUpWebInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  width: '100%',
  height: '100%'
}));

export const PreSignUpMobileBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(4)
  }
}));

export const HeadingTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const HeadingTextTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    fontWeight: 900,
    lineHeight: '36px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '60px',
    fontWeight: 900,
    lineHeight: '80px'
  }
}));

export const DescriptionTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '32px',
  color: theme.palette.common.white,
  letterSpacing: '-1px'
}));

export const ButtonBoxContainer = styled(Button)(({ theme }) => ({
  borderRadius: '100px',
  width: '100%',
  maxWidth: '400px',
  height: '100%',
  gap: theme.spacing(1),
  backgroundColor: theme.palette.primary[100],
  [theme.breakpoints.up('md')]: {
    minHeight: '64px',

  },
  [theme.breakpoints.down('md')]: {
    minHeight: '64px',
    maxWidth: '768px',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '48px',
    maxWidth: '768px',
  }
}));

export const ButtonTextTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '20px',
  fontWeight: 800,
  lineHeight: '32px'
}));

export const ModelImageMainSwiperContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: '1240px'
  },
  [theme.breakpoints.up('sm')]: {
    width: '1280px !important'
  }
}));

export const ModelDetailsSwiperMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  alignItems: 'flex-start'
}));

export const TrendingBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center'
}));

export const TrendingNowTextTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  [theme.breakpoints.up('sm')]: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '28px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '42px'
  }
}));

export const ModelDetailsSwiperInnerContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '1200px'
}));

export const SignUpTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 800,
  lineHeight: '32px',
  color: theme.palette.common.white
}));

export const SignupButtonBoxContainer = styled(Button)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '768px',
  height: '100%',
  minHeight: '48px',
  borderRadius: '100px',
  border: '2px solid #611441',
  [theme.breakpoints.down('md')]: {
    minHeight: '64px'
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '48px'
  }
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  maxWidth: '130px',
  fontSize: '21px',
  fontWeight: 700,
  lineHeight: '30px',
  letterSpacing: '0.6px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    lineHeight: '20px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '17.5px',
    lineHeight: '25px'
  }
}));

export const SubTitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  whiteSpace: 'nowrap',
  maxWidth: '125px',
  fontSize: '15px',
  fontWeight: 400,
  lineHeight: '21px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
    lineHeight: '14px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '12.5px',
    lineHeight: '17.5px'
  }
}));

export const NewBoxContainer = styled(Box)(({ theme }) => ({
  '& .container': {
    maxWidth: '124rem !important',
    margin: '0 auto !important'
  },
  '& .heading': {
    padding: '1rem 0 !important',
    fontSize: '3.5rem !important',
    textAlign: 'center !important'
  },
  '& .swiper_container': {
    height: '36rem !important',
    padding: '2rem 0 !important',
    position: 'relative !important'
  },
  '& .swiper-slide': {
    width: '592px !important',
    height: '672px !important',
    position: 'relative !important',
    '& img': {
      width: '592px !important',
      height: '460px !important',
      borderRadius: '60px !important',
      objectFit: 'cover !important'
    }
  },

  [theme.breakpoints.down(787)]: {
    '& .swiper-slide': {
      width: '400px !important',
      '& img': {
        width: '400px !important'
      }
    }
  },

  '& .swiper-slide-shadow-left, & .swiper-slide-shadow-right': {
    display: 'none !important'
  },
  '& .slider-controler': {
    position: 'relative !important',
    bottom: '2rem !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    '& .swiper-button-next': {
      left: '58% !important',
      transform: 'translateX(-58%) !important'
    },
    '& .swiper-button-prev': {
      left: '42% !important',
      transform: 'translateX(-42%) !important'
    },
    '& .slider-arrow': {
      background: 'var(--white) !important',
      width: '3.5rem !important',
      height: '3.5rem !important',
      borderRadius: '50% !important',
      filter: 'drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1)) !important',
      '& ion-icon': {
        fontSize: '2rem !important',
        color: '#222224 !important'
      }
    }
  },
  '& .swiper-pagination': {
    position: 'relative !important',
    width: '15rem !important',
    bottom: '1rem !important',
    '& .swiper-pagination-bullet': {
      filter: 'drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1)) !important'
    },
    '& .swiper-pagination-bullet-active': {
      background: 'var(--primary) !important'
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& .swiper_container': {
      height: '26rem !important'
    },
    '& .swiper-slide': {
      width: '250px !important',
      height: '365px !important',
      '& img': {
        width: '250px !important',
        height: '365px !important',
        borderRadius: '14px !important'
      }
    },
    '& .slider-controler .swiper-button-next': {
      left: '80% !important',
      transform: 'translateX(-80%) !important'
    },
    '& .slider-controler .swiper-button-prev': {
      left: '20% !important',
      transform: 'translateX(-20%) !important'
    }
  },
  [theme.breakpoints.up(1028)]: {
    '& .swiper-slide.swiper-slide-prev.swiper-slide-visible': {
      transitionDuration: '0ms',
      transform: 'translate3d(298px, 0px, -250px) rotateX(0deg) rotateY(0deg) scale(1) !important',
      zIndex: -2
    },
    '& .swiper-slide.swiper-slide-visible.swiper-slide-next': {
      transitionDuration: '0ms',
      transform: 'translate3d(-298px, 0px, -250px) rotateX(0deg) rotateY(0deg) scale(1) !important',
      zIndex: -1
    }
  },
  [theme.breakpoints.down(1028)]: {
    '& .swiper-slide.swiper-slide-prev.swiper-slide-visible': {
      transitionDuration: '0ms',
      transform: 'translate3d(298px, 0px, -250px) rotateX(0deg) rotateY(0deg) scale(1) !important',
      zIndex: -2
    },
    '& .swiper-slide.swiper-slide-visible.swiper-slide-next': {
      transitionDuration: '0ms',
      transform: 'translate3d(-298px, 0px, -250px) rotateX(0deg) rotateY(0deg) scale(1) !important',
      zIndex: -1
    }
  },
  [theme.breakpoints.down(775)]: {
    '& .swiper-slide.swiper-slide-prev.swiper-slide-visible': {
      transitionDuration: '0ms',
      transform: 'translate3d(165px, 0px, -250px) rotateX(0deg) rotateY(0deg) scale(1) !important',
      zIndex: -2
    },
    '& .swiper-slide.swiper-slide-visible.swiper-slide-next': {
      transitionDuration: '0ms',
      transform: 'translate3d(-165px, 0px, -250px) rotateX(0deg) rotateY(0deg) scale(1) !important',
      zIndex: -1
    }
  },
  [theme.breakpoints.down(430)]: {
    '& .swiper-slide.swiper-slide-prev.swiper-slide-visible': {
      transitionDuration: '0ms',
      transform: 'translate3d(138px, 0px, -250px) rotateX(0deg) rotateY(0deg) scale(1) !important',
      zIndex: -2
    },
    '& .swiper-slide.swiper-slide-visible.swiper-slide-next': {
      transitionDuration: '0ms',
      transform: 'translate3d(-138px, 0px, -250px) rotateX(0deg) rotateY(0deg) scale(1) !important',
      zIndex: -1
    }
  },
  [theme.breakpoints.down(380)]: {
    '& .swiper-slide.swiper-slide-prev.swiper-slide-visible': {
      transitionDuration: '0ms',
      transform: 'translate3d(169px, 0px, -250px) rotateX(0deg) rotateY(0deg) scale(1) !important',
      zIndex: -2
    },
    '& .swiper-slide.swiper-slide-visible.swiper-slide-next': {
      transitionDuration: '0ms',
      transform: 'translate3d(-168px, 0px, -250px) rotateX(0deg) rotateY(0deg) scale(1) !important',
      zIndex: -1
    }
  },
  [theme.breakpoints.down(325)]: {
    '& .swiper-slide': {
      width: '230px !important',
      height: '355px !important',
      '& img': {
        width: '230px !important',
        height: '355px !important'
      }
    },
    '& .swiper-slide.swiper-slide-prev.swiper-slide-visible': {
      transitionDuration: '0ms',
      transform: 'translate3d(171px, 0px, -250px) rotateX(0deg) rotateY(0deg) scale(1) !important',
      zIndex: -2
    },
    '& .swiper-slide.swiper-slide-visible.swiper-slide-next': {
      transitionDuration: '0ms',
      transform: 'translate3d(-170px, 0px, -250px) rotateX(0deg) rotateY(0deg) scale(1) !important',
      zIndex: -1
    }
  },
  [theme.breakpoints.down('md')]: {
    '& .slider-controler .swiper-button-next': {
      left: '70% !important',
      transform: 'translateX(-70%) !important'
    },
    '& .slider-controler .swiper-button-prev': {
      left: '30% !important',
      transform: 'translateX(-30%) !important'
    }
  }
}));
