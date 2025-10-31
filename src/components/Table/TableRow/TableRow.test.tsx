import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableRow } from './TableRow';

const cells = ['John', '28', 'Canada'];

test('renders TableRow and is visible', () => {
  render(
    <table>
      <tbody>
        <TableRow cells={cells} />
      </tbody>
    </table>,
  );
  const row = screen.getByTestId('table-row');
  expect(row).toBeVisible();
});

test('applies disabled state styles', () => {
  render(
    <table>
      <tbody>
        <TableRow cells={cells} disabled backgroundColor="#cccccc" />
      </tbody>
    </table>,
  );
  const row = screen.getByTestId('table-row');
  expect(row).toHaveStyle('opacity: 0.5');
  expect(row).toHaveStyle('background-color: #cccccc');
});
