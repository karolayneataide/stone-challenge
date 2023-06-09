import { Container, Typography } from '@ions';
import React from 'react';
import * as S from './ErrorBoundary.styles';
import { useAssets } from 'expo-asset';
import { ImageSource } from 'expo-image';

const ErrorBoundary = () => {
  const [assets] = useAssets([require('../../../../assets/error.png')]);

  return (
    <Container>
      {assets && (
        <S.Image accessibilityRole="image" source={assets[0] as ImageSource} />
      )}
      <Typography variant="headline5" color="gray.700">
        Ocorreu um erro ao carregar a página.
      </Typography>
    </Container>
  );
};

export default ErrorBoundary;
