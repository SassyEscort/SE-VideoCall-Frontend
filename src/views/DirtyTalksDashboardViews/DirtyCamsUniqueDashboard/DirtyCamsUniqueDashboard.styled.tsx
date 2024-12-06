import Box from '@mui/material/Box';
import styled from '@mui/system/styled';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const DirtyCamsUniqueChatTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '26px',
  fontWeight: 400,
  lineHeight: '44.72px',
  color: theme.palette.white.main,
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    lineHeight: '36px'
  }
}));

export const ChatWorksTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '26px',
  fontWeight: 400,
  lineHeight: '44.72px',
  width: '180px',
  color: theme.palette.white.main,
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    lineHeight: '36px'
  }
}));

export const HowChatWorksRotateChipContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary[400],
  borderRadius: theme.spacing(1.5),
  rotate: '358deg',
  width: 'fit-content',
  paddingBlock: theme.spacing(0.5),
  paddingInline: theme.spacing(1.25)
}));

export const DirtyCamsUniqueMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(9),
  color: theme.palette.white.main,
  marginBlock: theme.spacing(20),
  paddingInline: theme.spacing(1.87),
  [theme.breakpoints.down('sm')]: {
    marginBlock: theme.spacing(6)
  },
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(6),
    marginBlock: theme.spacing(8)
  }
}));

export const DirtyCamsUniqueInnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  maxWidth: 993,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(3)
  }
}));

export const DirtyCamsUniqueTableBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4)
}));
