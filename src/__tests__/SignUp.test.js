import { React, render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from '../components/SignUp';

jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: () => [null],
}));

describe('SignUp', () => {
  beforeEach(() => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
  });

  it('renders SignUp component correctly', () => {
    const signUpComponent = screen.getByText(
      /Before you tell us about your items/i
    );
    expect(signUpComponent).toBeInTheDocument();
  });

  it('renders all input fields', () => {
    const fullNameInput = screen.getByPlaceholderText(/Full Name/i);
    const mobilePhoneInput = screen.getByPlaceholderText(/Mobile Phone/i);
    const landlineInput = screen.getByPlaceholderText(/Landline/i);
    const addressInput = screen.getByPlaceholderText(/Address & Post Code/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);

    expect(fullNameInput).toBeInTheDocument();
    expect(mobilePhoneInput).toBeInTheDocument();
    expect(landlineInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('updates input fields correctly', () => {
    const fullNameInput = screen.getByPlaceholderText(/Full Name/i);
    const mobilePhoneInput = screen.getByPlaceholderText(/Mobile Phone/i);
    const landlineInput = screen.getByPlaceholderText(/Landline/i);
    const addressInput = screen.getByPlaceholderText(/Address & Post Code/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);

    act(() => {
      fireEvent.change(fullNameInput, { target: { value: 'Zesty Testy' } });
      fireEvent.change(mobilePhoneInput, { target: { value: '1234567890' } });
      fireEvent.change(landlineInput, { target: { value: '0987654321' } });
      fireEvent.change(addressInput, { target: { value: '123 Fake St, LS1' } });
      fireEvent.change(emailInput, {
        target: { value: 'john.doe@example.com' },
      });
      fireEvent.change(passwordInput, { target: { value: 'securepassword' } });
    });

    expect(fullNameInput.value).toBe('Zesty Testy');
    expect(mobilePhoneInput.value).toBe('1234567890');
    expect(landlineInput.value).toBe('0987654321');
    expect(addressInput.value).toBe('123 Fake St, LS1');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(passwordInput.value).toBe('securepassword');
  });
});
