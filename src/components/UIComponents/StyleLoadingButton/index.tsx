import { forwardRef } from 'react';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { CastedForwardRefButtonType } from '../types';

const UIStyledLoadingButtonV2 = styled(LoadingButton)(({ theme }) => ({
  textTransform: 'none',
  padding: '12px 32px 12px 32px',
  borderRadius: '8px',
  gap: theme.spacing(1),
  fontSize: '16px',
  fontWeight: 700,
  color: '#290F1E',
  '&.MuiButton-root': {
    height: '48px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary[200]
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
    <UIStyledLoadingButtonV2 ref={ref} {...rest}>
      {children}
    </UIStyledLoadingButtonV2>
  );
};
const StyleButtonV2 = forwardRef(CastedForwardRefButtonFnc) as CastedForwardRefButtonType;

export default StyleButtonV2;
