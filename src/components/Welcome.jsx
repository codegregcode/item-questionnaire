import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      {' '}
      <p>Thank you for showing an interest in our service.</p>
      <p>
        Before we send you the postage labels we would like to ask you a few
        questions regarding the items you were wishing to sell
      </p>
      <Link to="/sign-up">Click here to get started</Link>
    </div>
  );
};

export default Welcome;
