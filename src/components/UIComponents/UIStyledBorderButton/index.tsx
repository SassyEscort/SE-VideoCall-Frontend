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
  padding: '12px 16px 12px 16px',
  borderRadius: '8px',
  gap: theme.spacing(1),
  fontSize: '16px',
  fontWeight: 700,
  '&.MuiButton-outlined': {
    background: 'linear-gradient(black, black) padding-box, linear-gradient(to right, #FF68C0, #FFDFF2) border-box',
    borderRadius: '8px',
    border: '1px solid transparent',
    color: '#FFF',
    fontSize: '16px'
  },
  '&.MuiButton-outlined:hover': {
    backgroundColor: theme.palette.primary[200],
    color: '#FFF',
    fontSize: '16px'
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
const UIThemeBorderButton = forwardRef(CastedForwardRefButtonFnc) as CastedForwardRefNewThemeButtonType;

export default UIThemeBorderButton;
