import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import SignUp from './SignUp';
import Header from './Header';
import ItemList from './ItemList';
import Login from './Login';
import Dashboard from './Dashboard';
import Reset from './Reset';
import '../styles/app.css';

const App = () => (
  <div className="background">
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/brochure" element={<ItemList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
