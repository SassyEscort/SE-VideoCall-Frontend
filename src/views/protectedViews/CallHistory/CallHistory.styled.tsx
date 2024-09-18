import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';

export const CallHistoryMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3)
  }
}));

export const CallHistoryText = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '233px',
  height: '100%',
  maxHeight: '48px',
  whiteSpace: 'nowrap',
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(4)
  },
  '@media (max-width: 320px)': {
    whiteSpace: 'normal',
    wordBreak: 'break-word'
  }
}));

export const SecondContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5),
  width: '100%',
  maxWidth: '929px',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3)
  }
}));

export const SecondSubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '929px',
  height: '100%',
  flexDirection: 'column'
}));

export const SecondSubTextMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2)
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    maxWidth: '929px',
    maxHeight: '80px'
  }
}));

export const SecondSubFirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '574px',
  height: '100%',
  maxHeight: '80px',
  [theme.breakpoints.only('md')]: {
    gap: theme.spacing(3)
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '470px'
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'space-between'
  },
  [theme.breakpoints.only('xs')]: {
    '@media (max-width: 425px)': {
      maxWidth: '370px'
    }
  }
}));

export const SecondSubFirstPartBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  maxHeight: '80px',
  gap: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(4),
    minWidth: '253px',
    flexDirection: 'row'
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5),
    width: '100%',
    maxWidth: '145px',
    flexDirection: 'column'
  },
  [theme.breakpoints.only('md')]: {
    maxWidth: '195px'
  },
  '@media (max-width: 320px)': {
    maxWidth: '108px'
  }
}));

export const WorkerImg = styled('img')(({ theme, src }) => ({
  width: '100%',
  height: '80px',
  borderRadius: theme.spacing(1.5),
  backgroundImage: `url(${src})`,
  objectFit: 'cover',
  backgroundPosition: 'cover',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '80px'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '80px'
  }
}));

export const SecondSubFirstPartSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  maxHeight: '80px',
  gap: theme.spacing(1.875),
  [theme.breakpoints.only('lg')]: {
    minWidth: '141px'
  }
}));

export const SecondSubFirstPartSecondBoxFirstText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  maxHeight: '48px',
  gap: theme.spacing(0.75),
  [theme.breakpoints.up('lg')]: {
    minWidth: '141px'
  }
}));

export const SecondSubFirstPartSecondBoxSecText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
  width: '100%',
  height: '100%',
  maxHeight: '17px',
  [theme.breakpoints.up('sm')]: {
    whiteSpace: 'nowrap'
  },
  [theme.breakpoints.only('lg')]: {
    minWidth: '141px'
  }
}));

export const SecondSubFirstPartThiredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  maxHeight: '80px',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(1.125),
  [theme.breakpoints.down('sm')]: {
    alignItems: 'end'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '156px'
  }
}));

export const SecondSubFirstPartThiredBoxText = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '43px',
  height: '100%',
  maxHeight: '19px',
  gap: theme.spacing(1)
}));

export const ImgBoxContainer = styled('img')(() => ({
  width: '100%',
  maxWidth: '16px',
  height: '100%',
  maxHeight: '16px'
}));

export const SecImgBoxContainer = styled('img')(() => ({
  width: '100%',
  maxWidth: '24px',
  height: '100%',
  maxHeight: '24px'
}));

export const CallHistoryName = styled(UINewTypography)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '25px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px !important',
    lineHeight: '20px !important'
  }
}));

export const CallHistoryCreditBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1)
  }
}));

export const CallAgainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'end'
  },
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center'
  }
}));

export const CreditUsedBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1.5)
}));

export const CallHistoryBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6)
}));

export const CallHistoryPaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
}));

export const DividerContainer = styled(Divider)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.primary[700],
  width: '100%',
  maxWidth: '929px'
}));

export const FirstTextContainer = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '16.8px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '19.2px'
  }
}));

export const SecTextContainer = styled(Typography)(({ theme }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '100px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '14.4px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '16.8px'
  }
}));

export const FirstBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const UIThemeShadowButtonContainer = styled(UIThemeShadowButton)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '363px'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '220px'
  }
}));

export const CallHistoryBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.only('sm')]: {
    flexDirection: 'column'
  },
  '@media (max-width: 320px)': {
    marginTop: theme.spacing(3)
  }
}));

export const RatingAndButtonBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.25)
}));
