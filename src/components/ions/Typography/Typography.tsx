import React from 'react';
import { TypographyProps } from './Typography.props';
import * as S from './Typography.styles';

const Typography = ({
  children,
  variant = 'body1',
  color = 'gray.700',
  textAlign = 'justify',
  fontWeight = 'medium',
}: TypographyProps) => (
  <S.Typography
    variant={variant}
    color={color}
    textAlign={textAlign}
    fontWeight={fontWeight}
  >
    {children}
  </S.Typography>
);

export default Typography;
