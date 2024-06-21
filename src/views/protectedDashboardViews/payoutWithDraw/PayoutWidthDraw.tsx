import { Box, Dialog, DialogTitle, Divider, styled } from '@mui/material';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

export const DialogContentMain = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.secondary[800],
    borderRadius: theme.spacing(1.5),
    maxWidth: '648px'
  },
  '& .MuiDialog-container': {
    backdropFilter: 'blur(24px)'
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiDialog-paper': {
      backgroundColor: 'transparent'
    }
  }
}));

export const DialogTitleBox = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingLeftL: theme.spacing(1.875)
  }
}));

export const FirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const SecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}));

export const ThreeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const ForBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down(375)]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1)
  }
}));

export const FiveBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2.5)
}));

export const SixBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.75),
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export const SevenBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5)
}));

export const ChooseYourBankFristBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const ChooseYourBankSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5)
}));

export const ChooseYourBankthreeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const PayoutDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: theme.palette.primary[200],
  border: '1px solid ',
  borderColor: theme.palette.primary[400],
  borderRadius: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: ' flex-start',
    alignItems: 'flex-start',
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    gap: theme.spacing(6)
  }
}));

export const PayoutFirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(0)
  }
}));

export const PayoutSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5)
}));

export const PayoutThreeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  paddingRight: theme.spacing(3)
}));

export const PayoutDetailSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: theme.palette.primary[700],
  borderRadius: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: ' flex-start',
    alignItems: 'flex-start',
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    gap: theme.spacing(6)
  },
  cursor: 'pointer'
}));

export const PayoutDetailThreeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(0)
  }
}));

export const PayoutDetailForBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5)
}));

export const PayoutDetailFiveBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  paddingRight: theme.spacing(3)
}));

export const PayoutDetailSixBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5)
}));

export const ImageBox = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  width: '100%',
  maxWidth: '20px',
  height: '20px'
}));

export const SmallScreenBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

export const SamllScreenFirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}));

export const ExpandIcon = styled(ExpandMoreOutlinedIcon)(({ theme }) => ({
  width: '16px',
  height: '16px'
}));

export const dividerBox = styled(Divider)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  border: '1px solid',
  borderColor: theme.palette.primary[700]
}));
