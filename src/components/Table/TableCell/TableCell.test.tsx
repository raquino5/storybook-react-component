import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableCell } from './TableCell';

test('renders TableCell and is visible', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell text="Hello" />
        </tr>
      </tbody>
    </table>,
  );
  const cell = screen.getByTestId('table-cell');
  expect(cell).toBeVisible();
});

test('applies disabled state styles', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell text="Hello" disabled backgroundColor="#cccccc" />
        </tr>
      </tbody>
    </table>,
  );
  const cell = screen.getByTestId('table-cell');
  expect(cell).toHaveStyle('opacity: 0.5');
  expect(cell).toHaveStyle('background-color: #cccccc');
});
