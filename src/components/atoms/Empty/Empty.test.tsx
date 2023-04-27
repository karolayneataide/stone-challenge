import { renderWithTheme } from '@utils';
import React from 'react';
import ErrorBoundary from './Empty';

describe('ErrorBoundary', () => {
  it('should render the error message', () => {
    const { getByText } = renderWithTheme(<ErrorBoundary />);

    expect(getByText('Nenhum item no carrinho')).toBeDefined();
  });
});
