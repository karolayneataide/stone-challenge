import { render } from '@testing-library/react-native';
import theme from '@theme';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

export const renderWithTheme = (children: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
