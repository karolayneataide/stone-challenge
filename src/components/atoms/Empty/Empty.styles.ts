import styled from 'styled-components/native';
import { Image as ExpoImage } from 'expo-image';

export const Image = styled(ExpoImage)`
  width: 250px;
  height: 250px;
  object-fit: contain;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;
