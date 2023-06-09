import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { CartProvider } from './src/providers/CartProvider/CartProvider';
import { NavigationProvider } from './src/routes';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <StatusBar style="light" />
        <NavigationProvider />
      </CartProvider>
    </ThemeProvider>
  );
}
