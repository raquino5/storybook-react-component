import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

test('Dropdown uses first option as default when no defaultValue is provided', () => {
  render(<Dropdown options={options} />);
  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toHaveValue('1');
});

test('Dropdown uses provided defaultValue when given', () => {
  render(<Dropdown options={options} defaultValue="2" />);
  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toHaveValue('2');
});

test('Dropdown calls onChange when a new option is selected', () => {
  const handleChange = jest.fn();
  render(<Dropdown options={options} onChange={handleChange} />);
  const dropdown = screen.getByRole('combobox');
  fireEvent.change(dropdown, { target: { value: '2' } });
  expect(handleChange).toHaveBeenCalledWith('2');
});

test('Dropdown is disabled when disabled prop is true', () => {
  render(<Dropdown options={options} disabled />);
  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toBeDisabled();
});
