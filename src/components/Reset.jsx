import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { reset } from '../firebase';

const Reset = () => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <p>Forgotten your password? No worries!</p>
      <p>
        Just type the email address you signed up with below, click the
        &apos;Reset Password&apos; button and we will send you an email to reset
        your password
      </p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Link to="/">
        <button type="submit" onClick={(e) => reset(email)}>
          Reset Password
        </button>
      </Link>
      <p>Please check your junk folder for the password reset email</p>
      <p>Don&apos;t have an account?</p>
      <Link to="/sign-up">
        <p>Click here to sign up!</p>
      </Link>
    </div>
  );
};

export default Reset;
