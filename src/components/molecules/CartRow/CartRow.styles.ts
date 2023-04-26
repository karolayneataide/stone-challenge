import styled from 'styled-components/native';

export const Wrapper = styled.View`
  height: 130px;
  margin: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.spacing[3]};
  elevation: 3;
  flex-direction: row;
`;

export const ImageWrapper = styled.View`
  width: 130px;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const ContentWrapper = styled.View`
  flex-grow: 1;
  gap: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.palette.gray[100]};
  padding: ${({ theme }) => theme.spacing[4]};
`;

export const DescriptionWrapper = styled.View`
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const ActionWrapper = styled.View`
  align-items: center;
`;
