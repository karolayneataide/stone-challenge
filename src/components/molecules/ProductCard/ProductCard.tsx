import { Button } from '@atoms';
import { useCart } from '@hooks';
import { Typography } from '@ions';
import { Product } from '@types';
import React, { useMemo } from 'react';
import * as S from './ProductCard.styles';

const ProductCard = (product: Product) => {
  const { addProductToCart, removeProductFromCart, hasProductInCart } =
    useCart();

  const productInCart = useMemo(
    () => hasProductInCart(product.id),
    [hasProductInCart, product.id]
  );

  function onPressButton() {
    if (productInCart) {
      return removeProductFromCart(product.id);
    }

    return addProductToCart(product);
  }

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image
          alt={product.image.alt}
          source={{
            uri: product.image.url,
          }}
        />
      </S.ImageWrapper>
      <S.ContentWrapper>
        <S.DescriptionWrapper>
          <Typography>{product.name}</Typography>
          <Typography variant="body2" color="gray.500">
            {product.price}
          </Typography>
        </S.DescriptionWrapper>
        <S.ActionWrapper>
          <Button
            variant={productInCart ? 'outlined' : 'contained'}
            onPress={onPressButton}
          >
            {productInCart ? 'Remover' : 'Adicionar'}
          </Button>
        </S.ActionWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default ProductCard;
