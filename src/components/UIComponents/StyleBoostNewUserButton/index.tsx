import { forwardRef } from 'react';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { CastedForwardRefButtonType } from '../types';

const UIStyledBoostUserButton = styled(LoadingButton)(({ theme }) => ({
  textTransform: 'none',
  padding: '4px 12px 4px 12px',
  borderRadius: '100px',
  gap: theme.spacing(1),
  fontSize: '12px',
  fontWeight: 700,
  color: '#290F1E',
  '&.MuiButton-root': {
    width: '128px',
    height: '28px',
    background: 'linear-gradient(90deg, #5F72BD 0%, #9B23EA 100%)',
    color: '#F1F5F9',
    zIndex: 1,
    boxShadow: '0px 8px 33px 0px #FF68C08F',
    position: 'absolute',
    '@media (max-width: 380px)': {
      width: '100px'
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
  '&.MuiButton-outlinedWhite:hover': {
    backgroundColor: theme.palette.primary[800]
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
    <UIStyledBoostUserButton ref={ref} {...rest}>
      {children}
    </UIStyledBoostUserButton>
  );
};
const StyleBoostNewUserButton = forwardRef(CastedForwardRefButtonFnc) as CastedForwardRefButtonType;

export default StyleBoostNewUserButton;
