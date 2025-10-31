import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  const imageUrl =
    'https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg';

  test('renders the component and displays the title', () => {
    render(<HeroImage imageUrl={imageUrl} title="Test Hero" />);
    const titleElement = screen.getByText('Test Hero');
    expect(titleElement).toBeVisible();
  });

  test('applies disabled styles when disabled prop is true', () => {
    render(<HeroImage imageUrl={imageUrl} title="Test Hero" disabled />);
    const wrapper = screen.getByTestId('hero');
    expect(wrapper).toHaveStyleRule('filter', 'grayscale(100%)');
    expect(wrapper).toHaveStyleRule('cursor', 'not-allowed');

    const title = screen.getByText('Test Hero');
    expect(title).toHaveStyleRule('opacity', '0.6');
  });
});
