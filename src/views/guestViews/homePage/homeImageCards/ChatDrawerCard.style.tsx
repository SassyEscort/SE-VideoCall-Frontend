import { Button, Popover, SwipeableDrawer } from '@mui/material';
import Box from '@mui/material/Box';
import styled from '@mui/system/styled';
import { IHistoryOfChats } from 'views/protectedModelViews/verification/verificationTypes';

export const ChatDrawerBoxHeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingRight: '20px',
  paddingLeft: '20px',
  width: '100%',
  height: '100%',
  minHeight: '64px',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5),
    paddingTop: theme.spacing(1.5)
  },
  alignItems: 'center',
  justifyContent: 'space-between'
}));

export const ChatDrawerModelNameContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center'
}));

export const ChatDrawerBoxHeaderInnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center'
}));

export const ChatDrawerProfileImageContainer = styled(Box)(({ theme }) => ({
  width: '32px',
  height: '32px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '40px'
}));

export const ChatDrawerTextMainBoxContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column'
  //   alignItems: 'center'
}));

export const ChatDraweClientChatMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  alignItems: 'flex-end'
}));

export const ChatDraweClientChatTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  minHeight: 35,
  width: '100%',
  maxWidth: 'fit-content',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  border: '1px solid #FF68C0',
  borderRadius: '8px',
  backgroundColor: '#FF68C0'
}));

export const ChatDrawerModelChatMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const ChatDrawerModelChatTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  maxWidth: 'fit-content',
  minHeight: 35,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  border: '1px solid #1E0815',
  borderRadius: '8px',
  backgroundColor: '#1E0815'
}));

export const ChatWidgetsPopover = styled(Popover)(({ theme }) => ({
  '& .MuiMenuItem-root': {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.75),
    typography: 'body2'
  },
  '& .MuiPaper-root': {
    background: '#100B19',
    width: 300,
    height: 300,
    overflowY: 'auto',
    scrollbarWidth: 'none',
    padding: theme.spacing(1.5)
  }
}));

export const DrwarImageContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  height: 50,
  width: 50,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: '50px',
  backgroundPosition: 'center'
}));

export const SmallMessgePopBox = styled(Box)(() => ({
  zIndex: '3000005',
  position: 'fixed',
  bottom: '100px',
  right: '24px',
  width: '100%',
  maxWidth: '72px',
  height: '72px',
  borderRadius: '50px',
  border: '1px solid #FF68C0',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}));

export const ChatCountPopBox = styled(Box)(() => ({
  zIndex: '3000000',
  position: 'fixed',
  bottom: '15px',
  right: '24px',
  width: '100%',
  maxWidth: '72px',
  height: '72px',
  borderRadius: '50px',
  background: '#FF5959',
  boxShadow: '0px 4.27px 11.73px 0px #290F1E',
  color: '#FFFFFF'
}));

export const HistorySwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '.MuiDrawer-paper': {
    height: 472,
    width: '100%',
    maxWidth: 331,
    right: 0,
    left: 'auto',
    background: ' #611441',
    boxShadow: '0px 20px 30px 10px #D1228840',
    borderRadius: '12px 12px 0px 0px'
  },
  [theme.breakpoints.down('sm')]: {
    '.MuiDrawer-paper': {
      maxWidth: '100%'
    }
  }
}));

export const ChatMessageSwipeableDrawer = styled(SwipeableDrawer, {
  shouldForwardProp: (prop) => prop !== 'historyOfModels'
})<{ historyOfModels: IHistoryOfChats[] }>(({ theme, historyOfModels }) => ({
  '.MuiDrawer-paper': {
    height: 472,
    width: '100%',
    maxWidth: 331,
    right: historyOfModels?.length ? 351 : 0,
    left: 'auto',
    background: ' #611441',
    boxShadow: '0px 20px 30px 10px #D1228840',
    borderRadius: '12px 12px 0px 0px'
  },
  [theme.breakpoints.down('sm')]: {
    '.MuiDrawer-paper': {
      maxWidth: '100%',
      right: 0
    }
  }
}));

export const VideoCallIcon = styled(Button)(() => ({
  boxShadow: '0px 6.4px 25.6px 0px #FF68C0B8',
  background: '#FF68C0',
  borderRadius: '50px',
  minWidth: 40,
  minHeight: 40
}));

export const BottomChatHeaderDrawer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: 331,
  height: '100%',
  maxHeight: '56px',
  border: '1px solid #611441',
  backgroundColor: '#611441',
  zIndex: 3000001, // Increment zIndex for each box
  position: 'fixed',
  bottom: '0px',
  right: '351px',
  boxShadow: '0px 4px 12px 0px rgba(209, 34, 136, 0.25)',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2)
}));

export const BottomChatHeaderInnerBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between'
}));

export const HistoryBottomStikeyHeaderDrawer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '331px',
  height: '100%',
  maxHeight: '56px',
  border: '1px solid #FF5959',
  backgroundColor: '#FF5959',
  zIndex: '3000000',
  position: 'fixed',
  bottom: '0px',
  right: '0px',
  boxShadow: '0px 4px 12px 0px rgba(209, 34, 136, 0.25)',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2)
}));

export const HistoryBottomStikeyHeaderInnerBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center'
}));

export const SmallRoundHistoryBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  height: '100%'
}));
