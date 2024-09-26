import { Box, Button, Dialog, DialogTitle, styled, TableCell } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

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
    maxWidth: '291px',
    width: '100%',
    margin: theme.spacing(-4),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
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

export const ModelDeleteMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  alignItems: 'center'
}));

export const TextBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '245px',
  textAlign: 'center'
}));

export const TextContainer = styled(UINewTypography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '21px',
  color: '#000000'
}));

export const ButtonText = styled(Button)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '14.52px'
}));

export const TableCellContent = styled(TableCell)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 800,
  lineHeight: '19.12px',
  whiteSpace: 'nowrap'
}));
