import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  margin: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.spacing[3]};
  elevation: 3;
`;

export const ImageWrapper = styled.View`
  height: 150px;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

export const ContentWrapper = styled.View`
  gap: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.palette.gray[100]};
  padding: ${({ theme }) => theme.spacing[2]};
  overflow: hidden;
`;

export const DescriptionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ActionWrapper = styled.View`
  align-items: center;
`;
