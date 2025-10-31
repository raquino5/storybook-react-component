import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  test('renders the component and label is visible', () => {
    render(<RadioButton label="Option A" name="test" value="a" onChange={() => {}} />);
    const label = screen.getByText('Option A');
    expect(label).toBeInTheDocument();
  });

  test('background color changes when disabled', () => {
    render(
      <RadioButton
        label="Disabled Option"
        name="test"
        value="b"
        disabled
        backgroundColor="#f0f0f0"
      />,
    );
    const label = screen.getByTestId('radio-label');
    expect(label).toHaveStyle('opacity: 0.5');
    expect(label).toHaveStyle('cursor: not-allowed');
  });
});
