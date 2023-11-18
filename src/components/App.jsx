import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import '../styles/app.css';

const App = () => (
  <div className="App">
    <h1>Sell us your stuff</h1>
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  </div>
);

export default App;
