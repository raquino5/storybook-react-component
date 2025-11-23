import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

test('Button is visible', () => {
  render(<Button label="Test" />);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Button does not trigger onClick when disabled', () => {
  const handleClick = jest.fn();
  render(<Button label="Disabled" disabled onClick={handleClick} />);
  const button = screen.getByRole('button', { name: /disabled/i });
  expect(button).toBeDisabled();
  fireEvent.click(button);
  expect(handleClick).not.toHaveBeenCalled();
});
