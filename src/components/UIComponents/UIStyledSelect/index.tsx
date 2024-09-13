'use client';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

export const UIStyledSelect = styled(Select)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1),
  width: '100%',
  height: '48px',
  backgroundColor: theme.palette.primary[700],

  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary[700]
    }
  },
  '& .MuiSelect-select': {
    display: 'flex',
    overflow: 'hidden',
    gap: theme.spacing(1)
  },
  '& .MuiSvgIcon-root': {
    color: 'rgba(183, 181, 185, 1)'
  }
}));

export const UIStyledSelectAgeFilter = styled(Select)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1),
  width: '100%',
  height: '48px',
  backgroundColor: theme.palette.primary[700],
  paddingInline: theme.spacing(1.5),
  paddingTop: theme.spacing(1.375),
  paddingBottom: theme.spacing(1.375),
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary[700]
    }
  },
  '& .MuiSelect-select': {
    display: 'flex',
    overflow: 'hidden',
    gap: theme.spacing(1)
  },
  '& .MuiSvgIcon-root': {
    color: 'rgba(183, 181, 185, 1)'
  }
}));

export const UIStyledSelectAgeFilterSecond = styled(Select)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1),
  width: '100%',
  height: '48px',
  backgroundColor: theme.palette.primary[700],
  paddingInline: theme.spacing(1.5),
  paddingTop: theme.spacing(1.375),
  paddingBottom: theme.spacing(1.375),
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary[700]
    }
  },
  '& .MuiSelect-select': {
    display: 'flex',
    overflow: 'hidden',
    gap: theme.spacing(1)
  },
  '& .MuiSvgIcon-root': {
    color: 'rgba(183, 181, 185, 1)'
  }
}));
export const UIStyledCountrySelect = styled(Select)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1),
  width: '100%',
  height: '48px',
  backgroundColor: theme.palette.primary[700],
  paddingTop: theme.spacing(1.375),
  paddingBottom: theme.spacing(1.375),
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary[700]
    }
  },
  '& .MuiSelect-select': {
    display: 'flex',
    overflow: 'hidden',
    gap: theme.spacing(1)
  },
  '& .MuiSvgIcon-root': {
    color: 'rgba(183, 181, 185, 1)'
  }
}));

export const UIStyledSelectPastPayout = styled(Select)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1),
  cursor: 'pointer',
  width: '100%',
  maxWidth: '150px',
  height: '40px',
  backgroundColor: theme.palette.primary[700],

  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary[700]
    }
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(0, 2),
    display: 'flex',
    gap: theme.spacing(1)
  },
  '& .MuiSvgIcon-root': {
    color: 'rgba(183, 181, 185, 1)'
  }
}));

export const StyledSelectInputLabel = styled(InputLabel)(({ theme }) => ({
  display: 'flex',
  top: '-3px',
  color: theme.palette.secondary[200],
  gap: theme.spacing(1),
  alignItems: 'center',
  '&.MuiInputLabel-shrink': { top: 0 }
}));

const commonStyles = {
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

export const StyledSelectInputLabelAge = styled(InputLabel)(({ theme }) => ({
  display: 'flex',
  top: '-3px',
  color: theme.palette.secondary[200],
  gap: theme.spacing(1),
  alignItems: 'center',
  '&.MuiInputLabel-shrink': { top: 0 },
  '@media (max-width: 320px)': {
    ...commonStyles,
    maxWidth: '92px'
  },
  '@media (width: 1024px)': {
    '&.MuiFormLabel-root': {
      ...commonStyles,
      maxWidth: '100px'
    }
  }
}));

export const StyledSelectInputLabelRating = styled(InputLabel)(({ theme }) => ({
  display: 'flex',
  top: '-3px',
  color: theme.palette.secondary[200],
  gap: theme.spacing(1),
  alignItems: 'center',
  '&.MuiInputLabel-shrink': { top: 0 },
  '@media (max-width: 320px)': {
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '50px'
  }
}));

export const StyledEarningSelectInputLabel = styled(InputLabel)(({ theme }) => ({
  display: 'flex',
  top: '-8px',
  color: theme.palette.secondary[200],
  gap: theme.spacing(1),
  alignItems: 'center',
  maxWidth: '90px',
  '&.MuiInputLabel-shrink': { top: 0 },
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.up('md')]: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}));
