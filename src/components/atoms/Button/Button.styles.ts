import styled from 'styled-components/native';
import { ButtonProps } from './Button.props';

export const Button = styled.TouchableOpacity<ButtonProps>`
  border-radius: ${({ theme }) => theme.spacing[8]};
  padding-vertical: ${({ theme }) => theme.spacing[2]};
  padding-horizontal: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme, variant }) =>
    variant === 'contained'
      ? theme.palette.primary[300]
      : theme.palette.common.transparent};

  ${({ theme, variant }) =>
    variant === 'outlined' &&
    `
    border-color: ${theme.palette.primary[300]};
    border-width: 1px;
    border-style: solid;
  `}

  ${({ fullWidth }) =>
    fullWidth &&
    `
    width: 100%;
  `}
`;
