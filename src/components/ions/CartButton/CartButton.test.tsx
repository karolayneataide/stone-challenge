import { fireEvent } from '@testing-library/react-native';
import { renderWithTheme } from '@utils';
import React from 'react';
import CartButton from './CartButton';

describe('CartButton', () => {
  it('should navigate to "Meu carrinho" when pressed', () => {
    const navigation = { navigate: jest.fn() };
    const { getByRole } = renderWithTheme(
      <CartButton navigation={navigation} />
    );

    fireEvent.press(getByRole('button'));

    expect(navigation.navigate).toHaveBeenCalledWith('Meu carrinho');
  });
});
