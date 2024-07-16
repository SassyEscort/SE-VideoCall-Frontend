import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const UIStyledInputText = styled(TextField)(({ theme }) => ({
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: '#ff68c0 !important'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary[800]
    }
  },
  '&.MuiFormControl-root': { border: 'none' },
  '& .MuiOutlinedInput-notchedOutline': {
    ':after': {
      borderBottom: 'none'
    },
    ':before': {
      borderBottom: 'none'
    },
    border: '2px solid',
    borderColor: theme.palette.primary[700]
  },
  '& .MuiInputBase-root': {
    borderRadius: theme.spacing(1),
    height: '100%',
    minHeight: '50px',
    padding: '12px 16px ',
    '& .MuiOutlinedInput-input': {
      padding: 0
    }
  },
  '&.MuiInput-underline': {
    ':after': {
      borderBottom: 'none'
    },
    ':before': {
      borderBottom: 'none'
    }
  },
  '& label': {
    left: '5px',
    lineHeight: 'initial',
    '&.MuiInputLabel-shrink': {
      left: 0,
      lineHeight: '1.5em'
    }
  }
}));

export const UIStyledInputTextCountry = styled(TextField)(({ theme }) => ({
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: '#ff68c0 !important'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary[800]
    }
  },
  '&.MuiFormControl-root': { border: 'none' },
  '& .MuiOutlinedInput-notchedOutline': {
    ':after': {
      borderBottom: 'none'
    },
    ':before': {
      borderBottom: 'none'
    },
    border: '2px solid',
    borderColor: theme.palette.primary[700]
  },
  '& .MuiInputBase-root': {
    borderRadius: theme.spacing(1),
    height: '100%',
    minHeight: '50px',
    padding: '12px 16px ',
    '& .MuiOutlinedInput-input': {
      padding: 0
    }
  },
  '&.MuiInput-underline': {
    ':after': {
      borderBottom: 'none'
    },
    ':before': {
      borderBottom: 'none'
    }
  },
  '& label': {
    left: '5px',
    lineHeight: 'initial',
    '&.MuiInputLabel-shrink': {
      left: 0,
      lineHeight: '1.5em'
    }
  }
}));
