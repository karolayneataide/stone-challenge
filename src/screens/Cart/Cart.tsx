import { useCart } from '@hooks';
import { CartRow } from '@molecules';
import React from 'react';
import { FlatList } from 'react-native';
import * as S from './Cart.styles';

const Cart = () => {
  const { cart } = useCart();

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
