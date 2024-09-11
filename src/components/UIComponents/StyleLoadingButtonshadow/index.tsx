import { forwardRef } from 'react';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { CastedForwardRefButtonType } from '../types';

const UIStyledLoadingButtonShadowV2 = styled(LoadingButton)(({ theme }) => ({
  textTransform: 'none',
  paddingTop: theme.spacing(1.5),
  paddingRight: theme.spacing(4),
  paddingBottom: theme.spacing(1.5),
  paddingLeft: theme.spacing(4),
  borderRadius: theme.spacing(1),
  gap: theme.spacing(1),
  fontSize: '16px',
  fontWeight: 700,
  color: '#290F1E',
  '&.MuiButton-root': {
    height: '48px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary[200],
    boxShadow: '0px 0px 32px 8px #FF68C07A'
  },

  '&.MuiButton-outlined': {
    border: `2px solid`
  },
  '&.MuiButton-outlined:hover': {
    backgroundColor: theme.palette.primary[200],
    color: '#FFF',
    fontSize: '16px'
  },
  '&.MuiButton-text, &.MuiButton-text:hover': {
    backgroundColor: 'transparent',
    color: '#FFF'
  },
  '&.MuiButton-outlinedWhite:hover': {
    backgroundColor: theme.palette.primary[800]
  },
  '&.MuiButton-contained': {
    backgroundColor: theme.palette.primary[400]
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.primary[700],
    color: theme.palette.secondary.light
  },
  '& .MuiLoadingButton-loadingIndicator': {
    color: theme.palette.primary.main
  }
}));

export const UIStyledLoadingButtonShadowCallHistoryV2 = styled(LoadingButton)(({ theme }) => ({
  textTransform: 'none',
  paddingTop: theme.spacing(1.5),
  paddingRight: theme.spacing(4),
  paddingBottom: theme.spacing(1.5),
  paddingLeft: theme.spacing(4),
  borderRadius: theme.spacing(1),
  gap: theme.spacing(1),
  fontSize: '16px',
  fontWeight: 700,
  color: '#290F1E',
  '&.MuiButton-root': {
    height: '48px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary[200],
    boxShadow: '0px 0px 32px 8px #FF68C07A'
  },
  [theme.breakpoints.down('sm')]: {
    '&.MuiButton-root': {
      width: '363px'
    }
  },

  '&.MuiButton-outlined': {
    border: `2px solid`
  },
  '&.MuiButton-outlined:hover': {
    backgroundColor: theme.palette.primary[200],
    color: '#FFF',
    fontSize: '16px'
  },
  '&.MuiButton-text, &.MuiButton-text:hover': {
    backgroundColor: 'transparent',
    color: '#FFF'
  },
  '&.MuiButton-outlinedWhite:hover': {
    backgroundColor: theme.palette.primary[800]
  },
  '&.MuiButton-contained': {
    backgroundColor: theme.palette.primary[400]
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.primary[700],
    color: theme.palette.secondary.light
  },
  '& .MuiLoadingButton-loadingIndicator': {
    color: theme.palette.primary.main
  }
}));

export const UIStyledLoadingButtonShadowCallHistory = styled(LoadingButton)(({ theme }) => ({
  textTransform: 'none',
  paddingTop: theme.spacing(1.5),
  paddingRight: theme.spacing(4),
  paddingBottom: theme.spacing(1.5),
  paddingLeft: theme.spacing(4),
  borderRadius: theme.spacing(1),
  gap: theme.spacing(1),
  fontSize: '16px',
  fontWeight: 700,
  color: '#290F1E',
  '&.MuiButton-root': {
    [theme.breakpoints.down('sm')]: {
      height: '36px'
    },
    [theme.breakpoints.up('sm')]: {
      height: '48px'
    },
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary[200],
    boxShadow: '0px 0px 32px 8px #FF68C07A'
  },
  [theme.breakpoints.up('sm')]: {
    '&.MuiButton-root': {
      width: '100%',
      maxWidth: '220px !important'
    }
  },

  [theme.breakpoints.down('sm')]: {
    '&.MuiButton-root': {
      width: '100%',
      maxWidth: '180px !important'
    }
  },

  [theme.breakpoints.only('md')]: {
    '&.MuiButton-root': {
      width: '100%',
      minWidth: '163px'
    }
  },

  '&.MuiButton-outlined': {
    border: `2px solid`
  },
  '&.MuiButton-outlined:hover': {
    backgroundColor: theme.palette.primary[200],
    color: '#FFF',
    fontSize: '16px'
  },
  '&.MuiButton-text, &.MuiButton-text:hover': {
    backgroundColor: 'transparent',
    color: '#FFF'
  },
  '&.MuiButton-outlinedWhite:hover': {
    backgroundColor: theme.palette.primary[800]
  },
  '&.MuiButton-contained': {
    backgroundColor: theme.palette.primary[400]
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.primary[700],
    color: theme.palette.secondary.light
  },
  '& .MuiLoadingButton-loadingIndicator': {
    color: theme.palette.primary.main
  }
}));
const CastedForwardRefButtonFnc: CastedForwardRefButtonType = (props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;

  return (
    <UIStyledLoadingButtonShadowV2 ref={ref} {...rest}>
      {children}
    </UIStyledLoadingButtonShadowV2>
  );
};
const StyleButtonShadowV2 = forwardRef(CastedForwardRefButtonFnc) as CastedForwardRefButtonType;

export default StyleButtonShadowV2;
