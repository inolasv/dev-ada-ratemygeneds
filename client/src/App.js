import React from 'react';

import Login from './components/Login';
import Logout from './components/Logout';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h2>The Components way</h2>
      <Login />
      <Logout />
      <Outlet />
    </div>
  );
};

export default App;
