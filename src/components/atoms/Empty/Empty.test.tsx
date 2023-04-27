import { renderWithTheme } from '@utils';
import React from 'react';
import Empty from './Empty';

describe('ErrorBoundary', () => {
  it('should render the error message', () => {
    const { getByText } = renderWithTheme(
      <Empty message="Nenhum item no carrinho" />
    );

    expect(getByText('Nenhum item no carrinho')).toBeDefined();
  });
});
