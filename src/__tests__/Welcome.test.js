import { React, render, screen } from '@testing-library/react';
import Welcome from '../components/Welcome';

describe('Welcome', () => {
  beforeEach(() => {
    render(<Welcome />);
  });

  it('renders welcome message', () => {
    const welcomeMessage = screen.getByText(
      /thank you for showing an interest in our service./i
    );
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders additional info', () => {
    const additionalInfo = screen.getByText(
      /before we send you the postage labels we would like to ask you a few questions regarding the items you were wishing to sell/i
    );
    expect(additionalInfo).toBeInTheDocument();
  });

  it('renders link text', () => {
    const linkText = screen.getByText(/click here to get started/i);
    expect(linkText).toBeInTheDocument();
  });
});
