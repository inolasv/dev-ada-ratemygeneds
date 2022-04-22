import React from 'react';
import LoginLogout from './components/Login';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <LoginLogout />
      <Outlet />
    </div>
  );
};

export default App;
