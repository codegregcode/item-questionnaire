import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from '../firebase';
import '../styles/signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [landline, setLandline] = useState('');
  const [address, setAddress] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) console.error('Please enter name');
    registerWithEmailAndPassword(
      name,
      email,
      password,
      address,
      landline,
      mobile
    );
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/brochure');
  }, [user, loading, navigate]);

  return (
    <>
      <p>
        Before you tell us about your items, we need to collect a few details
        from yourself
      </p>
      <div className="signup">
        <div className="signup__container">
          <input
            className="signup__textBox"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            className="signup__textBox"
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile Phone"
          />
          <input
            className="signup__textBox"
            type="number"
            value={landline}
            onChange={(e) => setLandline(e.target.value)}
            placeholder="Landline"
          />
          <input
            className="signup__textBox"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address & Post Code"
          />
          <input
            className="signup__textBox"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="signup__textBox"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="signup__btn" onClick={register} type="submit">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
