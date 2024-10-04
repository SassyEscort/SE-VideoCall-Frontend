'use client';
import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ImageContainer = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '48px',
  height: '100%',
  maxHeight: '48px',
  backgroundImage: `url(/images/workercards/workercard-img.jpeg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    borderRadius: '16px'
  },
  [theme.breakpoints.up('sm')]: {
    borderRadius: '50%'
  }
}));

export const ProfileImageContainer = styled('img')(({ theme }) => ({
  width: '100%',
  minWidth: '24px',
  height: '100%',
  minHeight: '24px',
  backgroundImage: `url(/images/workercards/workercard-img.jpeg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '50%'
}));

export const ChatMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  backgroundColor: '#100B19',
  border: '1px solid #100B19',
  [theme.breakpoints.down('sm')]: {
    borderRadius: 0
  },
  [theme.breakpoints.up('sm')]: {
    borderRadius: '24px'
  }
}));

export const ModelDetailsMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '425px',
    gap: theme.spacing(3),
    paddingLeft: theme.spacing(2.5),
    paddingTop: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5)
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '372px',
    gap: theme.spacing(4),
    paddingLeft: theme.spacing(2.5),
    paddingTop: theme.spacing(2.5),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2.5)
  }
}));

export const ModelHeaderBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

export const ModelReplyBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  alignItems: 'center'
}));

export const OnlineFirstBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minWidth: '12px',
  height: '100%',
  maxHeight: '12px',
  border: '1px  #79E02852',
  borderRadius: '50%',
  backgroundColor: '#79E02852'
}));

export const OnlineSecBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '8px',
  height: '100%',
  maxHeight: '8px',
  border: '1px  #79E028',
  borderRadius: '50%',
  backgroundColor: '#79E028'
}));

export const SearchBoxContainer = styled(TextField)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  border: '1px solid #E9E8EB29',
  borderRadius: '8px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '370px'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '320px'
  }
}));

export const MobileSearchBoxContainer = styled(TextField)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  border: '1px solid #1E0815',
  borderRadius: '4px',
  height: '100%',
  maxHeight: '40px',
  alignItems: 'center',
  backgroundColor: '#1E0815',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '370px'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '320px'
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1)
  }
}));

export const ModelDetailsInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(3)
  }
}));

export const ModelInformationMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'space-between',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    minHeight: '56px'
  },
  [theme.breakpoints.up('sm')]: {
    minHeight: '48px'
  }
}));

export const ModelInformationInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  width: '100%'
}));

export const ModelNameBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.25)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(0.75)
  }
}));

export const ChatBoxMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: theme.spacing(2.5),
  paddingTop: theme.spacing(2.5),
  paddingRight: theme.spacing(4),
  paddingBottom: theme.spacing(2.5),
  width: '100%',
  height: '100%'
}));

export const ChatBoxInnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  minHeight: '80vh'
}));

export const ChatBoxHeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingRight: '20px',
  paddingLeft: '20px',
  width: '100%',
  justifyContent: 'space-between',
  heigh: '100%',
  minHeight: '40px'
}));

export const ChatBoxHeaderInnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center'
}));

export const ModelNameContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));

export const TextMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  paddingRight: theme.spacing(4),
  gap: theme.spacing(1)
}));

export const ClientChatMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  width: '100%',
  alignItems: 'flex-end'
}));

export const ModelChatMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const ClientChatTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  minHeight: '46px',
  paddingTop: theme.spacing(1.5),
  paddingBotton: theme.spacing(1.5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  border: '1px solid #1E0815',
  borderRadius: '8px',
  justifyContent: 'end',
  backgroundColor: '#1E0815'
}));

export const ModelChatTextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  maxWidth: 'fit-content',
  minHeight: '46px',
  paddingTop: theme.spacing(1.5),
  paddingBotton: theme.spacing(1.5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  border: '1px solid #611441',
  borderRadius: '8px',
  backgroundColor: '#611441'
}));

export const PendingMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}));

export const PendingInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  border: '1px #FF68C0',
  borderRadius: '48px',
  backgroundColor: '#FF68C0',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    minWidth: '29px',
    maxHeight: '21px'
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '29px',
    maxHeight: '21px'
  }
}));

export const ModelNameText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '20px'
  }
}));

export const ModelDescriptionText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '20px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16.8px'
  }
}));
