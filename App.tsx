import React from 'react';
import { CartProvider } from 'src/providers/CartProvider/CartProvider';
import { ThemeProvider } from 'styled-components/native';
import { NavigationProvider } from './src/routes';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <NavigationProvider />
      </CartProvider>
    </ThemeProvider>
  );
}
