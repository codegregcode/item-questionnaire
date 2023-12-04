import React from 'react';
import '../styles/signup.css';

const SignUp = () => {
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
            placeholder="Full Name"
          />
          <input
            className="signup__textBox"
            type="number"
            placeholder="Mobile Phone"
          />
          <input
            className="signup__textBox"
            type="number"
            placeholder="Landline"
          />
          <input
            className="signup__textBox"
            type="text"
            placeholder="Address & Post Code"
          />
          <input className="signup__textBox" type="email" placeholder="Email" />
          <input
            className="signup__textBox"
            type="password"
            placeholder="Password"
          />
          <button className="signup__textBox" type="submit">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
