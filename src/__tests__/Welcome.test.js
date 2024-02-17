import { React, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Welcome from '../components/Welcome';

jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: () => [null],
}));

describe('Welcome', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Welcome />
      </MemoryRouter>
    );
  });

  it('renders login button and additional info', () => {
    const loginBtn = screen.getByText(/Login/i);
    expect(loginBtn).toBeInTheDocument();

    const additionalInfo = screen.getByText(
      /before we send you the postage labels we would like to ask you a few questions regarding the items you were wishing to sell/i
    );
    expect(additionalInfo).toBeInTheDocument();
  });
});
