import { React, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, login } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
  }, [user, loading, navigate]);

  return (
    <div>
      <h3>Sign In</h3>
      <div className="login__container">
        <input
          className="login__textBox"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          className="login__textBox"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit" onClick={() => login(email, password)}>
          Sign In
        </button>
        <p>Forgotten your password?</p>
        <Link to="/reset">
          <p>Click here to reset</p>
        </Link>
        <p>Don&apos;t have an account?</p>
        <Link to="/sign-up">
          <p>Click here to sign up</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
