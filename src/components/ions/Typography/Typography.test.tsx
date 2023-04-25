import { renderWithTheme } from '@utils';
import React from 'react';
import Typography from './Typography';

describe('Typography', () => {
  it('should render children text', () => {
    const { getByText } = renderWithTheme(<Typography>Test Text</Typography>);

    expect(getByText('Test Text')).toBeDefined();
  });
});
