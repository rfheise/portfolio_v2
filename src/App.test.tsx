import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name in header', () => {
  render(<App />);
  expect(screen.getAllByText(/ryan heise/i).length).toBeGreaterThan(0);
});
