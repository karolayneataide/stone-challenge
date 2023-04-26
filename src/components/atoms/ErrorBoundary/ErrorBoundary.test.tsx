import { renderWithTheme } from '@utils';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should render the error message', () => {
    const { getByText } = renderWithTheme(<ErrorBoundary />);

    expect(getByText('Ocorreu um erro ao carregar a página.')).toBeDefined();
  });
});
