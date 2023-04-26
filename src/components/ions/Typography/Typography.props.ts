import theme from '@theme';
import { ReactNode } from 'react';

type CommonColors = keyof typeof theme.palette.common;
type PrimaryColors = keyof typeof theme.palette.primary;
type GrayColors = keyof typeof theme.palette.gray;

export type Color =
  | `common.${CommonColors}`
  | `primary.${PrimaryColors}`
  | `gray.${GrayColors}`;

export interface TypographyProps {
  children: ReactNode;
  variant?: keyof typeof theme.typography.sizes;
  color?: Color;
  textAlign?: 'auto' | 'center' | 'justify' | 'left' | 'right';
}
