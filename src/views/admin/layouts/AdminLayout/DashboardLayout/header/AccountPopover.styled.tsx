import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export interface ButtonBaseContainer {
  notificationBgColor: string;
}

export const StyledIconButton = styled(IconButton)(({ open }: { open: boolean }) => ({
  p: 0,
  ...(open && {
    '&:before': {
      zIndex: 1,
      content: "''",
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      position: 'absolute'
    }
  })
}));

export const NotificationBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: theme.spacing(0.75),
    right: theme.spacing(0.75),
    height: theme.spacing(1.25),
    width: theme.spacing(1.25),
    borderRadius: theme.spacing(0.75)
  }
}));

export const MainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'flex-start',
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  position: 'relative',
  width: '100%'
}));

export const FiberManualRecordBox = styled(FiberManualRecord)(() => ({
  width: 10,
  height: 32,
  position: 'absolute',
  left: 4
}));

export const TypographyBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  alignItems: 'start'
}));

export const ButtonBaseContainerAvatar = styled(Avatar)<ButtonBaseContainer>(({ notificationBgColor }) => ({
  height: 32,
  width: 32,
  backgroundColor: notificationBgColor ? 'transparent' : '#290F1E'
}));

export const StickyMain = styled(Box)(() => ({
  position: 'sticky',
  top: 0,
  zIndex: 1,
  backgroundColor: 'white'
}));

export const StickyMainInner = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  paddingRight: theme.spacing(0.5),
  paddingLeft: theme.spacing(2)
}));

export const IconButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5)
}));

export const NotificationsNoneBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1.5)
}));
