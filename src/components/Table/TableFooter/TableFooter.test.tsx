import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableFooter } from './TableFooter';

test('renders TableFooter and is visible', () => {
  render(
    <table>
      <TableFooter text="Total: $100" />
    </table>,
  );
  const footer = screen.getByTestId('table-footer');
  expect(footer).toBeVisible();
});

test('applies disabled state styles', () => {
  render(
    <table>
      <TableFooter text="Total: $100" disabled backgroundColor="#cccccc" />
    </table>,
  );
  const footer = screen.getByTestId('table-footer');
  expect(footer).toHaveStyle('opacity: 0.5');
  expect(footer).toHaveStyle('background-color: #cccccc');
});
