import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import * as S from './CartButton.styles';

const CartButton = ({ navigation }: { navigation: any }) => {
  return (
    <S.CartButton
      accessibilityRole="button"
      onPress={() => navigation.navigate('Meu carrinho')}
    >
      <Ionicons name="cart-outline" size={24} />
    </S.CartButton>
  );
};

export default CartButton;
