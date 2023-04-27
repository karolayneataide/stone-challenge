import _ from 'lodash';
import styled from 'styled-components/native';
import { TypographyProps } from './Typography.props';

export const Typography = styled.Text<TypographyProps>`
  color: ${({ theme, color }) => _.get(theme.palette, color!)};
  font-size: ${({ theme, variant }) => _.get(theme.typography.sizes, variant!)};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ theme, fontWeight }) =>
    theme.typography.weights[fontWeight!]};
`;
