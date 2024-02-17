import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { logout, auth } from '../firebase';

const Welcome = () => {
  const currentUser = () => {
    const u = useAuthState(auth)[0];
    return u;
  };

  const user = currentUser();

  return (
    <div>
      {' '}
      <p>Thank you for showing an interest in our service.</p>
      <p>
        Before we send you the postage labels we would like to ask you a few
        questions regarding the items you were wishing to sell
      </p>
      {user ? null : (
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      )}
      {user ? null : (
        <Link to="/sign-up">
          <button type="button">Register</button>
        </Link>
      )}
      {user ? (
        <Link to="/dashboard">
          <button type="button">Dashboard</button>
        </Link>
      ) : null}
      {user ? (
        <Link to="/">
          <button type="button" onClick={logout}>
            Sign Out
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default Welcome;
