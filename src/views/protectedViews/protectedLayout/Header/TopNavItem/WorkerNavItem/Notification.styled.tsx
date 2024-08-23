import { Avatar, Drawer, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export interface ButtonBaseContainerProps {
  notificationIsRead: boolean;
}

export const NotificationContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: theme.spacing(1),
  borderTop: '1px solid',
  borderColor: theme.palette.primary[700]
}));

export const ButtonBaseContainer = styled(Box)<ButtonBaseContainerProps>(({ theme, notificationIsRead }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  padding: theme.spacing(2.5),
  position: 'relative',
  width: '100%',
  backgroundColor: notificationIsRead ? 'transparent' : '#290F1E'
}));

export const BaseContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: theme.spacing(2)
}));

export const AvatarContainer = styled(Avatar)(() => ({
  alignItems: 'flex-start',
  backgroundColor: 'transparent !important'
}));

export const MainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between'
}));

export const TypographyBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexDirection: 'column'
}));

export const TypographyBox2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: theme.spacing(1)
}));

export const TypographyCreate = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 400,
  lineHeight: '22.4px',
  fontSize: '16px',
  color: theme.palette.secondary[700]
}));
export const ExistNotificationsMainBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%'
}));

export const IconButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5)
}));

export const IconButtonBoxNew = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}));

export const IconButtonMainBox = styled(Box)(() => ({
  position: 'sticky',
  top: 0,
  zIndex: 1,
  backgroundColor: '#1E0815'
}));

export const IconButtonMain = styled(IconButton)(() => ({
  color: 'white',
  width: '40px',
  height: '40px'
}));

export const IconButtonInnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingLeft: theme.spacing(3)
}));

export const NotificationsNoneBox = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1.5),
  width: '100%',
  color: theme.palette.text.secondary
}));

export const DrawerBox = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '100%',
    maxWidth: 596,
    backgroundColor: '#1E0815',
    scrollbarWidth: 'none'
  }
}));

export const BoxIconNotification = styled('img')(() => ({
  width: '25px',
  height: '25px'
}));
