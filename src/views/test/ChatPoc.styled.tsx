import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ChatFeatureMainBox = styled(Box)(({ theme }) => ({
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
  }
}));
