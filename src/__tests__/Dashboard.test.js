import { React, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: () => [{ email: 'test@zest.net' }],
}));

describe('Dashboard', () => {
  it('renders title, link and boxes', () => {
    render(
      <Router>
        <Dashboard />
      </Router>
    );
    const title = screen.getByText(/Dashboard/i);
    const link = screen.getByText(/Click/i);
    const boxes = screen.getByText(/Boxes:/i);

    expect(title).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(boxes).toBeInTheDocument();
  });
});
