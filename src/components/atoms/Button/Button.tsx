import { Color, Typography } from '@ions';
import React from 'react';
import { ButtonProps, Variant } from './Button.props';
import * as S from './Button.styles';

const textColorModifiers: Record<Variant, Color> = {
  contained: 'common.white',
  outlined: 'primary.300',
};

const Button = ({
  children,
  variant = 'contained',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Button variant={variant} fullWidth={fullWidth} {...props}>
      <Typography
        color={textColorModifiers[variant]}
        variant="button"
        textAlign="center"
      >
        {children}
      </Typography>
    </S.Button>
  );
};

export default Button;
