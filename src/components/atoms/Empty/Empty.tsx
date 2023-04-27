import { Container, Typography } from '@ions';
import React from 'react';
import * as S from './Empty.styles';
import { useAssets } from 'expo-asset';
import { ImageSource } from 'expo-image';
import { EmptyProps } from './Empty.props';

const Empty = ({ message }: EmptyProps) => {
  const [assets] = useAssets([require('../../../../assets/empty.png')]);

  return (
    <Container>
      {assets && (
        <S.Image accessibilityRole="image" source={assets[0] as ImageSource} />
      )}
      <Typography variant="headline5" color="gray.700">
        {message}
      </Typography>
    </Container>
  );
};

export default Empty;
