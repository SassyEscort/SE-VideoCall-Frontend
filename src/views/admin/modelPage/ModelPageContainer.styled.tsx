import { Card, Chip, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import { styled } from '@mui/system';

export const ModelActionPopover = styled(Popover)(({ theme }) => ({
  '& .MuiMenuItem-root': {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.75),
    typography: 'body2'
  },
  '& .MuiPaper-root': {
    width: 170,
    padding: theme.spacing(1)
  }
}));

export const FilterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '818px',
  border: '1px solid #D5D5D5',
  borderRadius: '10px',
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));
export const SortBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'end',
  width: '100%'
}));
export const NotFoundBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2)
}));

export const PandingChipBox = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255, 167, 86, 0.2)',
  border: '1px solid rgba(255, 167, 86, 0.2)',
  borderRadius: '4px',
  width: '92.51px',
  height: '27px',
  color: '#FFA756',
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '16.39px'
}));

export const SuccessChipBox = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(0, 182, 155, 0.2)',
  border: '1px solid rgba(0, 182, 155, 0.2)',
  borderRadius: '4px',
  width: '92.51px',
  height: '27px',
  color: '#00B69B',
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '16.39px'
}));

export const ErrorChipBox = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(239, 56, 38, 0.2)',
  border: '1px solid rgba(239, 56, 38, 0.2)',
  borderRadius: '4px',
  width: '92.51px',
  height: '27px',
  color: '#EF3826',
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '16.39px'
}));

export const SwitchBoxContainer = styled(Switch)(({ theme }) => ({
  width: 30,
  height: 19,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    transitionDuration: '300ms',
    '& .MuiTouchRipple-root': {
      height: 1.5,
      width: 1.5,
      left: '2px',
      top: '1.5px'
    },
    '&.Mui-checked': {
      border: 'none',
      transform: 'translateX(12px)',
      '& + .MuiSwitch-track': {
        border: 'none',
        backgroundColor: '#79E02833',
        opacity: 1
      },
      '&.MuiSwitch-switchBase .MuiSwitch-thumb': {
        boxShadow: 'none',
        height: 12,
        width: 12,
        backgroundColor: 'rgba(121, 224, 40, 1)'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    position: 'relative',
    backgroundColor: 'rgba(183, 181, 185, 1)',
    marginLeft: '-4px',
    bottom: '6px',
    width: 12,
    height: 12
  },
  '& .MuiSwitch-track': {
    border: '3px solid',
    borderColor: 'rgba(88, 83, 94, 1)',
    borderRadius: theme.spacing(1.5),
    backgroundColor: 'rgba(88, 83, 94, 1)',
    opacity: 1
  }
}));

export const AllModelMainBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const FirstFilterBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '68px',
  cursor: 'pointer'
}));

export const FilterByBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '104px',
  cursor: 'pointer'
}));

export const CardBoxContainer = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: 'white.main',
  borderRadius: '14px'
}));
