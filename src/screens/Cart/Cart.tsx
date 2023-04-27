import { useCart } from '@hooks';
import { CartRow } from '@molecules';
import React from 'react';
import { FlatList } from 'react-native';
import * as S from './Cart.styles';
import { Empty } from '@atoms';

const Cart = () => {
  const { cart } = useCart();

  if (!cart.length) {
    return <Empty message="Nenhum item no carrinho" />;
  }

  return (
    <S.Wrapper>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartRow {...item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </S.Wrapper>
  );
};

export default Cart;
