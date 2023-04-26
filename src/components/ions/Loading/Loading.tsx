import React from 'react';
import * as S from './Loading.styles';

const Loading = () => {
  return (
    <S.Loading testID="loading" accessibilityRole="progressbar" size="large" />
  );
};

export default Loading;
