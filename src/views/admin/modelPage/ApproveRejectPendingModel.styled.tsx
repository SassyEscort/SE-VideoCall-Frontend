import { Box, Button, Dialog, DialogTitle, Divider, styled, Typography } from '@mui/material';

export const DialogTitleBox = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}));

export const DialogContentMain = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: theme.spacing(1.5),
    maxWidth: '399px',
    width: '100%',
    margin: theme.spacing(-4),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },

  '& .MuiDialog-container': {
    backdropFilter: 'blur(24px)'
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiDialog-paper': {
      backgroundColor: 'transparent',
      width: '100%'
    }
  }
}));

export const ModelMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5)
}));

export const ApprovedButtonContainer = styled(Button)(({ theme }) => ({
  height: '27px',
  width: '95.51px',
  backgroundColor: 'rgba(0, 182, 155, 0.2)',
  border: '1px solid rgba(0, 182, 155, 0.2)',
  borderRadius: '5px',
  cursor: 'pointer'
}));

export const ButtonTextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: '16.39px'
}));

export const RejectedButtonContainer = styled(Button)(({ theme }) => ({
  height: '27px',
  width: '95.51px',
  backgroundColor: 'rgba(239, 56, 38, 0.2)',
  border: '1px solid rgba(239, 56, 38, 0.2)',
  borderRadius: '5px',
  cursor: 'pointer'
}));

export const PendingButtonContainer = styled(Button)(({ theme }) => ({
  height: '27px',
  width: '95.51px',
  backgroundColor: 'rgba(255, 167, 86, 0.2)',
  border: '1px solid rgba(255, 167, 86, 0.2)',
  borderRadius: '5px',
  cursor: 'pointer'
}));

export const ModelInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const ModelDetailsMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  width: '100%',
  height: '100%'
}));

export const ModelImageBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '90px',
  height: '100%',
  minHeight: '90px',
  backgroundColor: '#D9D9D9',
  borderRadius: '50%'
}));

export const ModelDetailsInnerBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5)
}));

export const ModelDetailsText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '21.86px'
}));

export const ModelBioText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px'
}));

export const ModelDetailsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));

export const DividerContainer = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.common.black,
  height: '15px',
  marginTop: '5px'
}));

export const ApproveMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

export const TotalCallDurationBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const DurationText = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 800,
  lineHeight: '32.78px'
}));

export const CallDurationText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '19.12px'
}));

export const RejectedModelInnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const RejectedText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px'
}));

export const ViewDetailsText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '21.86px',
  cursor: 'pointer'
}));

export const ButtonBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3)
}));

export const ApproveButton = styled(Button)(({ theme }) => ({
  cursor: 'pointer',
  width: '97px',
  height: '31px',
  backgroundColor: '#00B69B',
  border: '1px solid #00B69B',
  borderRadius: '4px'
}));

export const DeclineButton = styled(Button)(({ theme }) => ({
  cursor: 'pointer',
  width: '97px',
  height: '31px',
  backgroundColor: '#FF5959',
  border: '1px solid #FF5959',
  borderRadius: '4px'
}));

export const ButtonText = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '14.52px'
}));
