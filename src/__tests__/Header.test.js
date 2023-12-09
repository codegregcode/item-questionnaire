import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders Header component correctly', () => {
    render(<Header />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByTestId('svg-container')).toBeInTheDocument();
  });
});
