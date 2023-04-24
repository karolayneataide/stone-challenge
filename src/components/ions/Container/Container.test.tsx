import { renderWithTheme } from '@utils';
import React from 'react';
import { Text } from 'react-native';
import Container from './Container';

describe('Container', () => {
  it('renders children prop', () => {
    const { getByText } = renderWithTheme(
      <Container>
        <Text>Test</Text>
      </Container>
    );

    expect(getByText('Test')).not.toBeNull();
  });
});
