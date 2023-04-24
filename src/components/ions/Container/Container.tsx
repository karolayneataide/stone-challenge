import React, { PropsWithChildren } from 'react';
import * as S from './Container.styles';

const Container = ({ children }: PropsWithChildren) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
