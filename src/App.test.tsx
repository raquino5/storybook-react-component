import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders footer with name', () => {
  render(<App />);
  const [footerText] = screen.getAllByText(/Ralph Aquino/i);
  expect(footerText).toBeInTheDocument();
});
