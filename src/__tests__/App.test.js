import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App';

jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: () => [null],
}));

describe('App', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
