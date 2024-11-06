import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const WebBannerBeyondContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '85px',
  width: '100%',
  height: '100%',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    gap: '48px',
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

export const WebFirstBeyondBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '449px',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(4.5)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(6)
  }
}));

export const WebSecBoxBeyondContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center'
  },
  [theme.breakpoints.up('sm')]: {
    alignItems: 'flex-start'
  }
}));

export const WebInlineBeyondBox = styled(Box)(({ theme }) => ({
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
    marginTop: theme.spacing(6.75)
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

export const WebInlineBoxRelative = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  color: theme.palette.primary[600],
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}));

export const WebBannerBeyondImageCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  '@media (max-width: 768px)': {
    justifyContent: 'flex-start'
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  },
  [theme.breakpoints.down('xs')]: {
    justifyContent: 'center',
    paddingRight: theme.spacing(3)
  }
}));
