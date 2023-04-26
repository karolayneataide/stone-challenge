import { renderWithTheme } from '@utils';
import React from 'react';
import Loading from './Loading';

describe('Loading', () => {
  it('should render loading with size "large"', () => {
    const { getByTestId } = renderWithTheme(<Loading />);

    const activityIndicator = getByTestId('loading');

    expect(activityIndicator).toBeTruthy();
    expect(activityIndicator.props.size).toEqual('large');
  });
});
