import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const GoldPackageMobileCom = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(9),
  backgroundColor: '#100B19',
  width: '100%',
  padding: theme.spacing(3)
}));

export const ProfileStatiscsMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  position: 'relative',
  marginTop: theme.spacing(4),
  left: '10px',
  [theme.breakpoints.down('sm')]: {
    left: 0
  }
}));

export const ProfileStatiscsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(1),
    width: '100%'
  }
}));

export const UINewTypographyEarningsOverview = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '38px',
  lineHeight: '47.5px',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(2),
    fontSize: '24px'
  }
}));

export const ProfileDOBMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row'
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    width: '100%'
  }
}));

export const ProfileDOBContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyConten: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse'
  },
  gap: theme.spacing(1)
}));

export const ProfileDOBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center'
}));

export const ProfileDOBoxMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
  padding: theme.spacing(1)
}));

export const ProfilePieMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  width: '100%',
  flexDirection: 'column'
}));

export const ProfilePieContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row'
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));

export const ProfileBackSide = styled(Box)(({ theme }) => ({
  backgroundColor: '#100B19',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  width: '100%',
  height: '100%',
  minHeight: theme.spacing(16.875),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flexStart',
  gap: theme.spacing(0.5)
}));

export const ProfileTotalVisits = styled(Box)(({ theme }) => ({
  backgroundColor: '#100B19',
  width: '100%',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2.5),
  gap: theme.spacing(0.125)
}));

export const CircleMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}));

export const FormControlBox = styled(FormControl)(() => ({
  display: 'flex',
  gap: '20px',
  width: '100%',
  '& .MuiInputBase-input': {
    pr: '0px !important'
  }
}));

export const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  width: '100%',
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '2px solid',
    borderColor: theme.palette.secondary.light
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    maxHeight: 50,
    [theme.breakpoints.up('md')]: {
      width: '160px'
    }
  },
  '& .mui-style-i4bv87-MuiSvgIcon-root': {
    color: '#86838A'
  },
  '& .MuiSvgIcon-root': {
    color: '#B7B5B9 !important'
  },
  '@media (min-width: 600px)': {
    width: 'auto'
  },
  '& .MuiPickersCalendarHeader-switchViewIcon, & .MuiPickersArrowSwitcher-button': {
    color: theme.palette.common.white
  }
}));

export const StyledDatePickerPayout = styled(DatePicker)(({ theme }) => ({
  width: '100%',
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '2px solid',
    borderColor: theme.palette.secondary.light
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    maxHeight: 40,
    [theme.breakpoints.up('md')]: {
      width: '160px'
    }
  },
  '& .mui-style-i4bv87-MuiSvgIcon-root': {
    color: '#86838A'
  },
  '& .MuiSvgIcon-root': {
    color: '#B7B5B9 !important'
  },
  '@media (min-width: 600px)': {
    width: 'auto'
  },
  '& .MuiPickersCalendarHeader-switchViewIcon, & .MuiPickersArrowSwitcher-button': {
    color: theme.palette.common.white
  }
}));
