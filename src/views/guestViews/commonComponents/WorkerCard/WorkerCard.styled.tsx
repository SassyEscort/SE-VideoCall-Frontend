'use client';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Image from 'next/image';
import { Typography } from '@mui/material';

export const MainWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  position: 'relative',
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    minHeight: '272px'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '300px',
    minHeight: '432px'
  }
}));

export const ImgWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  minHeight: '432px',
  borderRadius: theme.spacing(1.5),
  [theme.breakpoints.up('sm')]: {
    minHeight: '432px'
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '252px',
    maxWidth: '175px'
  },
  [theme.breakpoints.only('xs')]: {
    maxWidth: '200px'
  },
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}));

export const HeartIconWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  width: '100%',
  height: '100%',
  color: '#E9E8EB',
  justifyContent: 'flex-end',
  paddingTop: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    minHeight: '272px',
    maxWidth: '175px'
  },
  [theme.breakpoints.only('xs')]: {
    maxWidth: '200px'
  }
}));

export const LiveIconFirstBoxWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '8px',
  height: '100%',
  minHeight: '8px',
  border: '1px',
  borderColor: theme.palette.secondary[400],
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary[400],
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(0.5)
}));

export const LiveIconSecBoxWorkerCard = styled(Box)(({ theme }) => ({
  width: '8px',
  height: '8px',
  border: '1px solid',
  position: 'relative',
  right: '-2px',
  top: '2px',
  borderColor: theme.palette.success[100],
  borderRadius: '50%',
  backgroundColor: theme.palette.success[100]
}));

export const LiveIconSecBoxWorkerCardSec = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '8px',
  height: '100%',
  maxHeight: '8px',
  border: '1px solid',
  borderColor: '#E06B28',
  borderRadius: '50%',
  backgroundColor: '#E06B28'
}));

export const SeconderContainerWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'end',
  width: '100%',
  maxWidth: '300px',
  height: '100%',
  maxHeight: '109px',
  borderRadius: theme.spacing(1.5),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(1.5)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5)
  },
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.88) 100%)'
}));

export const SubContainertWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(1)
  }
}));

export const FirstSubContainerImgWorkerCard = styled(Image)(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '16px',
  height: '100%',
  maxHeight: '8px',
  marginTop: '3px'
}));

export const SecondMainContainerWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3.5),
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: theme.spacing(1)
  }
}));

export const SecondSubContainerWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  whiteSpace: 'nowrap',
  height: '100%',
  maxHeight: '17px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1)
  }
}));

export const SecondSubContainerImgWorkerCard = styled(Image)(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  maxWidth: '22px',
  maxHeight: '22px'
}));

export const WorkerCardMainBox = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down(330)]: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5)
  }
}));

export const ButtonMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(6),
  width: '100%'
}));

export const WorkerCardContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'end',
  maxWidth: '300px',
  flexDirection: 'column'
}));

export const ProfileCardContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

export const NameCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  whiteSpace: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '135px'
  },
  [theme.breakpoints.only('sm')]: {
    maxWidth: '200px'
  },
  [theme.breakpoints.only('md')]: {
    maxWidth: '200px'
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '135px'
  }
}));

export const CreditContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  whiteSpace: 'nowrap',
  alignItems: 'center'
}));

export const FavoriteBorderIconContainer = styled(FavoriteBorderIcon)(({ theme }) => ({
  width: '20px',
  height: '20px',
  [theme.breakpoints.up('sm')]: {
    width: '24px',
    height: '24px'
  }
}));

export const FavoriteIconContainer = styled(FavoriteIcon)(({ theme }) => ({
  width: '20px',
  height: '20px',
  [theme.breakpoints.up('sm')]: {
    width: '24px',
    height: '24px'
  }
}));

export const LiveIconWorkerCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '12px',
  height: '12px',
  border: '1px',
  borderColor: theme.palette.secondary[400],
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary[400]
}));

export const LiveIconWorkerCardSec = styled(LiveIconFirstBoxWorkerCard)(() => ({
  display: 'flex',
  width: '100%',
  minWidth: '12px',
  height: '0',
  minHeight: '12px',
  border: '1px',
  borderColor: '#E06B2852',
  borderRadius: '50%',
  backgroundColor: '#E06B2852'
}));

export const UITypographyBox = styled(UINewTypography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '16.8px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px !important',
    lineHeight: '14.4px !important'
  }
}));

export const UITypographyBoxContainer = styled(UINewTypography)(({ theme }) => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '60px'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '100px'
  },
  color: theme.palette.text.primary
}));

export const TextBoxContainer = styled(Box)(() => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  maxWidth: '150px'
}));

export const HighlyAvailableButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginTop: 0,
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px'
  }
}));

export const HighlyAvailableBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center'
  },
  width: '100%',
  position: 'relative',
  marginLeft: '30px'
}));

export const BannerImageCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  paddingRight: 0,
  paddingLeft: 0,
  justifyContent: 'flex-end',
  paddingTop: 83,
  '@media (max-width: 768px)': {
    justifyContent: 'flex-start'
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    paddingTop: 0
  },
  [theme.breakpoints.down('xs')]: {
    justifyContent: 'center',
    paddingRight: theme.spacing(3)
  }
}));

export const ChatMessageMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  width: '100%',
  height: '100%',
  border: '1px solid #FF5959',
  backgroundColor: '#FF5959',
  justifyContent: 'center',
  borderRadius: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    top: '385px',
    maxHeight: '36px',
    maxWidth: '149px'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '103px',
    maxHeight: '26px',
    top: '218px'
  }
}));

export const ChatMessageInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center'
}));

export const ChatMessageImg = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    height: '16px',
    width: '16px'
  },
  [theme.breakpoints.up('sm')]: {
    height: '24px',
    width: '24px'
  }
}));

export const ChatMessageText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
    fontWeight: 600,
    lineHeight: '18px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '24px'
  }
}));
