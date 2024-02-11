import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('renders Header component correctly', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByTestId('svg-container')).toBeInTheDocument();
  });
});
