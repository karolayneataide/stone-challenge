import { Button } from '@atoms';
import { useCart } from '@hooks';
import { Typography } from '@ions';
import { Product } from '@types';
import React from 'react';
import * as S from './CartRow.styles';

const CartRow = (product: Product) => {
  const { removeProductFromCart } = useCart();

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
          <Typography variant="headline5">{product.name}</Typography>
          <Typography variant="body2" color="gray.500">
            {product.price}
          </Typography>
        </S.DescriptionWrapper>
        <S.ActionWrapper>
          <Button
            variant="outlined"
            fullWidth
            onPress={() => removeProductFromCart(product.id)}
          >
            Remover
          </Button>
        </S.ActionWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default CartRow;
