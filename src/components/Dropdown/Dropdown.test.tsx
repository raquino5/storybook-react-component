import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

test('Dropdown is visible', () => {
  render(<Dropdown options={options} />);
  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toBeVisible();
});

test('Disabled state changes background color', () => {
  render(<Dropdown options={options} disabled />);
  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toHaveStyle('background-color: #e0e0e0');
});
