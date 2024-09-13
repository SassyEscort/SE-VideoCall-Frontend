import { forwardRef } from 'react';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { CastedForwardRefButtonType } from '../types';

const UIStyledBoostChip = styled(LoadingButton)(({ theme }) => ({
  textTransform: 'none',
  padding: '12px 30px 12px 30px',
  borderRadius: '4px',
  gap: theme.spacing(1),
  fontSize: '16px',
  fontWeight: 700,
  maxWidth: '150px',
  color: '#290F1E',
  '&.MuiButton-root': {
    height: '32px',
    background: 'linear-gradient(90deg, #FFE808 0%, #FFCE00 23.5%, #FF9A00 46.5%, #FF5A00 72.5%, #FF5C00 100%)',
    color: '#000',
    zIndex: 1,
    boxShadow: '0px 5px 32px 8px #FECD3D40'
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
    background: theme.palette.secondary[700],
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
    <UIStyledBoostChip ref={ref} {...rest}>
      {children}
    </UIStyledBoostChip>
  );
};
const StyledBoostChip = forwardRef(CastedForwardRefButtonFnc) as CastedForwardRefButtonType;

export default StyledBoostChip;
