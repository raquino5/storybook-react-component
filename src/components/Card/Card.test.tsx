import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card Component', () => {
  it('renders correctly', () => {
    render(<Card title="Test" content="This is a test" />);
    expect(screen.getByText('Test')).toBeVisible();
    expect(screen.getByText('This is a test')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    render(<Card title="Disabled" content="Cannot click" disabled />);
    const card = screen.getByTestId('card');
    expect(card).toHaveStyleRule('background-color', '#ccc');
  });
});
