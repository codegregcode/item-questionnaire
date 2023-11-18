import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import SignUp from './SignUp';
import '../styles/app.css';

const App = () => (
  <div className="App">
    <h1>Sell us your stuff</h1>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  </div>
);

export default App;
