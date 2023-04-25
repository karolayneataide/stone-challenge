import { Product } from '@types';
import React, { PropsWithChildren, createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Array<Product>>([]);

  function addProductToCart(product: Product) {
    setCart([...cart, product]);
  }

  function removeProductFromCart(id: number) {
    const filteredCart = cart.filter((cartItem) => cartItem.id === id);
    setCart(filteredCart);
  }

  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
