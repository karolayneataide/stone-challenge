import { CartContext } from '@providers';
import { useContext } from 'react';

export const useCart = () => useContext(CartContext);
