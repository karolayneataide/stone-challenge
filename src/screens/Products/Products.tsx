import { Empty, ErrorBoundary } from '@atoms';
import { useProducts } from '@hooks';
import { Container, Loading } from '@ions';
import { ProductList } from '@organisms';
import React from 'react';
import * as S from './Products.styles';

const Products = () => {
  const { data: products, loading, error } = useProducts();

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  if (error) {
    return <ErrorBoundary />;
  }

  if (!products?.length) {
    return <Empty message="Nenhum produto cadastrado" />;
  }

  return (
    <S.Wrapper>
      <ProductList products={products!} />
    </S.Wrapper>
  );
};

export default Products;
