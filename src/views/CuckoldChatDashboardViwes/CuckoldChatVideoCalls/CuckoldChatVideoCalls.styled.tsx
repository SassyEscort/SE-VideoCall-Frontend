import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const CuckoldChatVideoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '85px',
  width: '100%',
  height: '100%',
  position: 'relative',
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    gap: '48px',
    flexDirection: 'column'
  },
  [theme.breakpoints.up('lg')]: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  [theme.breakpoints.down('lg')]: {
    paddingInline: theme.spacing(1.87)
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    marginTop: theme.spacing(5)
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

export const CuckoldChatVideoFirstBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(4.5)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(6)
  }
}));

export const CuckoldChatVideoSecBoxContainer = styled(Box)(({ theme }) => ({
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

export const CuckoldChatVideoInlineBox = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  flexFlow: 'column-wrap',
  wordBreak: 'break-word',
  display: 'inline',
  [theme.breakpoints.down('sm')]: {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: '50px',
    textAlign: 'center'
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

export const ExclusiveSexChatInlineBoxRelative = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  color: theme.palette.primary[600],
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}));

export const CuckoldChatVideoBannerImageCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
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
  },
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center'
  }
}));

export const CuckoldChatVideoSubtitleTypographyBox = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  width: '100%',
  color: theme.palette.secondary[100],
  [theme.breakpoints.down('sm')]: {
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

export const ExclusiveSexChatSubtitlePointsTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  width: '100%',
  color: theme.palette.secondary[100],
  fontSize: 18,
  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
    lineHeight: '24px',
    textAlign: '-webkit-center'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: 20,
    lineHeight: '32px'
  }
}));
