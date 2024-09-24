import { FormControl, OutlinedInput } from '@mui/material';
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
  },
  '& .cc__icon': {
    color: '#B7B5B9 !important'
  },
  [theme.breakpoints.down('sm')]: {
    '& .cc-conversations-with-messages__wrapper': {
      minHeight: '100vh'
    }
  }
}));

export const ComposeMessageControlWrapper = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  background: `var(--Surface-Tags, ${theme.palette.primary[700]})`
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
