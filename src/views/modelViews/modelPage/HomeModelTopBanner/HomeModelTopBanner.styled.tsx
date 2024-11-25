import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '30px',
  width: '100%',
  height: '100%',
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    gap: '44px',
    flexDirection: 'column'
  },
  [theme.breakpoints.up('lg')]: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  [theme.breakpoints.down('lg')]: {
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  },
  [theme.breakpoints.up('lg')]: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  '&.last-child-box': {
    flex: 'initial',
    alignItems: 'initial',
    justifyContent: 'initial'
  }
}));

export const DetailContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(4.5),
    paddingTop: theme.spacing(12)
  },
  [theme.breakpoints.only('md')]: {
    paddingTop: theme.spacing(3.125)
  },
  width: '100%',
  maxWidth: '652px'
}));

export const DetailSubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center'
  },
  [theme.breakpoints.only('sm')]: {
    alignItems: 'flex-start'
  }
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  [theme.breakpoints.only('sm')]: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(0.375),
    paddingRight: theme.spacing(0.375),
    paddingTop: theme.spacing(0),
    justifyContent: 'center'
  },
  [theme.breakpoints.only('sm')]: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    justifyContent: 'flex-start'
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(10.875),
    justifyContent: 'flex-end'
  }
}));

export const InlineBox = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  flexFlow: 'column-wrap',
  wordBreak: 'break-word',
  display: 'inline',
  [theme.breakpoints.down('sm')]: {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: '50px',
    textAlign: 'center',
    textWrap: 'nowrap',
    paddingLeft: theme.spacing(1.5)
  },
  [theme.breakpoints.down(330)]: {
    textWrap: 'wrap'
  },
  [theme.breakpoints.only('sm')]: {
    textAlign: 'left'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: 48,
    fontWeight: 700,
    lineHeight: '62px'
  }
}));

export const TypographyBox = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  width: '100%',
  color: theme.palette.secondary[100],
  [theme.breakpoints.down('sm')]: {
    maxWidth: '293px',
    fontSize: 14,
    lineHeight: '24px',
    textAlign: '-webkit-center',
    fontWeight: 400
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: 20,
    lineHeight: '32px'
  }
}));

export const InlineBoxRelative = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  color: theme.palette.primary[600],
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}));

export const InlineBoxRelativeNocolor = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}));
