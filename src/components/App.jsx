import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import SignUp from './SignUp';
import Header from './Header';
import '../styles/app.css';

const App = () => (
  <div className="background">
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
