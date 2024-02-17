import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <p>
        Click <Link to="/brochure">here</Link> to see the brochure
      </p>
      <div className="box-container">
        <h4>Boxes:</h4>
      </div>
    </div>
  );
};

export default Dashboard;
