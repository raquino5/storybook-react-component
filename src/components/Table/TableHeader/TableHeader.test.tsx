import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableHeader } from './TableHeader';

test('renders TableHeader and is visible', () => {
  render(
    <table>
      <thead>
        <tr>
          <TableHeader text="Name" />
        </tr>
      </thead>
    </table>,
  );
  const header = screen.getByTestId('table-header');
  expect(header).toBeVisible();
});

test('applies disabled state styles', () => {
  render(
    <table>
      <thead>
        <tr>
          <TableHeader text="Name" disabled backgroundColor="#cccccc" />
        </tr>
      </thead>
    </table>,
  );
  const header = screen.getByTestId('table-header');
  expect(header).toHaveStyle('opacity: 0.5');
  expect(header).toHaveStyle('background-color: #cccccc');
});
