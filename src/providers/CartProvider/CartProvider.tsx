import { Product } from '@types';
import React, { PropsWithChildren, createContext, useState } from 'react';

interface CartProps {
  cart: Array<Product>;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (id: number) => void;
  hasProductInCart: (id: number) => boolean;
}

export const CartContext = createContext({} as CartProps);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Array<Product>>([]);

  function addProductToCart(product: Product) {
    setCart([...cart, product]);
  }

  function removeProductFromCart(id: number) {
    const filteredCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart(filteredCart);
  }

  function hasProductInCart(id: number) {
    return Boolean(cart.find((item) => item.id === id));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        hasProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
