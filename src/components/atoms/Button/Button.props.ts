import { ReactNode } from 'react';
import { ButtonProps as RNButtonProps } from 'react-native';

export type Variant = 'contained' | 'outlined';

export interface ButtonProps extends Omit<RNButtonProps, 'title'> {
  children: ReactNode;
  variant?: Variant;
  fullWidth?: Boolean;
}
