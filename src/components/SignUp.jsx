import React from 'react';

const SignUp = () => {
  return (
    <div>
      <p>
        Before you tell us about your items, we need to collect a few details
        from yourself
      </p>
      <div className="register__container">
        <input type="text" placeholder="Full Name" />
        <input type="number" placeholder="Mobile Phone" />
        <input type="number" placeholder="Landline" />
        <input type="text" placeholder="Address & Post Code" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </div>
    </div>
  );
};

export default SignUp;
