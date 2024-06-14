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
  padding: '12px 32px 12px 32px',
  borderRadius: '8px',
  gap: theme.spacing(1),
  fontSize: '16px',
  fontWeight: 700,
  '&.MuiButton-root': {
    height: '48px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary[200]
  },
  '&.MuiButton-root:hover': {
    backgroundColor: theme.palette.primary[100],
    color: theme.palette.primary[200]
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
  '&.MuiButton-text, &.MuiButton-text:hover': {
    backgroundColor: 'transparent',
    color: '#FFF'
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
    color: theme.palette.text.disabled
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
const UIThemeButton = forwardRef(CastedForwardRefButtonFnc) as CastedForwardRefNewThemeButtonType;

export default UIThemeButton;
