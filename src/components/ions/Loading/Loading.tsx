import theme from '@theme';
import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loading = () => {
  return (
    <ActivityIndicator
      testID="loading"
      accessibilityRole="progressbar"
      size="large"
      color={theme.palette.primary[300]}
    />
  );
};

export default Loading;
