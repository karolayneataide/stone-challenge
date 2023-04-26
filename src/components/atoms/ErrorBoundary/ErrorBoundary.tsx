import { Container, Typography } from '@ions';
import React from 'react';
import * as S from './ErrorBoundary.styles';

const ErrorBoundary = () => {
  return (
    <Container>
      <S.Image
        accessibilityRole="image"
        source={require('../../../../assets/error.png')}
      />
      <Typography>Ocorreu um erro ao carregar a página.</Typography>
    </Container>
  );
};

export default ErrorBoundary;
