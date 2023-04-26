import styled from 'styled-components/native';

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;
