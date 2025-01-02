'use client';

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ElementType, forwardRef, ReactElement, Ref } from 'react';

export type CastedForwardRefNewThemeButtonType = <C extends ElementType>(
  props: ButtonProps<C, { component?: C }>,
  ref?: Ref<HTMLButtonElement>
) => ReactElement;

const UIStyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  padding: '4px 24px 4px 24px',
  borderRadius: '100px',
  gap: theme.spacing(1),
  fontSize: '16px',
  fontWeight: 700,
  '&.MuiButton-root': {
    height: '48px',
    backgroundColor: theme.palette.primary[100],
    color: '#FFF'
  },
  '&.MuiButton-root:hover': {
    backgroundColor: theme.palette.primary[100],
    color: '#FFF'
  },
  '&.MuiButton-outlined': {
    backgroundColor: theme.palette.common.black,
    color: '#FFF',
    fontSize: '16px',
    border: '1px solid #D4D3D6'
  },
  '&.MuiButton-outlined:hover': {
    backgroundColor: theme.palette.primary[200],
    color: '#FFF',
    fontSize: '16px'
  },
  '&.MuiButton-outlinedWhite:hover': {
    backgroundColor: theme.palette.primary[800]
  },
  '&.MuiButton-sizeLarge': {
    fontSize: '20px',
    padding: '20px 32px'
  },
  '&.MuiButton-sizeSmall': {
    padding: '9px 20px 9px 20px',
    height: 35
  },
  '&.MuiButton-contained:hover': {
    backgroundColor: theme.palette.primary[800]
  },
  '&.MuiButton-contained': {
    backgroundColor: theme.palette.primary[400]
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.primary[700],
    color: theme.palette.secondary.light
  }
}));

const CastedForwardRefButtonFnc: CastedForwardRefNewThemeButtonType = (props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;

  return (
    <UIStyledButton ref={ref} {...rest}>
      {children}
    </UIStyledButton>
  );
};
const UINewStyledShadowButton = forwardRef(CastedForwardRefButtonFnc) as CastedForwardRefNewThemeButtonType;

export default UINewStyledShadowButton;
