import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders img tag', () => {
  render(<App />);
  const imgElement = screen.getByTestId('img');
  expect(imgElement).toBeInTheDocument();
});
