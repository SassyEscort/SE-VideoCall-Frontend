import { BoxProps } from '@mui/material/Box';
import { ButtonProps } from '@mui/material/Button';
import { ElementType, ReactElement, Ref } from 'react';

export type CastedForwardRefButtonType = <C extends ElementType>(
  props: ButtonProps<C, { component?: C }>,
  ref?: Ref<HTMLButtonElement>
) => ReactElement;

export type CastedForwardRefCheckboxType = <C extends ElementType>(
  props: BoxProps<C, { component?: C }>,
  ref?: Ref<HTMLInputElement>
) => ReactElement;

export type CastedForwardRefBoxType = <C extends ElementType>(
  props: BoxProps<C, { component?: C }>,
  ref?: Ref<HTMLElement>
) => ReactElement;
