import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.common.white};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
`;
