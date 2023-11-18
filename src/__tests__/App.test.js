import { React, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App';

describe('App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  });

  it('renders h1 title', () => {
    const h1Element = screen.getByText(/sell us your stuff/i);
    expect(h1Element).toBeInTheDocument();
  });
});
