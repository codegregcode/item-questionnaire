import { React, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Reset from '../components/Reset';

describe('Reset', () => {
  it('should display the email input field', () => {
    render(
      <Router>
        <Reset />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
  });

  it('should display the reset password button', () => {
    render(
      <Router>
        <Reset />
      </Router>
    );

    const resetButton = screen.getByText('Reset Password');
    expect(resetButton).toBeInTheDocument();
  });

  it('should display a message about checking junk folder', () => {
    render(
      <Router>
        <Reset />
      </Router>
    );

    const message = screen.getByText(
      'Please check your junk folder for the password reset email'
    );
    expect(message).toBeInTheDocument();
  });
});
