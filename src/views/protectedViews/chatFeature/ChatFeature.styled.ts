import { ConversationsStyle, MessagesStyle, ReceiptStyle, ListItemStyle, MessageHeaderStyle } from '@cometchat/chat-uikit-react';
import { FormControl, OutlinedInput } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ChatFeatureMainBox = styled(Box)(({ theme }) => ({
  maxHeight: '728px',
  '& .cc-conversations-with-messages__main': {
    maxHeight: '90%'
  },
  '& .cc-list__title': {
    lineHeight: `${theme.spacing(3)} !important`
  },
  '& .cc-conversations__subtitle-text': {
    lineHeight: '16.8px !important'
  },
  '& .cc-list__content': {
    height: `70vh !important`,
    overflowY: 'auto',
    padding: '0 !important'
  },
  '&cometchat-conversation-with-message::part(message-input)': {
    backgroundColor: '#f0f0f0',
    color: '#333'
  },
  '& .cc__item__innerTitle': {
    fontFamily: 'Manrope !important'
  },
  '& .cc__messageinfo__header': {
    '& .cc__icon': {
      background: '#FFF !important'
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& .cc-conversations-with-messages__wrapper': {
      minHeight: '100vh'
    }
  },
  '& ::-webkit-scrollbar': {
    width: '2px'
  },
  '& ::-webkit-scrollbar-thumb': {
    background: '#f0f0f0'
  }
}));

export const ComposeMessageControlWrapper = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1)
}));

export const VideoCallImageBox = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  marginRight: theme.spacing(1.5)
}));

export const ChatMessageInput = styled(OutlinedInput)(({ theme }) => ({
  '& .end-adornment-main-box': {
    display: 'flex',
    placeItems: 'center',
    gap: theme.spacing(1.5)
  },
  '& .heart-box': {
    borderRadius: '50%',
    background: `var(--Surface-Primary, ${theme.palette.secondary[800]})`,
    padding: '8px',
    placeItems: 'center',
    display: 'flex'
  },
  '& .send-button': {
    backgroundColor: theme.palette.primary[500],
    font: "600 16px/19.2px 'Manrope'",
    textAlign: 'left',
    padding: '10px 24px'
  }
}));

export const conversationsStyle = new ConversationsStyle({
  titleTextColor: '#B7B5B9',
  typingIndictorTextColor: '#B7B5B9',
  lastMessageTextColor: '#B7B5B9'
});

export const messagesStyle = new MessagesStyle({
  height: '100%'
});

export const receiptStyle = new ReceiptStyle({
  width: '16px',
  height: '16px',
  readIconTint: '#B7B5B9',
  sentIconTint: '#B7B5B9'
});

export const listItemStyle = new ListItemStyle({
  background: 'transparent',
  titleColor: '#E9E8EB',
  titleFont: 'Manrope'
});

export const messageHeaderStyle = new MessageHeaderStyle({
  backButtonIconTint: 'white',
  typingIndicatorTextColor: 'white',
  subtitleTextFont: 'red'
});
