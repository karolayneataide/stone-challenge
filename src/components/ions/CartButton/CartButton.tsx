import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { CartButtonProps } from './CartButton.props';
import * as S from './CartButton.styles';

const CartButton = ({ navigation, tintColor }: CartButtonProps) => {
  return (
    <S.CartButton
      accessibilityRole="button"
      onPress={() => navigation.navigate('Meu carrinho')}
    >
      <Ionicons name="cart-outline" size={24} color={tintColor} />
    </S.CartButton>
  );
};

export default CartButton;
